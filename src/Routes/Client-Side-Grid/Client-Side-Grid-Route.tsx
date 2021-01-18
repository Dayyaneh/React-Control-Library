import React from 'react';
import MDBox from '../../Control-Library/Box/Box';

import MDBulletList from '../../Control-Library/Bullet-List/Bullet-List';
import MDBulletListItem from '../../Control-Library/Bullet-List/Bullet-List-Item';
import MDClientSideGrid, { MDDataModel } from '../../Control-Library/Client-Side-Grid/ClientSideGrid';
import MDCodeBlock from '../../Control-Library/Code-Block/Code-Block';
import MDIcon, { IconType } from '../../Control-Library/Icon/Icon';
import MDPageTitle from '../../Control-Library/Page-Title/Page-Title';
import MDText, { Alignment } from '../../Control-Library/Text/Text';

export interface iProps {

}

const ClientSideGridRoute: React.FunctionComponent<iProps> = (props: iProps) => {

    const DataModel: MDDataModel[] = [
        { fieldName: 'Id', fieldCaption: 'ID' },
        { fieldName: 'FirstName', fieldCaption: 'Firs tName' },
        { fieldName: 'LastName', fieldCaption: 'Last Name' },
        { fieldName: 'PhoneNumber', fieldCaption: 'Phone Number' },
        { fieldName: 'DOB', fieldCaption: 'Birth Date' }];


    const Data: Object[] = [
        {
            Id: '1001',
            FirstName: 'Oliver',
            LastName: 'James',
            PhoneNumber: '+1(542)452-2584',
            DOB: ''
        },{
            Id: '1002',
            FirstName: 'Jack',
            LastName: 'Connor',
            PhoneNumber: '+1(475)148-1254',
            DOB: ''
        },{
            Id: '1003',
            FirstName: 'Harry',
            LastName: 'Mason',
            PhoneNumber: '+1(785)254-1236',
            DOB: ''
        },{
            Id: '1004',
            FirstName: 'Charlie',
            LastName: 'William',
            PhoneNumber: '+1(951)147-13365',
            DOB: ''
        },{
            Id: '1005',
            FirstName: 'Thomas',
            LastName: 'Ethan',
            PhoneNumber: '+1(258)789-4521',
            DOB: ''
        },{
            Id: '1006',
            FirstName: 'George',
            LastName: 'Michael',
            PhoneNumber: '+1(456)547-1478',
            DOB: ''
        },];


    return (<MDBox Bordered Rounded DefaultMargin ClassName='page-container'>
        <MDPageTitle Title="Client Side Grid" Icon={<MDIcon IconType={IconType.Grid} />} />
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
            <MDClientSideGrid DataModel={DataModel} Data={Data}></MDClientSideGrid>
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

export default ClientSideGridRoute;