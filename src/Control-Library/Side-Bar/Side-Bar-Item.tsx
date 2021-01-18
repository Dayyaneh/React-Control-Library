import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from '../-General/General';
import MDIcon, { IconType } from '../Icon/Icon';
import MDText, { Alignment } from '../Text/Text';
import { MDSideBarMenuItem } from './Side-Bar';

import './Side-Bar-Item.scss';


interface iProps {
    MenuItem: MDSideBarMenuItem;
}

const MDSideBarItem: React.FunctionComponent<iProps> = (props: iProps) => {
    const history = useHistory();

    const isExpandable = (): boolean => props.MenuItem.Items && props.MenuItem.Items.length > 0 ? true : false;

    const shouldBeExpanded = () => {
        let returnValue = false;
        props.MenuItem.Items && props.MenuItem.Items.forEach((item: MDSideBarMenuItem) => {
            if (item.URL === history.location.pathname)
                returnValue = true;
        });
        return returnValue;
    }

    const [isExpanded, setIsExpanded] = useState(shouldBeExpanded);

    return (<div key={props.MenuItem.Index} style={{ order: props.MenuItem.Index }}
        className={classNames(['md-side-bar-item menu-item', isExpanded ? 'expanding' : 'collapsing',
            props.MenuItem.URL === history.location.pathname ? 'selected' : ''])}
        onClick={(e) => {
            e.stopPropagation();

            if (isExpandable()) {
                setIsExpanded(!isExpanded);
            }
            else if (props.MenuItem.OnClick) {
                props.MenuItem.OnClick()
            }
            else if (props.MenuItem.URL) {
                history && history.push(props.MenuItem.URL);
            }
        }}>
        <div className='menu-container'>
            {props.MenuItem.Icon && <div className='icon-container'> {props.MenuItem.Icon} </div>}
            <MDText bold alignment={Alignment.Left} VerticalCenter unselectable>{props.MenuItem.Caption}</MDText>
            {isExpandable() && <div className={classNames(['icon-arrow-container', isExpanded ? 'expanding' : 'collapsing' ])}>
                <MDIcon IconType={IconType.ArrowDown} />
            </div>}
        </div>
        {isExpandable() && <div className={classNames(['sub-menu-container', isExpanded ? 'expanding' : 'collapsing'])}>
            {
                props.MenuItem.Items && props.MenuItem.Items.map((item: MDSideBarMenuItem) => {
                    return <MDSideBarItem key={item.Index} MenuItem={item} />
                })
            }
        </div>}
    </div>);
}

export default MDSideBarItem;