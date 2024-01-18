import React, { useEffect, useState } from 'react';

import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import {
  Form, Icon, IconButton, OverlayTrigger, Tooltip, useToggle,
} from '@edx/paragon';
import {
  Check, Remove, Visibility, VisibilityOff,
} from '@edx/paragon/icons';
import PropTypes from 'prop-types';

import { LETTER_REGEX, NUMBER_REGEX } from '../data/constants';
import messages from './messages';
import iconWarning from './assets/Warning.svg'
import eysViewIcon from './assets/Eye-view.svg'
import eysHideIcon from './assets/Eye-hide.svg'

const PasswordField = (props) => {
  const { formatMessage } = props.intl;
  const [isPasswordHidden, setHiddenTrue, setHiddenFalse] = useToggle(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [error ,setError] = useState(false)


  useEffect(()=>{
    if (props.errorLogin){
      setError(true)
    }
  },[props.errorLogin])


  const handleBlur = (e) => {
    setError(false)
    if (props.handleBlur) { props.handleBlur(e); }
    setShowTooltip(props.showRequirements && false);
  };

  const handleFocus = (e) => {
    setError(false)
    if (props.handleFocus) {
      props.handleFocus(e);
    }
    setTimeout(() => setShowTooltip(props.showRequirements && true), 150);
  };
  const handlerHidePwd = (e)=>{
    e.preventDefault()
    setHiddenTrue()
  }
  const HideButton = (
    <button className='btn-outline' type="button"  onFocus={handleFocus} onBlur={handleBlur} name="passwordValidation" onClick={handlerHidePwd}>
    <img src={eysHideIcon} alt='hide' />
  </button>
    // <IconButton onFocus={handleFocus} onBlur={handleBlur} name="passwordValidation" src={VisibilityOff} iconAs={Icon} onClick={setHiddenTrue} size="sm" variant="secondary" alt={formatMessage(messages['hide.password'])} />
  );
    const handlerViewPwd = (e)=>{
      e.preventDefault()
      setHiddenFalse()
    }
  const ShowButton = (
    <button className='btn-outline' type="button"  onBlur={handleBlur} name="passwordValidation"  onClick={handlerViewPwd}>
      <img src={eysViewIcon} alt='view' />
    </button>
    // <IconButton onFocus={handleFocus} onBlur={handleBlur} name="passwordValidation" src={Visibility} iconAs={Icon} onClick={setHiddenFalse} size="sm" variant="" alt={formatMessage(messages['show.password'])}></IconButton>
  );
  const placement = window.innerWidth < 768 ? 'top' : 'left';
  const tooltip = (
    <Tooltip id={`password-requirement-${placement}`}>
      <span id="letter-check" className="d-flex align-items-center">
        {LETTER_REGEX.test(props.value) ? <Icon className="text-success mr-1" src={Check} /> : <Icon className="mr-1 text-light-700" src={Remove} />}
        {formatMessage(messages['one.letter'])}
      </span>
      <span id="number-check" className="d-flex align-items-center">
        {NUMBER_REGEX.test(props.value) ? <Icon className="text-success mr-1" src={Check} /> : <Icon className="mr-1 text-light-700" src={Remove} />}
        {formatMessage(messages['one.number'])}
      </span>
      <span id="characters-check" className="d-flex align-items-center">
        {props.value.length >= 8 ? <Icon className="text-success mr-1" src={Check} /> : <Icon className="mr-1 text-light-700" src={Remove} />}
        {formatMessage(messages['eight.characters'])}
      </span>
    </Tooltip>
  );

    let messagesError = props.errorMessage
    if (props.errorMessage == 'The password is too similar to the username.'){
      messagesError = 'Mật khẩu không được giống với tên người dùng.'
    }
    
  return (
    <Form.Group controlId={props.name} isInvalid={props.errorMessage !== '' || error}>
       <Form.Control
          as="input"
          className="form-field"
          type={isPasswordHidden ? 'password' : 'text'}
          name={props.name}
          value={props.value}
          autoComplete={props.autoComplete}
          aria-invalid={props.errorMessage !== ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={props.handleChange}
          controlClassName={props.borderClass}
          trailingElement={isPasswordHidden ? ShowButton : HideButton}
          floatingLabel={
            <span className={`${props.errorMessage || error ? 'label-error' : ""}`}>{props.floatingLabel}</span>
          }
        />
      {props.errorMessage == '' && props.helpText ? (
          <Form.Control.Feedback type="default" key="help-text" className="d-block form-text-size">
            {props.helpText.map((message, index) => (
              <span key={`help-text-${index.toString()}`}>
                {message}
                <br />
              </span>
            ))}
          </Form.Control.Feedback>
        ) : <div key="empty" />}
      {props.errorMessage !== '' && (
        <Form.Control.Feedback key="error" className="error-text  form-text-size" hasIcon={false} feedback-for={props.name} type="invalid">
          <span>
            <img src={iconWarning} alt='warning' />
          </span>
         <span> {messagesError}</span>
          <span className="sr-only">{formatMessage(messages['password.sr.only.helping.text'])}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

PasswordField.defaultProps = {
  borderClass: '',
  errorMessage: '',
  handleBlur: null,
  handleFocus: null,
  handleChange: () => {},
  showRequirements: true,
  autoComplete: null,
};

PasswordField.propTypes = {
  borderClass: PropTypes.string,
  errorMessage: PropTypes.string,
  floatingLabel: PropTypes.string.isRequired,
  handleBlur: PropTypes.func,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  intl: intlShape.isRequired,
  name: PropTypes.string.isRequired,
  showRequirements: PropTypes.bool,
  value: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};

export default injectIntl(PasswordField);
