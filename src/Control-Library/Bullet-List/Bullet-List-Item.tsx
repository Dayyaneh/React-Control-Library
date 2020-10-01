import React from 'react';
import IconCircle from '../-General/Icon/IconCircle';
import IconDelete from '../-General/Icon/IconDelete';
import './Bullet-List-Item.scss';

interface iComponentProps {
    children?: React.ReactNode;
}

const MDBulletListItem: React.FunctionComponent<iComponentProps> = (props: iComponentProps) =>
    <div className='bullet-list-item'>
        <IconCircle/>
        <>{props.children}</>
    </div>

export default MDBulletListItem;