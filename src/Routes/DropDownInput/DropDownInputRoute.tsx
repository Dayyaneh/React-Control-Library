import React from 'react';
import IconAddFile from '../../Control-Library/-General/Icon/IconAddFile';

import MDBulletList from '../../Control-Library/Bullet-List/Bullet-List';
import MDBulletListItem from '../../Control-Library/Bullet-List/Bullet-List-Item';
import MDCodeBlock from '../../Control-Library/Code-Block/Code-Block';
import MDContainer, { ContentAlignment, Direction } from '../../Control-Library/Container/Container';
import MDDropDownInput, { MDDropDownItemModel } from '../../Control-Library/DropDownInput/DropDownInput';
import MDIcon, { IconType } from '../../Control-Library/Icon/Icon';
import MDPageTitle from '../../Control-Library/Page-Title/Page-Title';
import MDText, { Alignment } from '../../Control-Library/Text/Text';

const DropDownInputRoute: React.FunctionComponent = () => {
    const SampleDataList: MDDropDownItemModel[] = [
        { index: 1, value: 'James' },
        { index: 1, value: 'John' },
        { index: 1, value: 'Robert' },
        { index: 1, value: 'Michael' },
        { index: 1, value: 'William' },
        { index: 1, value: 'David' },
        { index: 1, value: 'Richard' },
        { index: 1, value: 'Joseph' },
        { index: 1, value: 'Charles' },
        { index: 1, value: 'Thomas' }
    ];

    const OnSelect = (value: MDDropDownItemModel) => {
        console.log(value);
    }

    return (<MDContainer bordered rounded defaultMargin className='page-container'>
        <MDPageTitle Title="Drop Down Input" Icon={<MDIcon IconType={IconType.Design} />} />
        <MDContainer defaultMargin>
            <MDText light alignment={Alignment.Justify}>
                Aute sit ex non pariatur ut ea aliquip laborum. Consequat anim veniam mollit voluptate consectetur tempor deserunt. 
                Lorem amet ad nisi velit et. Mollit nostrud laborum velit incididunt minim Lorem laboris laborum culpa nulla. 
                Excepteur aute fugiat deserunt ex elit commodo voluptate amet officia dolor exercitation. Adipisicing adipisicing laboris dolore nostrud culpa. 
                Aliqua nostrud anim do est. Duis et quis voluptate laboris ea. Est proident sunt ullamco ullamco duis quis.
            </MDText>
        </MDContainer>
        <MDContainer defaultMargin>
            <MDText bold large>Example</MDText>
            <MDContainer bordered rounded defaultMargin height={200}
                vAlignment={ContentAlignment.Center}
                hAlignment={ContentAlignment.Center}>
                <MDContainer vAlignment={ContentAlignment.Center} direction={Direction.Horizontal} entireParent>
                    <MDDropDownInput PlaceHolder='This is an example' List={SampleDataList} OnSelect={OnSelect} />
                    <MDDropDownInput PlaceHolder='Searchable example' Searchable List={SampleDataList} OnSelect={OnSelect} />
                    <MDDropDownInput PlaceHolder='Searchable example' List={SampleDataList} />
                </MDContainer>
                <MDContainer direction={Direction.Horizontal}>

                </MDContainer>
                <MDContainer direction={Direction.Horizontal}>
                </MDContainer>
            </MDContainer>
        </MDContainer>
        <MDContainer defaultMargin>
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
        <MDContainer defaultMargin>
            <MDText large bold>Sample Code</MDText>
            <MDCodeBlock code='<MDBulletListItem><MDText medium light>Elemet 2</MDText></MDBulletListItem>'></MDCodeBlock>
        </MDContainer>
    </MDContainer>)
}

export default DropDownInputRoute;