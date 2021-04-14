import React from 'react';
import MDBox, { Direction, Distribution } from '../../Control-Library/Box/Box';
import MDIcon, { IconType } from '../../Control-Library/Icon/Icon';
import MDMainMenu, { MDMenuBorder, MDMenuPosition } from '../../Control-Library/Main-Menu/Main-Menu';
import MDSideBar from '../../Control-Library/Side-Bar/Side-Bar';

export interface iProps {
    children?: React.ReactNode;
}

const MasterPage: React.FunctionComponent<iProps> = (props: iProps) => {
    return (<MDBox ContentDirection={Direction.Vertical}>
        <MDMainMenu border={MDMenuBorder.Bottom} menuPosition={MDMenuPosition.Fix}
            menuItems={[{
                Index: 1,
                Caption: 'Main',
                Icon: <MDIcon IconType={IconType.Home} />,
                URL: '/',
                MobileVisible: false,
                TabletVisible: false,
            },
            {
                Index: 2,
                Caption: 'About Me',
                ToolTip: 'About Me',
                Icon: <MDIcon IconType={IconType.About} />,
                URL: '/about',
                MobileVisible: false,
                TabletVisible: false,
            }]} />
        <MDSideBar Left MenuItems={[
            {
                Index: 1,
                Caption: 'Expample 1',
                ToolTip: 'Expample 1',
                Icon: <MDIcon IconType={IconType.Design} />,
            },
            {
                Index: 2,
                Caption: 'Basic Controls',
                ToolTip: 'Basic Controls',
                Icon: <MDIcon IconType={IconType.Library} />,
                Items: [
                    {
                        Index: 20,
                        Caption: 'Box',
                        ToolTip: 'MD-Box',
                        Icon: <MDIcon IconType={IconType.Div} />,
                        URL: '/Box',
                    },
                    {
                        Index: 21,
                        Caption: 'Input',
                        ToolTip: 'MD-Input',
                        Icon: <MDIcon IconType={IconType.Input} />,
                        URL: '/input',
                    },
                    {
                        Index: 22,
                        Caption: 'Input Action',
                        ToolTip: 'MD-Input-Action',
                        Icon: <MDIcon IconType={IconType.Input} />,
                        URL: '/input-action',
                    },
                    {
                        Index: 23,
                        Caption: 'Button',
                        ToolTip: 'MD-Button',
                        Icon: <MDIcon IconType={IconType.Button} />,
                        URL: '/button',
                    },
                    {
                        Index: 24,
                        Caption: 'Check Box List',
                        ToolTip: 'Check Box',
                        Icon: <MDIcon IconType={IconType.CheckList} />,
                        URL: '/CheckBox',
                    },
                    {
                        Index: 25,
                        Caption: 'Radio Button List',
                        ToolTip: 'Radio Button',
                        Icon: <MDIcon IconType={IconType.RadioButton} />,
                        URL: '/RadioButton',
                    },
                    {
                        Index: 26,
                        Caption: 'Drop Down Input',
                        ToolTip: 'Drop Down Input',
                        Icon: <MDIcon IconType={IconType.Design} />,
                        URL: '/drop-down-input',
                    }
                ]
            },
            {
                Index: 3,
                Caption: 'Advance Controls',
                ToolTip: 'Advance Controls',
                Icon: <MDIcon IconType={IconType.Library} />,
                Items: [
                    {
                        Index: 31,
                        Caption: 'Wysiwyg Text Edit',
                        ToolTip: 'Wysiwyg Text Edit',
                        Icon: <MDIcon IconType={IconType.Text} />,
                        URL: '/html-editor',
                    },
                    {
                        Index: 32,
                        Caption: 'File Drag Drop',
                        ToolTip: 'File Drag Drop',
                        Icon: <MDIcon IconType={IconType.FileUpload} />,
                        URL: '/file-drag-drop',
                    },
                    {
                        Index: 33,
                        Caption: 'Client Side Grid',
                        ToolTip: 'Client Side Grid',
                        Icon: <MDIcon IconType={IconType.Grid} />,
                        URL: '/Client-Side-Grid',
                    }
                ]
            },
            {
                Index: 4,
                Caption: 'Expample 2',
                ToolTip: 'Expample 2',
                Icon: <MDIcon IconType={IconType.Design} />,
            }]} />
        <MDBox ContentDirection={Direction.Vertical} ContentDistribution={Distribution.Equal} 
            Style={{ marginTop: '60px'}}>
            {props.children}
        </MDBox>
    </MDBox>)
}

export default MasterPage;