import React, { FunctionComponent, useState } from 'react';
import MDBox, { ContentAlignment, Direction, Distribution } from '../../Control-Library/Box/Box';
import MDBulletList from '../../Control-Library/Bullet-List/Bullet-List';
import MDBulletListItem from '../../Control-Library/Bullet-List/Bullet-List-Item';
import MDCheckBox from '../../Control-Library/Check-Box/Check-Box';
import MDCheckBoxList, { CheckListItem } from '../../Control-Library/Check-Box/Check-Box-List';
import MDCodeBlock from '../../Control-Library/Code-Block/Code-Block';
import MDIcon, { IconType } from '../../Control-Library/Icon/Icon';
import MDPageTitle from '../../Control-Library/Page-Title/Page-Title';
import MDText, { Alignment } from '../../Control-Library/Text/Text';

const CheckBoxRoute: FunctionComponent = () => {
    const [Checked, setChecked] = useState(true);

    const OnChange = (value: boolean) => {
        console.log(value);
    }

    const ItemChenge = (List: CheckListItem[]) => {
    }

    const CheckList: CheckListItem[] = [
        { Caption: 'Fisrt Item', Id: 10, Value: false },
        { Caption: 'Second Item', Id: 20, Value: true },
        { Caption: 'Thrid Item', Id: 30, Value: false }]

    return (<MDBox Bordered Rounded DefaultMargin ContentDirection={Direction.Vertical}>
        <MDPageTitle Title="CheckBox" Icon={<MDIcon IconType={IconType.CheckList} />} />
        <MDBox DefaultMargin DefaultPadding>
            <MDText light alignment={Alignment.Justify}>Ex enim cupidatat deserunt et consectetur labore fugiat deserunt nostrud velit veniam nulla.
            Tempor do amet officia irure adipisicing tempor incididunt duis esse. Est in id consectetur do ad culpa minim veniam culpa veniam nisi enim incididunt.
            Laboris sint ullamco nostrud nisi adipisicing quis reprehenderit. Exercitation adipisicing sint voluptate nostrud nulla.
            Cupidatat ea aliqua consectetur nostrud voluptate.Cillum labore nisi deserunt tempor velit sint ex ad et cupidatat sint ex commodo.
            Tempor velit et ea velit aliquip proident labore laborum esse voluptate. Ad nostrud minim sit aliquip mollit dolore est est sint exercitation esse.
            Anim commodo aliquip culpa in commodo anim sint ea elit est officia amet officia. Consequat fugiat consequat dolore irure cillum ut incididunt.
            Non excepteur magna nisi pariatur eiusmod aliqua ea voluptate aliqua nostrud quis veniam incididunt.</MDText>
        </MDBox>
        <MDBox ContentDirection={Direction.Vertical} DefaultMargin DefaultPadding>
            <MDText bold large>Example</MDText>
            <MDBox Bordered Rounded
                ContentVerticalAlign={ContentAlignment.Center}
                ContentHorizontalAlign={ContentAlignment.Center}
                ContentDirection={Direction.Vertical}>
                <MDBox DefaultPadding
                    WholeWidth
                    ContentDirection={Direction.Horizontal}
                    ContentDistribution={Distribution.Equal} >
                    <MDCheckBox Caption='This is for a test' OnChange={OnChange} />
                    <MDCheckBox Caption='This is for a test' Value={Checked} />
                    <MDCheckBox Caption='This is for a test' OnChange={OnChange} Value={Checked} />
                </MDBox>
                <MDBox WholeWidth DefaultPadding
                    ContentDirection={Direction.Horizontal}
                    ContentDistribution={Distribution.Equal} >
                    <MDCheckBoxList List={CheckList} 
                        //DistributionSize={SizeOption.DistributedEqual} 
                        OnChange={ItemChenge} />
                </MDBox>
            </MDBox>
        </MDBox>
        <MDBox ContentDirection={Direction.Vertical} DefaultMargin DefaultPadding>
            <MDText large bold>Properties</MDText>
            <MDText medium light>For setting up this control there are some options which describe below </MDText>
            <MDBulletList>
                <MDBulletListItem><MDText medium bold>Value :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(Boolean)&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium>This Parameter indicate the initiate value</MDText>
                </MDBulletListItem>
                <MDBulletListItem><MDText medium bold>Caption :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(String)&nbsp;</MDText>
                    <MDText medium>This Parameter indicate the caption of check box</MDText>
                </MDBulletListItem>
                <MDBulletListItem><MDText medium bold>OnChange :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(function(value: boolean))&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium>This is a call back function will be fired when the checked change</MDText>
                </MDBulletListItem>
            </MDBulletList>
        </MDBox>
        <MDBox DefaultMargin DefaultPadding>
            <MDText large bold>Sample Code</MDText>
            <MDCodeBlock code="<MDCheckBox Caption='This is for a test' OnChange={OnChange} Value={Checked} />"></MDCodeBlock>
        </MDBox>
    </MDBox>
    )
}

export default CheckBoxRoute;