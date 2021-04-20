import PropTypes from 'prop-types'
import React from 'react'
import { get as pathGet, set as pathSet } from '@irrelon/path'

const getTemplateDataValue = (data, templateString) => {
  const regexp = /\${([\s\S]+?)}/g
  const matches = regexp.exec(templateString)

  if (!matches) return undefined

  return pathGet(data, matches[1])
}

const parseTemplateString = (data, templateString) => {
  let finalValue = templateString

  // Break out the data requests in the template string and
  // render the data in place of tokens
  const regexp = /\${([\s\S]+?)}/g
  const matchData = templateString.match(regexp)
  let matches

  if (matchData !== null && matchData.length === 1) {
    // Only one item in the template string, return the value proper
    matches = regexp.exec(templateString)
    return pathGet(data, matches[1])
  }

  // The template string contains more than one item, we have to
  // return a string instead
  while ((matches = regexp.exec(templateString))) {
    const matchString = matches[0]
    const dataPath = matches[1]

    finalValue = finalValue.replace(matchString, pathGet(data, dataPath))
  }

  return finalValue
}

const processDynamicProps = (obj, props, visited = []) => {
  const finalObj = obj instanceof Array ? [] : {}

  for (const i in obj) {
    if (!Object.hasOwnProperty.call(obj, i)) continue
    const fieldValue = obj[i]
    const fieldValueType = typeof fieldValue

    if (fieldValueType === 'object') {
      if (visited.indexOf(fieldValue) > -1) continue
      visited.push(fieldValue)
      finalObj[i] = processDynamicProps(fieldValue, props, visited)
      continue
    }

    if (fieldValueType === 'string' && fieldValue.indexOf('${') > -1) {
      finalObj[i] = parseTemplateString(props, fieldValue)
      continue
    }

    finalObj[i] = fieldValue
  }

  return finalObj
}

const isConditionalSatisfied = (conditional, data) => {
  const { prop, operator, value } = conditional

  // Get the conditional prop data
  const propData = getTemplateDataValue(data, prop)

  switch (operator) {
    case 'gt':
      if (propData <= value) return false
      break

    case 'gte':
      if (propData < value) return false
      break

    case 'lt':
      if (propData >= value) return false
      break

    case 'lte':
      if (propData > value) return false
      break

    case 'eeq':
      if (propData !== value) return false
      break

    case 'eq':
      // eslint-disable-next-line eqeqeq
      if (propData != value) return false
      break

    case 'nee':
      if (propData === value) return false
      break

    case 'ne':
      // eslint-disable-next-line eqeqeq
      if (propData == value) return false
      break

    default:
      break
  }

  return true
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
  // console.log('Dynamic: Rendering with props', props)
  if (!content.length) {
    return <>{children}</>
  }

  return (
    <>
      {content.map((contentItem, index) => {
        const { component, content: itemContent, props = {}, dynamicProps, ...otherItemProps } = contentItem

        if (!component) return <div>Content item does not include a `component` value! {JSON.stringify(contentItem)}</div>
        const ComponentClass = componentMap[component]

        if (!ComponentClass) {
          return <div key={`${component}_${index}`}>Unknown component &quot;{component}&quot; - please add the {component} component to the componentMap prop.</div>
        }

        // Check if the contentItem has a conditional
        if (contentItem.conditional) {
          if (!isConditionalSatisfied(contentItem.conditional, { ...otherProps, ...props, ...otherItemProps })) return null
        }

        // Check if the contentItem has an iterator
        if (contentItem.iterator) {
          // We have to iterate over the array defined in iterator.prop
          // and render the component for each item of the array
          return renderIterator(contentItem, contentItem.iterator, { ...otherProps, ...props, ...otherItemProps, componentMap })
        }

        // console.log('Dynamic: +++ Start', component)

        // Check for prop replacement sub-content
        const dynamicPropEntries = (typeof dynamicProps === 'object' && Object.entries(dynamicProps)) || []
        if (dynamicPropEntries.length) {
          dynamicPropEntries.forEach(([propName, subContentItem]) => {
            // Check type of subContentItem
            if (typeof subContentItem === 'string') {
              // Direct template string replacement
              pathSet(props, propName, parseTemplateString({ ...otherProps, ...props, ...otherItemProps }, subContentItem))
            } else if (subContentItem instanceof Array) {
              const arr = processDynamicProps(subContentItem, { ...otherProps, ...props, ...otherItemProps })
              pathSet(props, propName, arr)
            } else if (typeof subContentItem === 'object') {
              // Scan for prop template strings in fields and values
              subContentItem.props = processDynamicProps(subContentItem.props, { ...otherProps, ...props, ...otherItemProps })

              // console.log('Dynamic: Rendering sub-component', subContentItem.component, 'as prop', propName)

              // Replace the labelled prop with this component
              // console.log(`Dynamic: Assigning prop ${propName} to dynamic from`, subContentItem)
              pathSet(props, propName, <Dynamic componentMap={componentMap} content={[subContentItem]} {...otherProps} {...otherItemProps} />)
            } else {
              throw new Error(`Unrecognised dynamicProp value: ${JSON.stringify(subContentItem)}`)
            }
          })
        }

        // console.log('Dynamic: Rendering component', component, 'with props', props)
        // console.log('Dynamic: --- End', component)

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

export default Dynamic

Dynamic.propTypes = {
  children: PropTypes.any,
  componentMap: PropTypes.object,
  content: PropTypes.array
}

Dynamic.defaultProps = {
  componentMap: {},
  content: []
}
