import React from 'react';
import IconAddFile from '../../Control-Library/-General/Icon/IconAddFile';
import MDIcon, { IconType } from '../../Control-Library/Icon/Icon';
import MDMainMenu, { MDIconPosition, MDMenuBorder, MDMenuPosition } from '../../Control-Library/Main-Menu/Main-Menu';

export interface iProps {
    children?: React.ReactNode;
}

const MasterPage: React.FunctionComponent<iProps> = (props: iProps) => {
    return (<>
        <MDMainMenu border={MDMenuBorder.Bottom} menuPosition={MDMenuPosition.Relative}
            menuItems={[{
                Index: 1,
                Caption: 'Menu Item 1',
                ToolTip: 'Menu Item 1',
            },
            {
                Index: 2,
                Caption: 'Input',
                ToolTip: 'MD-Input',
                URL: '/input',
            },
            {
                Index: 3,
                Caption: 'Drop Down Input',
                ToolTip: 'Drop Down Input',
                Icon: <MDIcon IconType={IconType.Design}/>,
                URL: '/drop-down-input',
            },
            {
                Index: 4,
                Caption: 'Wysiwyg Text Edit',
                ToolTip: 'Wysiwyg Text Edit',
                Icon: <MDIcon IconType={IconType.Text} />,
                URL: '/html-editor',
            },
            {
                Index: 5,
                Caption: 'File Drag Drop',
                ToolTip: 'File Drag Drop',
                Icon: <MDIcon IconType={IconType.FileUpload}/>,
                URL: '/file-drag-drop',
            },
            {
                Index: 5,
                Caption: 'Client Side Grid',
                ToolTip: 'Client Side Grid',
                Icon: <MDIcon IconType={IconType.Grid}/>,
                URL: '/Client-Side-Grid',
            }]} />
        {props.children}
    </>)
}

export default MasterPage;