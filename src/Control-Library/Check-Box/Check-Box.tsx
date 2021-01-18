import React, { useEffect, useState } from 'react';
import classNames from '../-General/General';
import MDIcon, { IconType } from '../Icon/Icon';
import MDText from '../Text/Text';

import './Check-Box.scss';

interface iProps {
    Id?: number;
    Value?: boolean | false;
    Caption: string;
    TabIndex?: number;
    OnChange?(value: boolean, Caption: string, Id?: number): void;
}

const MDCheckBox: React.FunctionComponent<iProps> = (props: iProps) => {
    const [checked, setChecked] = useState(props.Value ? props.Value : false);

    const OnClick = () => {
        setChecked(!checked);
        props.OnChange && props.OnChange(!checked, props.Caption, props.Id ? props.Id : 0);
    }

    const OnKeyUp = (event: React.KeyboardEvent) => {
        if (event.keyCode === 32 || event.keyCode === 13) {
            OnClick();
        }
    }

    return (<div className={classNames(['md-check-box'])}
        onClick={OnClick}
        onKeyUp={OnKeyUp}
        tabIndex={props.TabIndex ? props.TabIndex : 0}>
        <div className={classNames(['check-box-container', checked ? 'checked' : 'unchecked'])}>
            <MDIcon IconType={IconType.Check} />
        </div>
        <MDText className='check-box-caption' medium unselectable>{props.Caption}</MDText>
    </div>)
}

export default MDCheckBox;