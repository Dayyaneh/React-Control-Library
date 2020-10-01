import React, { ReactElement } from "react";
import { FunctionComponent } from "react";

import './Page-Title.scss';

interface iComponentProps {
    Title: string;
    LineColor?: string;
    ShowIcon?: boolean | false;
    Icon?: ReactElement;
}

const MDPageTitle: FunctionComponent<iComponentProps> = (props: iComponentProps) => {
    return (<div className='md-page-title'>
        <div className="segment line" style={{ width: '50px', flexGrow: 0 }}>
            <div></div><div></div>
        </div>
        <div className="icon-segment">
            <div className="icon-container">
                {props.Icon}
            </div>
        </div>
        <div className="segment line" style={{ width: '50px', flexGrow: 0 }}>
            <div></div><div></div>
        </div>
        <div className="text-segment" style={{ flexGrow: 0 }}>{props.Title}</div>
        <div className="segment line"><div></div><div></div></div>
    </div>)
}

export default MDPageTitle;