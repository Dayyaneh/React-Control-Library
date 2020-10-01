import React, { FunctionComponent, ReactChildren } from "react";

import './Text.scss'

export enum Alignment {
    Center = 'center',
    Left = 'left',
    Right = 'right',
}

interface iComponentProp {
    children?: React.ReactNode;
    className?: string;
    featured?: boolean;
    bold?: boolean;
    light?: boolean;
    
    large?: boolean;
    medium?: boolean;
    small?: boolean;

    alignment?: Alignment;
}

const MDText: FunctionComponent<iComponentProp> = (props: iComponentProp) => {
    return (<p className={['md-text',
        props.featured ? 'featured' : '',
        props.bold ? 'bold' : '',
        props.light ? 'light' : '',
        props.large ? 'large': '' ,
        props.medium ? 'medium' : '',
        props.small ? 'small' : '',
        props.alignment === Alignment.Center ? 'center' : '',
        props.alignment === Alignment.Left ? 'left' : '',
        props.alignment === Alignment.Right ? 'right' : '',
    ].join(' ')}>{props.children}</p>)
}

export default MDText;