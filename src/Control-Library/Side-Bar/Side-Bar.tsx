import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from '../-General/General';
import useMediaQuery, { MobileQuery, TabletQuery } from '../-General/Hooks/MediaQuery';
import MDBox from '../Box/Box';
import { MDIconPosition } from '../Main-Menu/Main-Menu';
import MenuBarIcon from './MenuBarIcon';
import MDSideBarItem from './Side-Bar-Item';

import './Side-Bar.scss';

export class MDSideBarMenuItem {
    Index?: number = 0;
    Caption: String = '';
    ToolTip?: String = '';
    Icon?: ReactElement;
    IocnPosition?: MDIconPosition;
    Visible?: boolean = false;
    TabletVisible?: boolean = false;
    MobileVisible?: boolean = false;
    URL?: string;
    OnClick?: Function;
    Items?: MDSideBarMenuItem[];
}

class iGeneralProps {
    Left?: boolean | false;
    Right?: boolean | false;
}

class iProps extends iGeneralProps {
    MenuItems?: MDSideBarMenuItem[];
    Mobile?: iGeneralProps;
    Tablet?: iGeneralProps;
}

const MDSideBar: React.FunctionComponent<iProps> = (props: iProps) => {
    const isMobile = useMediaQuery(MobileQuery);
    const isTablet = useMediaQuery(TabletQuery);
    const history = useHistory();

    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        setIsOpened(false);
    }, [history.location.pathname])

    const getPositionClassName = () => {
        if (isMobile && props.Mobile) {
            if (props.Mobile.Left)
                return 'left-side';
            else if (props.Mobile.Right)
                return 'right-side';
        }
        else if (isTablet && props.Tablet) {
            if (props.Tablet.Left)
                return 'left-side';
            else if (props.Tablet.Right)
                return 'right-side';
        }

        if (props.Left)
            return 'left-side';
        else if (props.Right)
            return 'right-side';

        return '';
    }

    const OnBackDropClick = () => {
        setIsOpened(false);
    }

    return (<div className={classNames(['md-side-bar', getPositionClassName()])}>
        <MenuBarIcon IsOnTheCloseMode={isOpened} OnClick={() => { setIsOpened(!isOpened) }} />
        {
            isOpened && <div className='back-drop' onClick={OnBackDropClick}></div>
        }
        <div className={classNames(['side-bar-container', isOpened ? 'showing' : 'hiding'])}>
            {
                props.MenuItems && props.MenuItems.map((item: MDSideBarMenuItem) => {
                    if (isMobile && item.MobileVisible === false)
                        return;
                    if (isTablet && item.TabletVisible === false)
                        return;
                    if (item.Visible === false)
                        return;

                    return <MDSideBarItem key={item.Index} MenuItem={item} />
                })
            }
        </div>
    </div>)
}

export default MDSideBar;