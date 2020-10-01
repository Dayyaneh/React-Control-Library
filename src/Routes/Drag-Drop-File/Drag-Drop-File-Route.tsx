import React, { FunctionComponent } from "react";

import MDContainer, { Direction } from "../../Control-Library/Container/Container";
import MDFileDragDrop from "../../Control-Library/File-DragDrop-Control/File-Drag-Drop";
import MDPageTitle from "../../Control-Library/Page-Title/Page-Title";
import MDText from "../../Control-Library/Text/Text";
import MDMainMenu, { MDIconPosition, MDMenuBorder, MDMenuItem, MDMenuLocation, MDMenuPosition } from '../../Control-Library/Main-Menu/Main-Menu'

import IconAddFile from "../../Control-Library/-General/Icon/IconAddFile";
import './Drag-Drop-File-Route.scss'
import MDBulletList from "../../Control-Library/Bullet-List/Bullet-List";
import MDBulletListItem from "../../Control-Library/Bullet-List/Bullet-List-Item";

const DragDropFileRoute: FunctionComponent = () => {
    return (<div className='file-control-route'>
        <MDMainMenu border={MDMenuBorder.Bottom} menuPosition={MDMenuPosition.Relative}
            menuItems={[{
                Index: 0,
                Caption: 'Menu Item 1',
                ToolTip: 'Menu Item 1',
                Icon: <IconAddFile />,
                IocnPosition: MDIconPosition.Left,
                OnClick: () => {
                }
            },
            {
                Index: 1,
                Caption: 'Menu Item 2',
                ToolTip: 'Menu Item 2',
                URL: '/',
            }]} />
        <MDContainer bordered rounded className='page-container'>
            <MDPageTitle Title="File Drag Drop" Icon={<IconAddFile />} />
            <MDContainer heightAsContent>
                <MDText light>This control is designed for supporting file choosing by drag and drop. That means the user can drag one or more files and drop it on the control area. This control as the developer wise has some options for setting it up in an appropriate way. In this Page you can find out how you can use and treat it.
. It will be more applicable in desktop and won't be good enough for mobile</MDText>
            </MDContainer>
            <MDContainer height={250}>
                <MDText bold large>Example</MDText>
                <MDFileDragDrop placeHolder="Drag your files here" multiFile />
            </MDContainer>
            <MDContainer height={1}>
                <MDText medium light>For setting up this control there are some options which describe below </MDText>
                <MDBulletList>
                    <MDBulletListItem><MDText medium bold>First Props : </MDText><MDText medium light> Elemet 1</MDText></MDBulletListItem>
                    <MDBulletListItem><MDText medium light>Elemet 2</MDText></MDBulletListItem>
                    <MDBulletListItem><MDText medium light>Elemet 3</MDText></MDBulletListItem>
                    <MDBulletListItem><MDText medium light>Elemet 4</MDText></MDBulletListItem>
                    <MDBulletListItem><MDText medium light>Elemet 5</MDText></MDBulletListItem>
                </MDBulletList>
                <code>&lt;script&gt;alert("test");&lt;/script&gt;</code>
            </MDContainer>
        </MDContainer>
    </div>);
}
export default DragDropFileRoute;