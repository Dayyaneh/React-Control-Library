import React from 'react';
import MDBox from '../../Control-Library/Box/Box';

import MDBulletList from '../../Control-Library/Bullet-List/Bullet-List';
import MDBulletListItem from '../../Control-Library/Bullet-List/Bullet-List-Item';
import MDCodeBlock from '../../Control-Library/Code-Block/Code-Block';
import MDHTMLEditor from '../../Control-Library/HTML-Editor/HTML-Editor';
import MDIcon, { IconType } from '../../Control-Library/Icon/Icon';
import MDPageTitle from '../../Control-Library/Page-Title/Page-Title';
import MDText, { Alignment } from '../../Control-Library/Text/Text';

export interface iProps {

}

const HTMLEditorRoute: React.FunctionComponent<iProps> = (props: iProps) => {
    return (<MDBox Bordered Rounded DefaultMargin ClassName='page-container'>
        <MDPageTitle Title="Wysiwyg Text Edit" Icon={<MDIcon IconType={IconType.Text} />} />
        <MDBox DefaultMargin>
            <MDText light alignment={Alignment.Justify}>
                Aute sit ex non pariatur ut ea aliquip laborum. Consequat anim veniam mollit voluptate consectetur tempor deserunt.
                Lorem amet ad nisi velit et. Mollit nostrud laborum velit incididunt minim Lorem laboris laborum culpa nulla.
                Excepteur aute fugiat deserunt ex elit commodo voluptate amet officia dolor exercitation. Adipisicing adipisicing laboris dolore nostrud culpa.
                Aliqua nostrud anim do est. Duis et quis voluptate laboris ea. Est proident sunt ullamco ullamco duis quis.
        </MDText>
        </MDBox>
        <MDBox DefaultMargin>
            <MDText bold large>Example</MDText>
            <MDHTMLEditor></MDHTMLEditor>
        </MDBox>
        <MDBox DefaultMargin>
            <MDText large bold>Properties</MDText>
            <MDText medium light>For setting up this control there are some options which describe below </MDText>
            <MDBulletList>
                <MDBulletListItem><MDText medium bold>prop1 :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(string)&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium></MDText>
                </MDBulletListItem>
                <MDBulletListItem><MDText medium bold>prop2 :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(boolean)&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium></MDText>
                </MDBulletListItem>
                <MDBulletListItem><MDText medium bold>prop3 :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(number)&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium></MDText>
                </MDBulletListItem>
                <MDBulletListItem><MDText medium bold>prop4 :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(string)&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium></MDText>
                </MDBulletListItem>
            </MDBulletList>
        </MDBox>
        <MDBox DefaultMargin>
            <MDText large bold>Sample Code</MDText>
            <MDCodeBlock code='<MDBulletListItem><MDText medium light>Elemet 2</MDText></MDBulletListItem>'></MDCodeBlock>
        </MDBox>
    </MDBox>)
}

export default HTMLEditorRoute;