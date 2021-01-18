import React from 'react';
import MDBox, { ContentAlignment, Direction, Distribution } from '../../Control-Library/Box/Box';

const BoxRoute3: React.FunctionComponent = () =>
    <MDBox RandomBackgroundColor 
        WholeScreen 
        ContentDirection={Direction.Vertical} >
        <MDBox RandomBackgroundColor
            ContentDirection={Direction.Horizontal}
            ContentDistribution={Distribution.Equal}
            Tablet={{ ContentDirection: Direction.Horizontal }}
            Mobile={{ ContentDirection: Direction.Vertical }}>
            <MDBox RandomBackgroundColor
                ContentDistribution={Distribution.Equal}
                ContentDirection={Direction.Horizontal}
                ContentVerticalAlign={ContentAlignment.Start}
                ContentHorizontalAlign={ContentAlignment.Start}>
                <MDBox RandomBackgroundColor
                    Style= {{ height: '150px', width: '150px'}}
                    Mobile={{ Style: { height: '100px', width: '100px'} }}
                    Tablet={{ Style: { height: '120px', width: '120px'} }}></MDBox>
            </MDBox>
            <MDBox RandomBackgroundColor
                ContentDistribution={Distribution.Equal}
                ContentDirection={Direction.Horizontal}
                ContentVerticalAlign={ContentAlignment.Start}
                ContentHorizontalAlign={ContentAlignment.Center}>
                <MDBox RandomBackgroundColor
                    Style= {{ height: '150px', width: '150px'}}
                    Mobile={{ Style: { height: '100px', width: '100px'} }}
                    Tablet={{ Style: { height: '120px', width: '120px'} }}></MDBox>
            </MDBox>
            <MDBox RandomBackgroundColor
                ContentDistribution={Distribution.Equal}
                ContentDirection={Direction.Horizontal}
                ContentVerticalAlign={ContentAlignment.Start}
                ContentHorizontalAlign={ContentAlignment.End}>
                <MDBox RandomBackgroundColor
                    Style= {{ height: '150px', width: '150px'}}
                    Mobile={{ Style: { height: '100px', width: '100px'} }}
                    Tablet={{ Style: { height: '120px', width: '120px'} }}></MDBox>
            </MDBox>
        </MDBox>
        <MDBox RandomBackgroundColor
            ContentDirection={Direction.Horizontal}
            ContentDistribution={Distribution.Equal}
            Tablet={{ ContentDirection: Direction.Horizontal }}
            Mobile={{ ContentDirection: Direction.Vertical }}  >
            <MDBox RandomBackgroundColor
                ContentDistribution={Distribution.Equal}
                ContentDirection={Direction.Horizontal}
                ContentVerticalAlign={ContentAlignment.Center}
                ContentHorizontalAlign={ContentAlignment.Start}>
                <MDBox RandomBackgroundColor
                    Style= {{ height: '150px', width: '150px'}}
                    Mobile={{ Style: { height: '100px', width: '100px'} }}
                    Tablet={{ Style: { height: '120px', width: '120px'} }}></MDBox>
            </MDBox>
            <MDBox RandomBackgroundColor
                ContentDistribution={Distribution.Equal}
                ContentDirection={Direction.Horizontal}
                ContentVerticalAlign={ContentAlignment.Center}
                ContentHorizontalAlign={ContentAlignment.Center}>
                <MDBox RandomBackgroundColor
                    Style= {{ height: '150px', width: '150px'}}
                    Mobile={{ Style: { height: '100px', width: '100px'} }}
                    Tablet={{ Style: { height: '120px', width: '120px'} }}></MDBox>
            </MDBox>
            <MDBox RandomBackgroundColor
                ContentDistribution={Distribution.Equal}
                ContentDirection={Direction.Horizontal}
                ContentVerticalAlign={ContentAlignment.Center}
                ContentHorizontalAlign={ContentAlignment.End}>
                <MDBox RandomBackgroundColor
                    Style= {{ height: '150px', width: '150px'}}
                    Mobile={{ Style: { height: '100px', width: '100px'} }}
                    Tablet={{ Style: { height: '120px', width: '120px'} }}></MDBox>
            </MDBox>
        </MDBox>
        <MDBox RandomBackgroundColor
            ContentDirection={Direction.Horizontal}
            ContentDistribution={Distribution.Equal}
            Tablet={{ ContentDirection: Direction.Horizontal }}
            Mobile={{ ContentDirection: Direction.Vertical }} >
            <MDBox RandomBackgroundColor
                ContentDistribution={Distribution.Equal}
                ContentDirection={Direction.Horizontal}
                ContentVerticalAlign={ContentAlignment.End}
                ContentHorizontalAlign={ContentAlignment.Start}>
                <MDBox RandomBackgroundColor
                    Style= {{ height: '150px', width: '150px'}}
                    Mobile={{ Style: { height: '100px', width: '100px'} }}
                    Tablet={{ Style: { height: '120px', width: '120px'} }}></MDBox>
            </MDBox>
            <MDBox RandomBackgroundColor
                ContentDistribution={Distribution.Equal}
                ContentDirection={Direction.Horizontal}
                ContentVerticalAlign={ContentAlignment.End}
                ContentHorizontalAlign={ContentAlignment.Center}>
                <MDBox RandomBackgroundColor
                    Style= {{ height: '150px', width: '150px'}}
                    Mobile={{ Style: { height: '100px', width: '100px'} }}
                    Tablet={{ Style: { height: '120px', width: '120px'} }}></MDBox>
            </MDBox>
            <MDBox RandomBackgroundColor
                ContentDistribution={Distribution.Equal}
                ContentDirection={Direction.Horizontal}
                ContentVerticalAlign={ContentAlignment.End}
                ContentHorizontalAlign={ContentAlignment.End}>
                <MDBox RandomBackgroundColor
                    Style= {{ height: '150px', width: '150px'}}
                    Mobile={{ Style: { height: '100px', width: '100px'} }}
                    Tablet={{ Style: { height: '120px', width: '120px'} }}></MDBox>
            </MDBox>
        </MDBox>
    </MDBox>

export default BoxRoute3;