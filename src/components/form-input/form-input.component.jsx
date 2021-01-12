import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChangeCallback, label, ...otherProps}) => {
    return (
        <div className="group">

            <input className="form-input" onChange={handleChangeCallback} {...otherProps} />
            {
                label ? 
                (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`}>{label}</label>)
                : null
            }
        </div>
    )
}

export default FormInput;