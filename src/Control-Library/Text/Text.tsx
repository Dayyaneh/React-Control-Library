import React, { FunctionComponent } from "react";
import classNames from "../-General/General";

import './Text.scss'

export enum Alignment {
    Center = 'center',
    Left = 'left',
    Right = 'right',
    Justify = 'justify'
}

interface iProp {
    children?: React.ReactNode;
    className?: string;
    featured?: boolean;
    bold?: boolean;
    light?: boolean;
    
    large?: boolean;
    medium?: boolean;
    small?: boolean;
    VerticalCenter?: boolean;

    alignment?: Alignment;
    unselectable?: boolean;
}

const MDText: FunctionComponent<iProp> = (props: iProp) => {
    return (<p className={classNames(['md-text', 
        props.className ? props.className : '', 
        props.featured ? 'featured' : '',
        props.bold ? 'bold' : '',
        props.light ? 'light' : '',
        props.large ? 'large': '' ,
        props.medium ? 'medium' : '',
        props.small ? 'small' : '',
        props.alignment === Alignment.Center ? 'center' : '',
        props.alignment === Alignment.Left ? 'left' : '',
        props.alignment === Alignment.Right ? 'right' : '',
        props.alignment === Alignment.Justify ? 'justify' : '',
        props.unselectable ? 'unselectable' : '',
        props.VerticalCenter ? 'vertical-centrer' : '',
    ])}>{props.children}</p>)
}

export default MDText;