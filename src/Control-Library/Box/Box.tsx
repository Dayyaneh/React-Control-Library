import React, { useEffect, useRef, useState } from 'react';
import useMediaQuery, { MobileQuery, TabletQuery } from '../-General/Hooks/MediaQuery';
import classNames from '../-General/General';

import './Box.scss';
import { stringify } from 'querystring';

export enum Direction {
    Vertical = 'vertical',
    Horizontal = 'horizontal',
}

export enum ContentAlignment {
    Center = 'center',
    Start = 'start',
    End = 'end',
}

export enum Distribution {
    Equal = 'equal',
    Growth = 'growth',
    Size = 'size',
    Division = 'division',
}

class iGeneralProps {
    Bordered?: boolean | false;
    Rounded?: boolean | false;

    ContentDirection?: Direction;
    ContentDistribution?: Distribution;
    ContentVerticalAlign?: ContentAlignment;
    ContentHorizontalAlign?: ContentAlignment;

    Grow?: number;
    Division?: string;

    WholeScreen?: boolean | false;
    WholeHeight?: boolean | false;
    WholeWidth?: boolean | false;

    DefaultMargin?: boolean | false;
    NoMargin?: boolean | false;
    DefaultPadding?: boolean | false;
    NoPadding?: boolean | false;

    BackgroundColor?: string;
    Style?: React.CSSProperties;
}

class iProps extends iGeneralProps {
    children?: React.ReactNode;
    ClassName?: string;
    RandomBackgroundColor?: boolean | false;
    featured?: boolean | false;

    Tablet?: iGeneralProps;
    Mobile?: iGeneralProps;
}

