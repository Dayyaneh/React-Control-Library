import React from 'react';
import classNames from '../-General/General';

import './MenuBarIcon.scss';

interface iProps {
    IsOnTheCloseMode?: boolean
    OnClick?: Function,
}

const MenuBarIcon: React.FunctionComponent<iProps> = (props: iProps) =>
    <div className={classNames(["menu-bar-icon", props.IsOnTheCloseMode ? "open" : ""])} 
         onClick={()=> { props.OnClick && props.OnClick()}} >
        <span></span>
        <span></span>
        <span></span>
    </div>

export default MenuBarIcon;