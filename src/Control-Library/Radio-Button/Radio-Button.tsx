import React, { useDebugValue, useEffect, useRef, useState } from 'react';
import classNames from '../-General/General';
import MDIcon, { IconType } from '../Icon/Icon';
import MDText from '../Text/Text';

import './Radio-Button.scss';

interface iProps {
    Id?: number;
    Value?: boolean | false;
    Caption: string;
    TabIndex?: number;
    OnChange?(value: boolean, Caption: string, Id?: number): void;
}

const MDRadioButton: React.FunctionComponent<iProps> = (props: iProps) => {
    const [checked, setChecked] = useState(props.Value ? props.Value : false);
    const ObjectRef = useRef(null);

    const OnClick = () => {
        setChecked(true);
        props.OnChange && props.OnChange(true, props.Caption, props.Id ? props.Id : 0);
    }

    const OnKeyUp = (event: React.KeyboardEvent) => {
        if (event.keyCode === 32 || event.keyCode === 13) {
            OnClick();
        }
    }

    useEffect(() => {
        setChecked(props.Value ? props.Value : false);
    }, [props.Value]);

    return (<div ref={ ObjectRef } className={ classNames(['md-radio-button']) }
        onClick={ OnClick }
        onKeyUp={ OnKeyUp }
        tabIndex={ props.TabIndex ? props.TabIndex : 0 }>
        <div className={classNames(['radio-button-container', checked ? 'checked' : 'unchecked'])}>
            <MDIcon IconType={IconType.Circle} />
        </div>
        <MDText className='radio-button-caption' medium unselectable>{props.Caption}</MDText>
    </div>)
}

export default MDRadioButton;