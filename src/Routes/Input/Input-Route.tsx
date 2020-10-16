import React, { FunctionComponent } from 'react';
import IconAddFile from '../../Control-Library/-General/Icon/IconAddFile';
import MDBulletList from '../../Control-Library/Bullet-List/Bullet-List';
import MDBulletListItem from '../../Control-Library/Bullet-List/Bullet-List-Item';
import MDCodeBlock from '../../Control-Library/Code-Block/Code-Block';
import MDContainer, { ContentAlignment, Direction } from '../../Control-Library/Container/Container';
import MDIcon, { IconType } from '../../Control-Library/Icon/Icon';
import MDInput, { IconSpanLocation, InputMode } from '../../Control-Library/Input/Input';
import MDMainMenu, { MDIconPosition, MDMenuBorder, MDMenuPosition } from '../../Control-Library/Main-Menu/Main-Menu';
import MDPageTitle from '../../Control-Library/Page-Title/Page-Title';
import MDText, { Alignment } from '../../Control-Library/Text/Text';

const InputRoute: FunctionComponent = () => {
    const OnLastNameChange = (value: string)=> {
        console.log(value);
    }

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
            <MDPageTitle Title="Input" Icon={<IconAddFile />} />
            <MDContainer>
                <MDText light alignment={Alignment.Justify}></MDText>
            </MDContainer>
            <MDContainer>
                <MDText bold large>Example</MDText>
                <MDContainer bordered rounded
                    vAlignment={ContentAlignment.Center}
                    hAlignment={ContentAlignment.Center}>
                    <MDContainer direction={Direction.Horizontal}>
                        <MDInput PlaceHolder='Enter your lirstname' />
                        <MDInput PlaceHolder='Enter your lastname' IsRequiered OnChange={OnLastNameChange} />
                        <MDInput PlaceHolder='Enter your Age' InputMode={InputMode.Number} />

                    </MDContainer>
                    <MDContainer direction={Direction.Horizontal}>
                        <MDInput PlaceHolder='Website URL' InputMode={InputMode.URL} />
                        <MDInput PlaceHolder='Email Address' InputMode={InputMode.Email} />
                        <MDInput PlaceHolder='Phone number' InputMode={InputMode.Phone} />
                    </MDContainer>
                    <MDContainer direction={Direction.Horizontal}>
                        <MDInput PlaceHolder='Decimal number' InputMode={InputMode.Decimal} />
                        <MDInput PlaceHolder='This is an example' Icon={<MDIcon IconType={IconType.Delete} />}></MDInput>
                        <MDInput PlaceHolder='This is an example' IconSpanLocation={IconSpanLocation.Right} Icon={<MDIcon IconType={IconType.Delete} />}></MDInput>
                    </MDContainer>
                </MDContainer>
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
    </div>)
}

export default InputRoute;