import PropTypes from 'prop-types'
import React from 'react'
import InputField from '../general-ui/interaction/InputField'
import { errorsPropType } from '../../services/propTypes'
import LinkText from '../general-ui/interaction/LinkText'
import { translate } from '../../services/translate'
import WithLang from '../../services/lang/WithLang'

const ValidatedCreatePasswordCallback = ({ lang, errors, element, customElementProps, groupError, hasShowPasswordSuffix }) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()
  const isEchoOn = element.getOutputValue('echoOn')

  return (
    <InputField
      id={id}
      type={isEchoOn === true || showPassword ? 'text' : 'password'}
      autoComplete="current-password"
      label={label}
      errors={errors}
      testId="passwordInputField"
      groupError={groupError}
      suffix={hasShowPasswordSuffix === true && <LinkText
        testId={`showHidePassword_${id}`}
        href={'#showHidePassword'}
        onClick={(ev) => {
          ev.preventDefault()
          ev.stopPropagation()
          setShowPassword(!showPassword)
          return false
        }}
        style={{ paddingLeft: '1em', paddingRight: '1em' }}
      >
        {translate(lang, `PASSWORD_${showPassword ? 'HIDE' : 'SHOW'}`)}
      </LinkText>}
      {...customElementProps}
    />
  )
}

export default WithLang(ValidatedCreatePasswordCallback)

ValidatedCreatePasswordCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  errors: errorsPropType,
  groupError: PropTypes.string
}

ValidatedCreatePasswordCallback.defaultProps = {
  customElementProps: {},
  errors: [],
  hasShowPasswordSuffix: true
}
