import React from 'react';
import MDBox, { ContentAlignment, Direction, Distribution } from '../../Control-Library/Box/Box';

const BoxRoute2: React.FunctionComponent = () =>
    <MDBox RandomBackgroundColor
        WholeScreen
        ContentDirection={Direction.Vertical} >
        <MDBox RandomBackgroundColor
            ContentDistribution={Distribution.Equal}
            ContentDirection={Direction.Vertical}
            ContentVerticalAlign={ContentAlignment.Center}
            ContentHorizontalAlign={ContentAlignment.Start}>
            <MDBox RandomBackgroundColor Style={{ width: '150px', height: '150px' }}></MDBox>
        </MDBox>
        <MDBox RandomBackgroundColor
            ContentDistribution={Distribution.Equal}
            ContentDirection={Direction.Vertical}
            ContentVerticalAlign={ContentAlignment.Center}
            ContentHorizontalAlign={ContentAlignment.Center}>
            <MDBox RandomBackgroundColor Style={{ width: '150px', height: '150px' }}></MDBox>
        </MDBox>
        <MDBox RandomBackgroundColor
            ContentDistribution={Distribution.Equal}
            ContentDirection={Direction.Vertical}
            ContentVerticalAlign={ContentAlignment.Center}
            ContentHorizontalAlign={ContentAlignment.End}>
            <MDBox RandomBackgroundColor Style={{ width: '150px', height: '150px' }}></MDBox>
        </MDBox>
    </MDBox>

export default BoxRoute2;