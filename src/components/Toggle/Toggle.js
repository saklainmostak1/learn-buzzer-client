import React from 'react';
import './Toggle.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const Toggle = () => {
   
    return (
        <div>
           <BootstrapSwitchButton checked={true} onstyle="outline-danger" offstyle="outline-warning"/>
        </div>
    );
};

export default Toggle;