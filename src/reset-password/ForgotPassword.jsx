import React, { useEffect, useState } from 'react';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BaseComponent from '../base-component';
import iconVector from "./assets/Vector.png"
import {  Image } from '@edx/paragon';
import { Helmet } from 'react-helmet';


const ForgotPassword = (props) => {
  const { intl, selectedPage } = props;

  return (
    <BaseComponent>
        <Helmet>
          <title>Quên mật khẩu | {getConfig().SITE_NAME}</title>
        </Helmet>   
      <div style={{textAlign: 'center'}}>
        <div>
            <div>
              <Link to='/login'>
                <Image style={{width:'105px' , paddingBottom:'20px'}} className="" alt={getConfig().SITE_NAME} src={getConfig().LOGO_URL} />
              </Link>
            </div>
            <div className='d-flex flex-column forgot-pwd-title'>
                <h2>Quên mật khẩu</h2>
                <span>Bạn vui lòng liên hệ quản trị viên để  nhận lại mật khẩu mới</span>
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
