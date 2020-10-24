import React, { FunctionComponent } from 'react';
import './Button.scss';

interface iComponentProps {
    onClick?: Function,
    children?: React.ReactNode;
    outline?: boolean;
    borderLess?: boolean;
    featured?: boolean;
    selected?: boolean;
    entireContainer?: boolean;
}

const MDButton: FunctionComponent<iComponentProps> = (props: iComponentProps) => {
    return (<button disabled className={['md-button', 
        props.outline ? 'outline' : '', 
        props.featured ? 'featured' : '', 
        props.borderLess ? 'border-less' : '',
        props.entireContainer ? 'entire-container' : '',
        props.selected ? 'selected' : '' ].join(' ')} 
        onClick={() => { props.onClick && props.onClick() }}>
        {props.children}
    </button>)
}

export default MDButton;