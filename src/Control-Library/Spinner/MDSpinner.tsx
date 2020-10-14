import React, { FunctionComponent } from 'react';
import './MDSpinner.scss';

const MDSpinner: FunctionComponent = () => {
    return (<svg className='md-spinner' style={{margin: 'auto', display: 'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="32" strokeWidth="2" stroke="#e15b64" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="1.5s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
        </circle>
        <circle cx="50" cy="50" r="28" strokeWidth="2" stroke="#f8b26a" stroke-dasharray="43.982297150257104 43.982297150257104" stroke-dashoffset="43.982297150257104" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="2s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
        </circle>
    </svg>)
}

export default MDSpinner;