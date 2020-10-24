import React, { FunctionComponent, ReactElement } from 'react';
import { useHistory } from "react-router-dom";
import MDText, { Alignment } from '../Text/Text';
import './Main-Menu.scss';

export enum MDMenuLocation {
    Top = 'top',
    Bottom = 'bottom',
}

export enum MDMenuPosition {
    Relative = 'relative',
    Fix = 'fix',
    Absolute = 'absolute',
}

export enum MDMenuBorder {
    Top = 'top',
    Bottom = 'bottom',
}

export enum MDIconPosition {
    Left = 'left',
    Right = 'right',
}

export class MDMenuItem {
    Index?: number = 0;
    Caption: String = '';
    ToolTip?: String = '';
    Icon?: ReactElement;
    IocnPosition?: MDIconPosition;
    Visible?: boolean = false;
    DesktopVisible?: boolean = false;
    TabletVisible?: boolean = false;
    MobileVisible?: boolean = false;
    URL?: string;
    OnClick?: Function;
}

interface iComponentProps {
    height?: string;
    menuLocation?: MDMenuLocation;
    menuPosition?: MDMenuPosition;
    border?: MDMenuBorder;
    menuItems: MDMenuItem[];
}

const MDMainMenu: FunctionComponent<iComponentProps> = (props: iComponentProps) => {
    let history = useHistory();

    const gotoURL = (ULR: string) => {
        history.push(ULR);
    }

    const defaultHeight = '60px';
    return (<div className={['md-main-menu', 'align-end',
        !props.menuLocation || props.menuLocation === MDMenuLocation.Top ? 'position-top' : '',
        props.menuLocation === MDMenuLocation.Bottom ? 'position-bottom' : '',
        props.menuPosition === MDMenuPosition.Relative ? 'relative-position' : '',
        props.menuPosition === MDMenuPosition.Absolute ? 'absolute-position' : '',
        !props.menuPosition || props.menuPosition === MDMenuPosition.Fix ? 'fix-position' : '',

        props.border === MDMenuBorder.Top ? 'bordered-top' : '',
        props.border === MDMenuBorder.Bottom ? 'bordered-bottom' : ''
    ].join(' ')}
        style={{ height: props.height ? props.height : defaultHeight }}>
        {
            props.menuItems?.map((anItem: MDMenuItem, index: number) => {
                return (<div key={index}
                    className={['menu-item', anItem.IocnPosition === MDIconPosition.Right ? 'icon-right' : ''].join(' ')}
                    style={{ order: index }}
                    onClick={() => {
                        if (anItem.OnClick) {
                            anItem.OnClick()
                        }
                        else if (anItem.URL) {
                            gotoURL(anItem.URL);
                        }
                    }} >
                    <div className='icon-container'>{anItem.Icon}</div>
                    <MDText bold alignment={Alignment.Center}>{anItem.Caption}</MDText>
                </div>);
            })
        }
    </div>);
}

export default MDMainMenu;