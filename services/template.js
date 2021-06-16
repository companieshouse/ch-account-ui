import { get as pathGet } from '@irrelon/path'

/**
 * Gets the data based on path notation from the string template.
 * Only the first template item is processed.
 * E.g. templateString = "${foo.bar}${somethingElse}${andMore}" and
 * data = {"foo": {"bar": 1}} then this function will return 1 since
 * that is the value of `data.foo.bar`.
 * @param {Object|Array} data The data to extract the value from.
 * @param {String} templateString The template string containing a
 * JavaScript-style template e.g. "${something}".
 * @returns {*}
 */
export const getTemplateDataValue = (data, templateString) => {
  const regexp = /\${([\s\S]+?)}/g
  const matches = regexp.exec(templateString)

  if (!matches) return undefined

  return pathGet(data, matches[1])
}

/**
 * Parses a template string and replaces the template markers with
 * the corresponding data. [See getTemplateDataValue()] for more info.
 * This function differs from getTemplateDataValue() in that if there
 * is only one template marker in the string, the value of that data
 * is returned. If there is more than one marker or if the template
 * string contains other text (doing a string concatenation) then a
 * string is returned instead.
 * @param {Object|Array} data The data to extract the value from.
 * @param {String} templateString The template string containing a
 * JavaScript-style template e.g. "Your name is ${user.firstName}".
 * @param {Boolean} [forceString=false] If true, the return value
 * will always be a string.
 * @param {Boolean} [replaceIfUndefined=true] If true and the
 * corresponding data value for a template marker is undefined
 * the value "undefined" will be inserted. If false, the template
 * string marker will be left intact.
 * @returns {*}
 */
export const parseTemplateString = (data, templateString, forceString = false, replaceIfUndefined = true) => {
  let finalValue = templateString

  // Break out the data requests in the template string and
  // render the data in place of tokens
  const regexp = /\${([\s\S]+?)}/g

  const matchData = templateString?.match(regexp)
  let matches

  if (forceString === false && matchData !== null && matchData.length === 1 && templateString.indexOf('${') === 0) {
    // Only one item in the template string, return the value proper
    matches = regexp.exec(templateString)

    // We only return here if the templateString had no further matches
    if (!regexp.exec(templateString)) {
      const value = pathGet(data, matches[1])

      if (value !== undefined || replaceIfUndefined === true) {
        return value
      }

      return templateString
    }
  }

  // Re-initialise the regexp so the state is reset
  regexp.lastIndex = 0

  // The template string contains more than one item, we have to
  // return a string instead
  while ((matches = regexp.exec(templateString))) {
    const matchString = matches[0]
    const value = pathGet(data, matches[1])

    if (value !== undefined || replaceIfUndefined === true) {
      finalValue = finalValue.replace(matchString, value)
    }
  }

  return finalValue
}

export const processDynamicProps = (obj, props, visited = []) => {
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
