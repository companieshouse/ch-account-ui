import PropTypes from 'prop-types'
import React from 'react'
import { getTemplateDataValue, parseTemplateString, processDynamicProps } from '../services/template'
import { set as pathSet } from '@irrelon/path'
import withTransformedErrors from '../services/withTransformedErrors'

const log = (...rest) => {
  // console.log(...rest)
}

const isConditionalSatisfied = (conditional, data) => {
  if (conditional instanceof Array) {
    // This is an array of conditionals - implicit AND e.g.
    // condition1 AND condition2 then true else false
    return conditional.every((condition) => isConditionalSatisfied(condition, data))
  }

  const { prop, operator, value } = conditional

  // Get the conditional prop data
  const propData = getTemplateDataValue(data, prop)
  console.log('Running conditional', conditional, propData)
  switch (operator) {
    case 'gt':
      if (propData > value) return true
      break

    case 'gte':
      if (propData >= value) return true
      break

    case 'lt':
      if (propData < value) return true
      break

    case 'lte':
      if (propData <= value) return true
      break

    case 'eeq':
      if (propData === value) return true
      break

    case 'eq':
      // eslint-disable-next-line eqeqeq
      if (propData == value) return true
      break

    case 'nee':
      if (propData !== value) return true
      break

    case 'ne':
      // eslint-disable-next-line eqeqeq
      if (propData != value) return true
      break

    case 'not':
      if (!propData) return true
      break

    default:
      break
  }
  console.log('Returning false')
  return false
}

const renderIterator = (contentItem, iterator, data) => {
  const { prop, name, index } = iterator

  // Get the iterator prop data (the array to iterate over)
  const propData = getTemplateDataValue(data, prop)
  if (!(propData instanceof Array)) return null

  return <>
    {propData.map((propDataItem, propDataIndex) =>
      <Dynamic key={propDataIndex} {...data} content={[{
        component: contentItem.component,
        content: contentItem.content,
        dynamicProps: contentItem.dynamicProps,
        props: contentItem.props
      }]} {...{ [index]: propDataIndex }} {...{ [name]: propDataItem }} />
    )}
  </>
}

/**
 * @typedef {Object} DynamicContentComponent
 * @property {string} component The component to render.
 * @property {Array<DynamicContentComponent>} [content] If provided,
 * renders the content array of components as the children of this
 * component.
 * @property {Object} props The props to pass to the react component.
 * @property {Object} [dynamicProps] If provided, replaces the props
 * passed to the component with data dynamically read from passed in
 * props.
 */

/**
 * @typedef {Object} DynamicProps
 * @property {Array<DynamicContentComponent>} content The dynamic content of this component.
 * @property {Object} componentMap An object containing a map from component name to React
 * component.
 * @property {*} children Render children body content for the Dynamic element.
 * @property {*} ... Any other custom props.
 */

/**
 * Renders dynamic content from a JSON structure.
 * @param {DynamicProps} props The props for Dynamic.
 * @returns {JSX.Element} The rendered dynamic content.
 * @constructor
 */
const Dynamic = (props) => {
  const { content = [], componentMap = {}, children, ...otherProps } = props
  log('<Dynamic>: Rendering with props', props)
  if (!content.length) {
    return <>{children}</>
  }

  return (
    <>
      {content.map((contentItem, index) => {
        const {
          component,
          content: itemContent,
          props = {},
          dynamicProps,
          conditional,
          iterator,
          ...otherItemProps
        } = contentItem

        if (!component) return <div>Content item does not include a `component` value! {JSON.stringify(contentItem)}</div>
        const ComponentClass = componentMap[component]

        if (!ComponentClass) {
          return <div key={`${component}_${index}`}>Unknown component &quot;{component}&quot; - please add the {component} component to the componentMap prop.</div>
        }

        // Check if the contentItem has a conditional
        if (conditional) {
          if (!isConditionalSatisfied(conditional, { ...otherProps, ...props, ...otherItemProps })) return null
        }

        // Check if the contentItem has an iterator
        if (iterator) {
          // We have to iterate over the array defined in iterator.prop
          // and render the component for each item of the array
          return renderIterator(contentItem, iterator, { ...otherProps, ...props, ...otherItemProps, componentMap })
        }

        log('Dynamic: +++ Render component:', component)

        // Check for prop replacement sub-content
        const dynamicPropEntries = (typeof dynamicProps === 'object' && Object.entries(dynamicProps)) || []
        if (dynamicPropEntries.length) {
          dynamicPropEntries.forEach(([propName, subContentItem]) => {
            // Check type of subContentItem
            if (typeof subContentItem === 'string') {
              // Direct template string replacement
              pathSet(props, propName, parseTemplateString({ ...otherProps, ...props, ...otherItemProps }, subContentItem, false, false))
              log(`Dynamic: Replacing prop "${propName}" with new val`, props[propName], props)
            } else if (subContentItem instanceof Array) {
              const arr = processDynamicProps(subContentItem, { ...otherProps, ...props, ...otherItemProps })
              pathSet(props, propName, arr)
              log(`Dynamic: Replacing prop "${propName}" with array-based new val`, props[propName], props)
            } else if (typeof subContentItem === 'object') {
              // Scan for prop template strings in fields and values
              subContentItem.props = processDynamicProps(subContentItem.props, { ...otherProps, ...props, ...otherItemProps })

              log('Dynamic: Rendering sub-component', subContentItem.component, 'as prop', propName)

              // Replace the labelled prop with this component
              log(`Dynamic: Assigning prop ${propName} to dynamic from`, subContentItem)
              pathSet(props, propName, <Dynamic componentMap={componentMap} content={[subContentItem]} {...otherProps} {...otherItemProps} />)
            } else {
              throw new Error(`Unrecognised dynamicProp value: ${JSON.stringify(subContentItem)}`)
            }
          })
        }

        log('Dynamic: Rendering component', component, 'with props', props)
        log('Dynamic: --- End', component)

        return <ComponentClass key={`${component}_${index}`} {...otherProps} {...otherItemProps} {...props}>
          {props.children}
          {Boolean(itemContent) === true && itemContent.length > 0 && <Dynamic
            componentMap={componentMap}
            content={itemContent}
            {...otherProps}
            {...otherItemProps}
          />}
        </ComponentClass>
      })}
      {children}
    </>
  )
}

export default withTransformedErrors(Dynamic)

Dynamic.propTypes = {
  children: PropTypes.any,
  componentMap: PropTypes.object,
  content: PropTypes.array
}

Dynamic.defaultProps = {
  componentMap: {},
  content: []
}
