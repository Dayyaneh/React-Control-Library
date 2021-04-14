import React, { FunctionComponent } from 'react';
import './Button.scss';

interface iComponentProps {
    OnClick?: Function,
    children?: React.ReactNode;
    Outline?: boolean | false;
    BorderLess?: boolean | false;
    Featured?: boolean | false;
    Selected?: boolean | false;
    DefaultMargin?: boolean | false;    
}

const MDButton: FunctionComponent<iComponentProps> = (props: iComponentProps) => {
    return (<button className={['md-button', 
        props.Outline ? 'outline' : '', 
        props.Featured ? 'featured' : '', 
        props.BorderLess ? 'border-less' : '',
        props.DefaultMargin ? 'default-margin' : '',         
        props.Selected ? 'selected' : '' ].join(' ')} 
        onClick={() => { props.OnClick && props.OnClick() }}>
        {props.children}
    </button>)
}

export default MDButton;