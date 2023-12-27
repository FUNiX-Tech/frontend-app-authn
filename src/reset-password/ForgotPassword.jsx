import React, { useEffect, useState } from 'react';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BaseComponent from '../base-component';
import iconVector from "./assets/Vector.png"


import { Helmet } from 'react-helmet';
const ForgotPassword = (props) => {
  const { intl, selectedPage } = props;

  return (
    <BaseComponent>
        <Helmet>
          <title>Forgot Password | {getConfig().SITE_NAME}</title>
        </Helmet>   
      <div style={{textAlign: 'center',  minWidth:'425px'}}>
        <div>
            <div>
                <img src={iconVector} alt='' />
            </div>
            <div className='d-flex flex-column forgot-pwd-title'>
                <h3>Quên mật khẩu</h3>
                <span>Bạn vui lòng liên hệ Admin để được làm mới lại mật khẩu</span>
            </div>
            <div>
                <button className='btn-primary-custom  w-100'  >
                    <span>Liên hệ</span>
                </button>
            </div>
        </div>
        
      </div>
    </BaseComponent>
  );
};

ForgotPassword.propTypes = {
  intl: intlShape.isRequired,
  selectedPage: PropTypes.string,

};

ForgotPassword.defaultProps = {

};

export default injectIntl(ForgotPassword);
