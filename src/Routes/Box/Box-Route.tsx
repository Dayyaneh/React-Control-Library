import React, { FunctionComponent } from 'react';
import MDBox, { ContentAlignment, Direction, Distribution } from '../../Control-Library/Box/Box';
import MDBulletList from '../../Control-Library/Bullet-List/Bullet-List';
import MDBulletListItem from '../../Control-Library/Bullet-List/Bullet-List-Item';
import MDCodeBlock from '../../Control-Library/Code-Block/Code-Block';
import MDIcon, { IconType } from '../../Control-Library/Icon/Icon';
import MDPageTitle from '../../Control-Library/Page-Title/Page-Title';
import MDText, { Alignment } from '../../Control-Library/Text/Text';

const BoxRoute: FunctionComponent = () => {
    return (<MDBox Bordered Rounded DefaultMargin ContentDirection={Direction.Vertical}>
        <MDPageTitle Title="Box" Icon={<MDIcon IconType={IconType.Div} />} />
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
            <MDText bold large>1) Example - Distributed Equal</MDText>
            <MDBox Bordered Rounded DefaultPadding>
                <MDBox WholeWidth
                    ContentDistribution={Distribution.Equal}
                    ContentDirection={Direction.Horizontal}>
                    <MDBox featured Bordered
                        ContentDirection={Direction.Vertical}
                        ContentVerticalAlign={ContentAlignment.Center} ContentHorizontalAlign={ContentAlignment.Center} >
                        <MDText large bold>1</MDText>
                    </MDBox>
                    <MDBox featured Bordered
                        ContentVerticalAlign={ContentAlignment.Center}
                        ContentHorizontalAlign={ContentAlignment.Center}>
                        <MDText large bold>2</MDText>
                    </MDBox>
                    <MDBox featured Bordered
                        ContentVerticalAlign={ContentAlignment.Center}
                        ContentHorizontalAlign={ContentAlignment.Center}>
                        <MDText large bold>3</MDText>
                    </MDBox>
                </MDBox>
            </MDBox>
            <MDBox DefaultPadding>
                <MDText medium bold>Sample Code</MDText>
                <MDCodeBlock code='<MDBox SizeOption={SizeOption.DistributedEqual}>...</MDBox>'></MDCodeBlock>
            </MDBox>
        </MDBox>

        <MDBox ContentDirection={Direction.Vertical} DefaultMargin DefaultPadding>
            <MDText bold large>2) Example - Distributed as the content size</MDText>
            <MDBox Bordered Rounded DefaultPadding>
                <MDBox WholeWidth
                    ContentDistribution={Distribution.Size}
                    ContentDirection={Direction.Horizontal}>
                    <MDBox featured Bordered Style={{ width: '120px' }}
                        ContentVerticalAlign={ContentAlignment.Center}
                        ContentHorizontalAlign={ContentAlignment.Center} >
                        <MDText>Width='120px'</MDText>
                    </MDBox>
                    <MDBox featured Bordered Style={{ width: '160px' }}
                        ContentVerticalAlign={ContentAlignment.Center}
                        ContentHorizontalAlign={ContentAlignment.Center}>
                        <MDText>Width='180px'</MDText>
                    </MDBox>
                    <MDBox featured Bordered Style={{ width: '180px' }}
                        ContentVerticalAlign={ContentAlignment.Center}
                        ContentHorizontalAlign={ContentAlignment.Center}>
                        <MDText>Width='220px'</MDText>
                    </MDBox>
                </MDBox>
            </MDBox>
            <MDBox DefaultPadding>
                <MDText medium bold>Sample Code</MDText>
                <MDCodeBlock code='<MDBox SizeOption={SizeOption.SizeAsContent}>...</MDBox>'></MDCodeBlock>
            </MDBox>
        </MDBox>

        <MDBox ContentDirection={Direction.Vertical} DefaultMargin DefaultPadding>
            <MDText bold large>3) Example - Distributed by growth</MDText>
            <MDBox Bordered Rounded DefaultPadding>
                <MDBox WholeWidth
                    ContentDistribution={Distribution.Growth}
                    ContentDirection={Direction.Horizontal}>
                    <MDBox featured Bordered
                        Grow={1}
                        ContentVerticalAlign={ContentAlignment.Center}
                        ContentHorizontalAlign={ContentAlignment.Center} >
                        <MDText>Grow = 1</MDText>
                    </MDBox>
                    <MDBox featured Bordered
                        Grow={2}
                        ContentVerticalAlign={ContentAlignment.Center}
                        ContentHorizontalAlign={ContentAlignment.Center} >
                        <MDText>Grow = 2</MDText>
                    </MDBox>
                </MDBox>
            </MDBox>
            <MDBox DefaultPadding>
                <MDText medium bold>Sample Code</MDText>
                <MDCodeBlock code='<MDBox WholeWidth ContentDistribution={Distribution.Growth} ContentDirection={Direction.Horizontal}> . . .</MDBox>'></MDCodeBlock>
            </MDBox>
        </MDBox>

        <MDBox ContentDirection={Direction.Vertical} DefaultMargin DefaultPadding>
            <MDText bold large>4) Example - Distributed by division</MDText>
            <MDBox Bordered Rounded DefaultPadding>
                <MDBox WholeWidth
                    ContentDistribution={Distribution.Division}
                    ContentDirection={Direction.Horizontal}>
                    <MDBox featured Bordered
                        Division='1/3'
                        ContentVerticalAlign={ContentAlignment.Center}
                        ContentHorizontalAlign={ContentAlignment.Center} >
                        <MDText>1/3</MDText>
                    </MDBox>
                    <MDBox featured Bordered
                        Division='2/4'
                        ContentVerticalAlign={ContentAlignment.Center}
                        ContentHorizontalAlign={ContentAlignment.Center} >
                        <MDText>2/4</MDText>
                    </MDBox>
                </MDBox>
            </MDBox>
            <MDBox DefaultPadding>
                <MDText medium bold>Sample Code</MDText>
                <MDCodeBlock code='<MDBox SizeOption={SizeOption.SizeAsContent}>...</MDBox>'></MDCodeBlock>
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

export default BoxRoute;