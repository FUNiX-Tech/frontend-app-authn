import React, { useEffect, useState } from 'react';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BaseComponent from '../base-component';
import { REGISTER_PAGE  } from '../data/constants';
import {  Image } from '@edx/paragon';
import messages from './messages';
import {
    FormGroup
  } from '../common-components';
import {
    Form
  } from '@edx/paragon';
import { LoginPage } from '../login';


const LoginPageNew = (props) => {
  const { intl, selectedPage } = props;

  return (
    <BaseComponent>
        
      <div className='page d-flex flex-column' style={{textAlign: 'center'}}>
        <div >
          <Link to='/login'>
            <Image  style={{width:'105px' , paddingBottom:'20px'}} className="" alt={getConfig().SITE_NAME} src={getConfig().LOGO_URL} />
          </Link>
            <div className='login-header'>
                <h1>{ intl.formatMessage(messages['home.auth.account'])}</h1>
                {/* <span>
                    <span>{intl.formatMessage(messages['login.auth.not.account'])} </span>
                    <Link className='' to="/register">{intl.formatMessage(messages['register.auth.account.now'])}</Link>
                </span> */}
            </div>
        </div>
        <LoginPage />
        
      </div>
    </BaseComponent>
  );
};

LoginPageNew.propTypes = {
  intl: intlShape.isRequired,
  selectedPage: PropTypes.string,

};

LoginPageNew.defaultProps = {
  selectedPage: REGISTER_PAGE,

};

export default injectIntl(LoginPageNew);
