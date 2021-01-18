import React from 'react';
import MDBox, { ContentAlignment, Direction, Distribution } from '../../Control-Library/Box/Box';
import MDImage from '../../Control-Library/Image/Image';
import MDText from '../../Control-Library/Text/Text';

const Home: React.FunctionComponent = () => {
    return (<MDBox ContentDirection={Direction.Vertical}>
        <MDBox ContentDirection={Direction.Horizontal} ContentDistribution={Distribution.Equal} DefaultPadding>
            <MDBox ContentDistribution={Distribution.Equal} DefaultMargin DefaultPadding Bordered Rounded>
                <img src='/Images/NPM-Logo.png' style={{ width: '80px' }}></img>
                <MDText medium>You Can find this library in the NPM</MDText>
            </MDBox>
            <MDBox ContentDistribution={Distribution.Equal} DefaultMargin DefaultPadding Bordered Rounded featured>
                <img src='/Images/GitHub-Logo.png' style={{ width: '80px' }}></img>
                <MDText medium featured>You Can find this source of this library in the GITHub</MDText>
            </MDBox>
        </MDBox>
        <MDBox ContentDirection={Direction.Horizontal} DefaultPadding DefaultMargin ContentHorizontalAlign={ContentAlignment.Center}>
            <MDImage Source='/Doodle/Hero.svg' Alt='' Width='500px'></MDImage>
        </MDBox>
    </MDBox>)
}

export default Home;