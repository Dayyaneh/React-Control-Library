import React, { FunctionComponent } from "react";
import './Container.scss';

export enum Direction {
    Vertical = 'vertical',
    Horizontal = 'horizontal',
}

export enum ContentAlignment {
    Center = 'center',
    Start = 'start',
    End = 'end',
}

interface iComponentProps {
    children?: React.ReactNode;
    bordered?: boolean | false;
    rounded?: boolean | false;
    defaultMargin?: boolean | false;
    entireParent?: boolean | false;
    direction?: Direction;
    height?: number;
    heightAsContent?: boolean;
    width?: number;
    widthAsContent?: boolean;
    className?: string;
    vAlignment?: ContentAlignment;
    hAlignment?: ContentAlignment;
    
}

const MDContainer: FunctionComponent<iComponentProps> = (props: iComponentProps) => {
    return (<div className={['md-container',
        props.bordered ? 'bordered' : '',
        props.rounded ? 'rounded' : '',
        props.defaultMargin === true ? 'defualt-margin' : '',
        props.entireParent === true ?  'entire-parent' : '',
        props.direction === Direction.Vertical || !props.direction ? 'v-direction' : '',
        props.direction === Direction.Horizontal ? 'h-direction' : '',
        props.height || props.width ? 'masuered' : 'equality',

        props.vAlignment === ContentAlignment.Center ? 'v-alignment-center' : '',
        props.vAlignment === ContentAlignment.Start ? 'v-alignment-start' : '',
        props.vAlignment === ContentAlignment.End ? 'v-alignment-end' : '',

        props.hAlignment === ContentAlignment.Center ? 'h-alignment-center' : '',
        props.hAlignment === ContentAlignment.Start ? 'h-alignment-start' : '',
        props.hAlignment === ContentAlignment.End ? 'h-alignment-end' : '',
    ].join(' ') +' ' + props.className}
        style={{ height: props.height, width: props.width }}
    >
        {props.children}
    </div>)
}

export default MDContainer;