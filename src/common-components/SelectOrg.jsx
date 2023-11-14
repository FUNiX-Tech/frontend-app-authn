import {useState} from 'react'
import {InputSelect, Form} from '@edx/paragon';
import FormGroup from './FormGroup';
import PropTypes from 'prop-types';


const SelectOrg = (props)=>{
    const [hasFocus, setHasFocus] = useState(false);
    const handleFocus = (e) => {
        setHasFocus(true);
        if (props.handleFocus) { props.handleFocus(e); }
      };
      const handleClick = (e) => {
        if (props.handleClick) { props.handleClick(e); }
      };
      const handleOnBlur = (e) => {
        setHasFocus(false);
        if (props.handleBlur) { props.handleBlur(e); }
      };
    
    return (
        <div className="mb-4">
          <Form.Group as='org' controlId="formGridState">
            <Form.Control floatingLabel="Organization" as="select" 
                name = 'organization'
                  onFocus={handleFocus}
                  onBlur={handleOnBlur}
                  onClick={handleClick}
                  onChange={props.handleChange}
            >
                <option value="Staging">Staging</option>
                <option value='Funix'>Funix</option>
            </Form.Control>
            </Form.Group>

      </div>
    )
}



SelectOrg.defaultProps = {
    options: null,
    floatingLabel: null,
    handleFocus: null,
    handleBlur: null,
    value: null,
    errorMessage: null,
    errorCode: null,
  };
  
SelectOrg.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    floatingLabel: PropTypes.string,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,
    value: PropTypes.string,
    errorMessage: PropTypes.string,
    errorCode: PropTypes.string,
    name: PropTypes.string.isRequired,
  };
  
export default SelectOrg;