const MDBox: React.FunctionComponent<iProps> = (props: iProps) => {
    const [parentDirection, setParentDirection] = useState<Direction>();
    const [parentDistribution, setParentDistribution] = useState<Distribution>();
    const isMobile = useMediaQuery(MobileQuery);
    const isTablet = useMediaQuery(TabletQuery);

    const iref = useRef(null);

    useEffect(() => {
        if (iref.current?.['parentNode']['className']) {
            const className = iref.current?.['parentNode']['className'];
            if (className) {
                if ((className + '').includes('distribution-equal')) {
                    setParentDistribution(Distribution.Equal)
                } else if ((className + '').includes('distribution-size')) {
                    setParentDistribution(Distribution.Size)
                } else if ((className + '').includes('distribution-growth')) {
                    setParentDistribution(Distribution.Growth)
                } else if ((className + '').includes('distribution-division')) {
                    setParentDistribution(Distribution.Division)
                }
            }
        }

        if (iref.current?.['parentNode']['style']['flexDirection']) {
            const flexDirection = iref.current?.['parentNode']['style']['flexDirection'];
            if (flexDirection === 'row')
                setParentDirection(Direction.Horizontal);
            else if (flexDirection === 'column')
                setParentDirection(Direction.Vertical);
        }
    }, [iref]);
    /*-------------------------------------------------------------------------------------------*/
    /*-------------------------------------------------------------------------------------------*/
    const getBorderedClassName = (): string => {
        if (isMobile) {
            if (props.Mobile?.Bordered === true)
                return 'bordered';
            else if (props.Mobile?.Bordered === false)
                return '';
        }
        else if (isTablet) {
            if (props.Tablet?.Bordered === true)
                return 'bordered';
            else if (props.Tablet?.Bordered === false)
                return '';
        }
        return props.Bordered ? 'bordered' : '';
    }

    const getRoundedClassName = (): string => {
        if (isMobile) {
            if (props.Mobile?.Rounded === true)
                return 'rounded';
            else if (props.Mobile?.Rounded === false)
                return '';
        }
        else if (isTablet) {
            if (props.Tablet?.Rounded === true)
                return 'rounded';
            else if (props.Tablet?.Rounded === false)
                return '';
        }
        return props.Rounded ? 'rounded' : '';
    }

    const getContentDistribution = (): string => {
        if (isMobile) {
            if (props.ContentDistribution === Distribution.Equal)
                return 'distribution-equal';
            else if (props.ContentDistribution === Distribution.Size)
                return 'distribution-size';
            else if (props.ContentDistribution === Distribution.Growth)
                return 'distribution-growth';
            else if (props.ContentDistribution === Distribution.Division)
                return 'distribution-division';
        } else if (isTablet) {
            if (props.ContentDistribution === Distribution.Equal)
                return 'distribution-equal';
            else if (props.ContentDistribution === Distribution.Size)
                return 'distribution-size';
            else if (props.ContentDistribution === Distribution.Growth)
                return 'distribution-growth';
            else if (props.ContentDistribution === Distribution.Division)
                return 'distribution-division';
        }

        if (props.ContentDistribution === Distribution.Equal)
            return 'distribution-equal';
        else if (props.ContentDistribution === Distribution.Size)
            return 'distribution-size';
        else if (props.ContentDistribution === Distribution.Growth)
            return 'distribution-growth';
        else if (props.ContentDistribution === Distribution.Division)
            return 'distribution-division';

        return '';
    }
    /*-------------------------------------------------------------------------------------------*/
    const getContentVerticalAlignClassName = (): string => {
        let direction = props.ContentDirection;
        direction = isMobile && props.Mobile?.ContentDirection ? props.Mobile?.ContentDirection : direction;
        direction = isTablet && props.Tablet?.ContentDirection ? props.Tablet?.ContentDirection : direction;

        if (isTablet && props.Tablet?.ContentVerticalAlign) {
            if (props.Tablet?.ContentVerticalAlign === ContentAlignment.Start)
                return direction === Direction.Vertical || !direction ? 'horizontal-start' : 'vertical-start';
            else if (props.Tablet?.ContentVerticalAlign === ContentAlignment.Center)
                return direction === Direction.Vertical || !direction ? 'horizontal-start' : 'vertical-start';
            else if (props.Tablet?.ContentVerticalAlign === ContentAlignment.End)
                return direction === Direction.Vertical || !direction ? 'horizontal-start' : 'vertical-start';
        } else if (isMobile && props.Mobile?.ContentVerticalAlign) {
            if (props.Mobile?.ContentVerticalAlign === ContentAlignment.Start)
                return direction === Direction.Vertical || !direction ? 'horizontal-start' : 'vertical-start';
            else if (props.Mobile?.ContentVerticalAlign === ContentAlignment.Center)
                return direction === Direction.Vertical || !direction ? 'horizontal-start' : 'vertical-start';
            else if (props.Mobile?.ContentVerticalAlign === ContentAlignment.End)
                return direction === Direction.Vertical || !direction ? 'horizontal-start' : 'vertical-start';
        }

        if (props.ContentVerticalAlign === ContentAlignment.Start)
            return direction === Direction.Vertical || !direction ? 'horizontal-start' : 'vertical-start';
        else if (props.ContentVerticalAlign === ContentAlignment.Center)
            return direction === Direction.Vertical || !direction ? 'horizontal-center' : 'vertical-center';
        else if (props.ContentVerticalAlign === ContentAlignment.End)
            return direction === Direction.Vertical || !direction ? 'horizontal-end' : 'vertical-end';

        return '';
    }

    const getContentHorizontalAlignClassName = (): string => {
        let direction = props.ContentDirection;
        direction = isMobile && props.Mobile?.ContentDirection ? props.Mobile?.ContentDirection : direction;
        direction = isTablet && props.Tablet?.ContentDirection ? props.Tablet?.ContentDirection : direction;

        if (isTablet) {
            if (props.Tablet?.ContentHorizontalAlign === ContentAlignment.Start)
                return direction === Direction.Vertical || !direction ? 'vertical-start' : 'horizontal-start';
            else if (props.Tablet?.ContentHorizontalAlign === ContentAlignment.Center)
                return direction === Direction.Vertical || !direction ? 'vertical-center' : 'horizontal-center';
            else if (props.Tablet?.ContentHorizontalAlign === ContentAlignment.End)
                return direction === Direction.Vertical || !direction ? 'vertical-end' : 'horizontal-end';
        }
        else if (isMobile) {
            if (props.Mobile?.ContentHorizontalAlign === ContentAlignment.Start)
                return direction === Direction.Vertical || !direction ? 'vertical-start' : 'horizontal-start';
            else if (props.Mobile?.ContentHorizontalAlign === ContentAlignment.Center)
                return direction === Direction.Vertical || !direction ? 'vertical-center' : 'horizontal-center';
            else if (props.Mobile?.ContentHorizontalAlign === ContentAlignment.End)
                return direction === Direction.Vertical || !direction ? 'vertical-end' : 'horizontal-end';
        }

        if (props.ContentHorizontalAlign === ContentAlignment.Start)
            return direction === Direction.Vertical || !direction ? 'vertical-start' : 'horizontal-start';
        else if (props.ContentHorizontalAlign === ContentAlignment.Center)
            return direction === Direction.Vertical || !direction ? 'vertical-center' : 'horizontal-center';
        else if (props.ContentHorizontalAlign === ContentAlignment.End)
            return direction === Direction.Vertical || !direction ? 'vertical-end' : 'horizontal-end';

        return '';
    }

    const getDefualtMarginClassName = (): string => {
        if (isMobile) {
            if (props.Mobile?.DefaultMargin === true)
                return 'defualt-margin';
            else if (props.Mobile?.DefaultMargin === false)
                return '';
        }
        else if (isTablet) {
            if (props.Tablet?.DefaultMargin === true)
                return 'defualt-margin';
            else if (props.Tablet?.DefaultMargin === false)
                return '';
        }

        return props.DefaultMargin === true ? 'defualt-margin' : '';
    }

    const getDefualtPaddingClassName = (): string => {
        if (isMobile) {
            if (props.Mobile?.DefaultPadding === true)
                return 'defualt-padding';
            else if (props.Mobile?.DefaultPadding === false)
                return '';
        }
        else if (isTablet) {
            if (props.Tablet?.DefaultPadding === true)
                return 'defualt-padding';
            else if (props.Tablet?.DefaultPadding === false)
                return '';
        }

        return props.DefaultPadding === true ? 'defualt-padding' : '';
    }
    /*-------------------------------------------------------------------------------------------*/
    const getBackgroundColor = () => {
        if (props.RandomBackgroundColor)
            return { backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16) };
    }
    /*-------------------------------------------------------------------------------------------*/
    const getFlexGrow = () => {
        if (isMobile) {
            if (props.Mobile?.Grow !== null && props.Mobile?.Grow !== undefined && props.Mobile?.Grow !== NaN)
                return { flexGrow: props.Mobile?.Grow };
        }
        else if (isTablet) {
            if (props.Tablet?.Grow !== null && props.Tablet?.Grow !== undefined && props.Tablet?.Grow !== NaN)
                return { flexGrow: props.Tablet?.Grow };
        }

        if (props.Grow !== null && props.Grow !== undefined && props.Grow !== NaN && parentDistribution === Distribution.Growth)
            return { flexGrow: props.Grow };
    }

    const getContentDirection = () => {
        if (isTablet) {
            if (props.Tablet?.ContentDirection === Direction.Horizontal)
                return { flexDirection: 'row' };
            else if (props.Tablet?.ContentDirection === Direction.Vertical)
                return { flexDirection: 'column' };
        }
        else if (isMobile) {
            if (props.Mobile?.ContentDirection === Direction.Horizontal)
                return { flexDirection: 'row' };
            else if (props.Mobile?.ContentDirection === Direction.Vertical)
                return { flexDirection: 'column' };
        }

        if (props.ContentDirection === Direction.Horizontal)
            return { flexDirection: 'row' };
        else if (props.ContentDirection === Direction.Vertical)
            return { flexDirection: 'column' };

        return { flexDirection: 'column' };;
    }

    const getWholeScreen = () => {
        if (isMobile) {
            if (props.Mobile?.WholeHeight === true)
                return { height: '100vh', width: '100vw' };
        }
        else if (isTablet) {
            if (props.Tablet?.WholeHeight === true)
                return { height: '100vh', width: '100vw' };
        }

        if (props.WholeHeight === true)
            return { height: '100vh', width: '100vw' };
    }

    const getDevision = () => {
        if (props.Division) {
            const splitArray = props.Division.split('/');
            if (splitArray.length = 2) {
                return { Divisor: parseInt(splitArray[0]), Denominator: parseInt(splitArray[1]) };
            }
        }
    }

    const getHeight = () => {
        if (isMobile) {
            if (props.Mobile?.WholeHeight === true)
                return { height: '100%' };
        }
        else if (isTablet) {
            if (props.Tablet?.WholeHeight === true)
                return { height: '100%' };
        }

        if (props.WholeHeight === true) {
            return { height: '100%' };
        } else if (props.Division && parentDistribution === Distribution.Division && parentDirection === Direction.Vertical) {
            const devision = getDevision();
            if (devision) {
                return { height: 'calc(' + devision.Divisor + '*100%/' + devision.Denominator + ')' };
            }
        }
    }

    const getWidth = () => {
        if (isMobile) {
            if (props.Mobile?.WholeHeight === true)
                return { width: '100%' };
        }
        else if (isTablet) {
            if (props.Tablet?.WholeHeight === true)
                return { width: '100%' };
        }

        if (props.WholeHeight === true) {
            return { width: '100%' };
        } else if (props.Division && parentDistribution === Distribution.Division && parentDirection === Direction.Horizontal) {
            const devision = getDevision();
            if (devision) {
                return { width: 'calc(' + devision.Divisor + '*100%/' + devision.Denominator + ')' };
            }
        }
    }

    const getNoMargin = () => {
        if (isMobile) {
            if (props.Mobile?.NoMargin === true)
                return { margin: 0 };
        }
        else if (isTablet) {
            if (props.Tablet?.NoMargin === true)
                return { margin: 0 };
        }

        if (props.NoMargin === true)
            return { margin: 0 };
    }

    const getNoPadding = () => {
        if (isMobile) {
            if (props.Mobile?.NoPadding === true)
                return { padding: 0 };
        }
        else if (isTablet) {
            if (props.Tablet?.NoPadding === true)
                return { padding: 0 };
        }

        if (props.NoPadding === true)
            return { padding: 0 };
    }
    /*-------------------------------------------------------------------------------------------*/
    /*-------------------------------------------------------------------------------------------*/
    const getStyle = (): React.CSSProperties => {
        const retValue = Object.assign({ ...props.Style },
            getBackgroundColor(),
            getHeight(),
            getWidth(),
            getWholeScreen(),
            getFlexGrow(),
            getNoPadding(),
            getNoMargin(),
            getContentDirection());

        if (isMobile)
            return Object.assign(retValue, props.Mobile?.Style);

        else if (isTablet)
            return Object.assign(retValue, props.Tablet?.Style);

        return retValue;
    }
    /*-------------------------------------------------------------------------------------------*/
    return (<div ref={iref}
        className={classNames(['md-box',
            props.ClassName ? props.ClassName : '',
            props.featured ? 'featured' : '',
            getBorderedClassName(),
            getRoundedClassName(),
            getContentVerticalAlignClassName(),
            getContentHorizontalAlignClassName(),
            getContentDistribution(),
            getDefualtMarginClassName(),
            getDefualtPaddingClassName()])}
        style={{ ...getStyle() }}
    > { props.children} </div>);
}
export default MDBox;