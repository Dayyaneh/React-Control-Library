import React, { FunctionComponent } from 'react';
import './MDSpinner.scss';

interface iProps {
    Width?: string,
    Height?: string,
}

const MDSpinner: FunctionComponent<iProps> = (props: iProps) => {
    return (<svg className='md-spinner'
        style={{ margin: 'auto', display: 'block' }}
        width={props.Width ? props.Width : "100%"}
        height={props.Height ? props.Height : "100%"}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="32" strokeWidth="2" stroke="#e15b64" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="1.5s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
        </circle>
        <circle cx="50" cy="50" r="28" strokeWidth="2" stroke="#f8b26a" strokeDasharray="43.982297150257104 43.982297150257104" strokeDashoffset="43.982297150257104" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="2s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
        </circle>
    </svg>)
}

export default MDSpinner;