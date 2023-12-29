import { Link } from 'react-router-dom';
import BaseComponent from '../base-component';
import RegistrationPage from './RegistrationPage';
import { getConfig } from '@edx/frontend-platform';
import {  Image } from '@edx/paragon';

const RegisterPageNew = ()=>{

    return (
        <BaseComponent>
           <div className='d-flex flex-column' style={{  minWidth:'425px'}}>
                <div className='navbar-login w-100' style={{textAlign:'end'}}>
                            <span>Bạn đã có tài khoản? </span>
                            <Link to='/login' > Đăng nhập ngay</Link>
                    </div>
                <div style={{textAlign: 'center'}}>
                <Link to='/login' >
            <Image  style={{width:'105px' , paddingBottom:'20px'}} className="" alt={getConfig().SITE_NAME} src={getConfig().LOGO_URL} />
                     </Link>
                    <div className='header-register'>
                        <h1>Đăng ký tài khoản</h1>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <span>Chúng tôi cần 1 vài thông tin về công ty hoặc </span>
                            <span>tổ chức của bạn</span>
                        </div>
                    </div>
                    <RegistrationPage />
                
                </div>
           </div>
      </BaseComponent>
    )
}

export default RegisterPageNew