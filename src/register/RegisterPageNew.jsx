import { Link } from 'react-router-dom';
import BaseComponent from '../base-component';
import RegistrationPage from './RegistrationPage';
import { getConfig } from '@edx/frontend-platform';
import {  Image } from '@edx/paragon';
import Logo from '../common-components/Logo';

const RegisterPageNew = ()=>{

    return (
        <BaseComponent>
           <div className='page d-flex flex-column' >
                {/* <div className='navbar-login w-100' style={{textAlign:'end'}}>
                            <span>Bạn đã có tài khoản? </span>
                            <Link to='/login' > Đăng nhập ngay</Link>
                    </div> */}
                <div style={{textAlign: 'center'}}>
                <Logo />
                    <div className='header-register'>
                        <h2>Đăng ký tài khoản</h2>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <span className='text' style={{color :'#2C3744'}}>Chúng tôi cần 1 vài thông tin về công ty hoặc tổ chức của bạn </span>
                        </div>
                    </div>
                    <RegistrationPage />
                
                </div>
           </div>
      </BaseComponent>
    )
}

export default RegisterPageNew