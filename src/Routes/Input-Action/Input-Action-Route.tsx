import React, { FunctionComponent } from 'react';
import MDBox, { Direction, Distribution } from '../../Control-Library/Box/Box';
import MDBulletList from '../../Control-Library/Bullet-List/Bullet-List';
import MDBulletListItem from '../../Control-Library/Bullet-List/Bullet-List-Item';
import MDCodeBlock from '../../Control-Library/Code-Block/Code-Block';
import MDIcon, { IconType } from '../../Control-Library/Icon/Icon';
import MDInputAction, { IconSpanLocation, InputMode } from '../../Control-Library/Input-Action/Input-Action';
import MDPageTitle from '../../Control-Library/Page-Title/Page-Title';
import MDText, { Alignment } from '../../Control-Library/Text/Text';

const InputActionRoute: FunctionComponent = () => {
    const OnLastNameChange = (value: string) => {
        console.log(value);
    }

    const OnAction = () => {
        console.log("Action Click");
    }

    return (<MDBox Bordered Rounded DefaultMargin ContentDirection={Direction.Vertical}>
        <MDPageTitle Title="Input Action" Icon={<MDIcon IconType={IconType.Input} />} />
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
                ContentDirection={Direction.Vertical}                
                Mobile={{Bordered: false}}>
                <MDBox WholeWidth
                    DefaultPadding
                    ContentDirection={Direction.Horizontal}
                    ContentDistribution={Distribution.Equal}
                    Mobile={{ContentDirection:Direction.Vertical, DefaultPadding: false}}>
                    <MDInputAction PlaceHolder='Enter your lirstname' DefaultMargin OnAction={OnAction} />
                    <MDInputAction PlaceHolder='Enter your lastname' DefaultMargin IsRequiered OnChange={OnLastNameChange} />
                    <MDInputAction PlaceHolder='Enter your Age' DefaultMargin InputMode={InputMode.Number} />
                </MDBox>
                <MDBox WholeWidth 
                    DefaultPadding
                    ContentDirection={Direction.Horizontal}
                    ContentDistribution={Distribution.Equal}
                    Mobile={{ContentDirection:Direction.Vertical, DefaultPadding: false}}>
                    <MDInputAction PlaceHolder='Website URL' DefaultMargin InputMode={InputMode.URL} />
                    <MDInputAction PlaceHolder='Email Address' DefaultMargin InputMode={InputMode.Email} />
                    <MDInputAction PlaceHolder='Phone number' DefaultMargin InputMode={InputMode.Phone} />
                </MDBox>
                <MDBox WholeWidth
                    DefaultPadding
                    ContentDirection={Direction.Horizontal}
                    ContentDistribution={Distribution.Equal}                                    
                    Mobile={{ContentDirection:Direction.Vertical, DefaultPadding: false}}>
                    <MDInputAction PlaceHolder='Decimal number' DefaultMargin InputMode={InputMode.Decimal} />
                    <MDInputAction PlaceHolder='This is an example' DefaultMargin Icon={<MDIcon IconType={IconType.Delete} />} />
                    <MDInputAction PlaceHolder='Enter Your Password' DefaultMargin InputMode={InputMode.Password}                         
                        IconSpanLocation={IconSpanLocation.Right} 
                        Icon={<MDIcon IconType={IconType.Key} />} />
                </MDBox>
            </MDBox>
        </MDBox>
        <MDBox ContentDirection={Direction.Vertical} DefaultMargin DefaultPadding>
            <MDText large bold>Properties</MDText>
            <MDText medium light>For setting up this control there are some options which describe below </MDText>
            <MDBulletList>
                <MDBulletListItem>
                    <MDText medium bold>PlaceHolder :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(string)&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium>This message show on the top of the icon</MDText>
                </MDBulletListItem>
                <MDBulletListItem>
                    <MDText medium bold>MultiFile :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(boolean)&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium>This property indicates the control should accept multiple file or no</MDText>
                </MDBulletListItem>
                <MDBulletListItem>
                    <MDText medium bold>MaxFileSize :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(number)&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium>This property indicates the maximum size of each file by KB</MDText>
                </MDBulletListItem>
                <MDBulletListItem>
                    <MDText medium bold>Accept :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(string)&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium>This property indicates the file format that should accept by the control</MDText>
                </MDBulletListItem>
                <MDBulletListItem>
                    <MDText medium bold>OnFilesChosen :&nbsp;</MDText>
                    <MDText medium light featured>&nbsp;(function)&nbsp;[nullable]&nbsp;</MDText>
                    <MDText medium>This is a call back function for having access to the chosen file</MDText>
                </MDBulletListItem>
            </MDBulletList>
        </MDBox>
        <MDBox DefaultMargin DefaultPadding>
            <MDText large bold>Sample Code</MDText>
            <MDCodeBlock code='<MDBulletListItem><MDText medium light>Elemet 2</MDText></MDBulletListItem>'></MDCodeBlock>
        </MDBox>
    </MDBox>
    )
}

export default InputActionRoute;