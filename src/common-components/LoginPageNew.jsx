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
        
      <div style={{textAlign: 'center'}}>
        <div >
            <Image style={{width:'105px' , height:'64px'}} className="" alt={getConfig().SITE_NAME} src={'https://test-xseries.funix.edu.vn/static/images/logo.e0d4b54fb4cb.png'} />
            <div>
                <h1>{ intl.formatMessage(messages['home.auth.account'])}</h1>
                <span>
                    <span>{intl.formatMessage(messages['login.auth.not.account'])} </span>
                    <Link to="/register">{intl.formatMessage(messages['register.auth.account.now'])}</Link>
                </span>
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
