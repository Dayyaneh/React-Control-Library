import React from 'react';
import IconCircle from '../-General/Icon/IconCircle';
import IconDelete from '../-General/Icon/IconDelete';
import IconFileUpload from '../-General/Icon/IconFileUpload';

export enum IconType{
    Delete = 'Delete',
    FileUpload = 'FileUpload',
    Circle = 'Circle'
}

interface iProps {
    IconType: IconType;
}

const MDIcon: React.FunctionComponent<iProps> = (props: iProps)=> {
    switch(props.IconType) { 
        case IconType.Delete: return (<IconDelete />)
        case IconType.FileUpload: return (<IconFileUpload/>)
        case IconType.Circle: return (<IconCircle/>)
        default: return(<></>)
     }
}

export default MDIcon;