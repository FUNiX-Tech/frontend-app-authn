import {  Image } from '@edx/paragon';
import { Link } from 'react-router-dom';
import { getConfig } from '@edx/frontend-platform';

const Logo = ({to})=>{
    
    return <a href={getConfig().LMS_BASE_URL}>
                <Image  style={{width:'105px' , paddingBottom:'20px'}} className="" alt={getConfig().SITE_NAME} src={getConfig().LOGO_URL} />
            </a>
}

export default Logo