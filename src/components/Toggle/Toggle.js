import React from 'react';
import './Toggle.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const Toggle = () => {
    
    return (
        <div>
           <BootstrapSwitchButton checked={true} onstyle="outline-dark" offstyle="outline-light"/>
           
        </div>
    );
};

export default Toggle;