import React from 'react';
import MDBox, { ContentAlignment, Direction } from '../../Control-Library/Box/Box';
import MDText from '../../Control-Library/Text/Text';

const NotFoundRoute: React.FunctionComponent = () => {
    return (<MDBox ContentDirection={Direction.Horizontal} ContentHorizontalAlign={ContentAlignment.Center} DefaultMargin DefaultPadding>
        <MDText bold large>Page Not Found</MDText>
    </MDBox>)
}

export default NotFoundRoute;