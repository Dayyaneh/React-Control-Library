import React, { FunctionComponent } from "react";

import MDContainer from "../../Control-Library/Container/Container";
import MDFileDragDrop from "../../Control-Library/File-DragDrop/File-Drag-Drop";
import MDPageTitle from "../../Control-Library/Page-Title/Page-Title";
import MDText, { Alignment } from "../../Control-Library/Text/Text";
import MDMainMenu, { MDIconPosition, MDMenuBorder, MDMenuPosition } from '../../Control-Library/Main-Menu/Main-Menu'
import MDBulletList from "../../Control-Library/Bullet-List/Bullet-List";
import MDBulletListItem from "../../Control-Library/Bullet-List/Bullet-List-Item";
import MDCodeBlock from "../../Control-Library/Code-Block/Code-Block";

import IconAddFile from "../../Control-Library/-General/Icon/IconAddFile";

import './Drag-Drop-File-Route.scss'

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
            <MDContainer>
                <MDText light alignment={Alignment.Justify}>This control is designed for supporting file choosing by drag and drop. 
                That means the user can drag one or more files and drop it on the control area. 
                This control as the developer wise has some options for setting it up in an appropriate way. 
                In this Page you can find out how you can use and treat it. 
                It will be more applicable in desktop and won't be good enough for mobile</MDText>
            </MDContainer>
            <MDContainer>
                <MDText bold large>Example</MDText>
                <MDFileDragDrop placeHolder="Drag your files here" multiFile />
            </MDContainer>
            <MDContainer>
                <MDText large bold>Properties</MDText>
                <MDText medium light>For setting up this control there are some options which describe below </MDText>
                <MDBulletList>
                    <MDBulletListItem><MDText medium bold>placeHolder :&nbsp;</MDText>
                        <MDText medium light featured>&nbsp;(string)&nbsp;[nullable]&nbsp;</MDText>
                        <MDText medium>This message show on the top of the icon</MDText>
                    </MDBulletListItem>
                    <MDBulletListItem><MDText medium bold>multiFile :&nbsp;</MDText>
                        <MDText medium light featured>&nbsp;(boolean)&nbsp;[nullable]&nbsp;</MDText>
                        <MDText medium>This property indicates the control should accept multiple file or no</MDText>
                    </MDBulletListItem>
                    <MDBulletListItem><MDText medium bold>maxFileSize :&nbsp;</MDText>
                        <MDText medium light featured>&nbsp;(number)&nbsp;[nullable]&nbsp;</MDText>
                        <MDText medium>This property indicates the maximum size of each file by KB</MDText>
                    </MDBulletListItem>
                    <MDBulletListItem><MDText medium bold>accept :&nbsp;</MDText>
                        <MDText medium light featured>&nbsp;(string)&nbsp;[nullable]&nbsp;</MDText>
                        <MDText medium>This property indicates the file format that should accept by the control</MDText>
                    </MDBulletListItem>
                    <MDBulletListItem><MDText medium bold>onFilesChosen :&nbsp;</MDText>
                        <MDText medium light featured>&nbsp;(function)&nbsp;[nullable]&nbsp;</MDText>
                        <MDText medium>This is a call back function for having access to the chosen file</MDText>
                    </MDBulletListItem>
                </MDBulletList>
            </MDContainer>
            <MDContainer>
                <MDText large bold>Sample Code</MDText>
                <MDCodeBlock code='<MDBulletListItem><MDText medium light>Elemet 2</MDText></MDBulletListItem>'></MDCodeBlock>
            </MDContainer>
        </MDContainer>
    </div>);
}
export default DragDropFileRoute;