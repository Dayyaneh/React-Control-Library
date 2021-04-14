import React, { useRef, useState } from 'react';
import classNames from '../-General/General';

import MDButton from '../Button/Button';
import MDIcon, { IconType } from '../Icon/Icon';
import MDText from '../Text/Text';

import './Input-Action.scss';

export enum InputMode {
    Text = 'text',
    Number = 'number',
    Phone = 'phone',
    Decimal = 'decimal',
    Email = 'email',
    URL = 'url',
    Password = 'password',
}

export enum IconSpanLocation {
    Left = 'left',
    Right = 'right',
}

interface iProps {
    Value?: string;
    IsRequiered?: boolean;
    InputMode?: InputMode;
    PlaceHolder?: string;
    IconSpanLocation?: IconSpanLocation;
    Icon?: React.ReactElement;
    FormatErrorMessage?: string;
    DefaultMargin?: boolean | false;
    OnChange?(value: string): void;
    OnAction?(): void;
}

const MDInputAction: React.FunctionComponent<iProps> = (props: iProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState(props.Value ? props.Value : '');
    const [isFocus, setIsFocus] = useState(false);
    const [error, setError] = useState('');

    const getInputMode = () => {
        switch (props.InputMode) {
            case InputMode.Text:
                return 'text';
            case InputMode.Number:
                return 'numeric';
            case InputMode.Phone:
                return 'tel';
            case InputMode.Decimal:
                return 'decimal';
            case InputMode.Email:
                return 'email';
            case InputMode.URL:
                return 'url';
            case InputMode.Password:
                return 'text';
            default:
                return 'text';
        }
    }

    const getInputType = () => {
        switch (props.InputMode) {
            case InputMode.Text:
                return 'text';
            case InputMode.Number:
                return 'numeric';
            case InputMode.Phone:
                return 'tel';
            case InputMode.Decimal:
                return 'decimal';
            case InputMode.Email:
                return 'email';
            case InputMode.URL:
                return 'url';
            case InputMode.Password:
                return 'password';
            default:
                return 'text';
        }
    }

    const checkEnteredValue = (value: string) => {
        if (props.InputMode === InputMode.Number) {
            if (value && !value.match('^[0-9]*$'))
                return false;
        }
        if (props.InputMode === InputMode.URL) {
            if (value && !value.match('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})'))
                return false;
        }
        if (props.InputMode === InputMode.Email) {
            if (value && !value.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))
                return false;
        }
        if (props.InputMode === InputMode.Phone) {
            if (value && !value.match('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'))
                return false
        }
        if (props.InputMode === InputMode.Decimal) {
            if (value && !value.match('^\d*(\.)?\d+$'))
                return false
        }
        return true;
    }

    const OnChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        if (props.OnChange)
            props.OnChange(e.currentTarget.value);
    }

    const onGetFocus = () => {
        setIsFocus(true);
        inputRef.current && inputRef.current.focus();
    }

    const OnLostFocus = () => {
        if (value === '' && props.IsRequiered) {
            setError('This field is mandatory')
        } else if (checkEnteredValue(value) === false) {
            setError(props.FormatErrorMessage || 'Format Error');
        }
        setIsFocus(false);
    }

    const OnButtonClick = () => {
        if (props.OnAction){
            props.OnAction();
        }
    }

    return (<div className={classNames(['md-input-action',
                                        props.DefaultMargin ? 'default-margin' : '', 
                                        props.IconSpanLocation === IconSpanLocation.Right ? 'right' : ''])}
        onClick={onGetFocus}>
        <div className='input-container'>
            <div className={['place-holder', value || isFocus ? 'focus' : ''].join(' ')}>
                {props.IsRequiered && <MDIcon IconType={IconType.Circle}></MDIcon>}
                <p>{props.PlaceHolder}</p>
                {value !== '' && <button onClick={() => { setValue('') }}>
                    <MDIcon IconType={IconType.Delete} />
                </button>}
            </div>
            <input ref={inputRef}
                type={getInputType()}
                inputMode={getInputMode()}
                className={value || isFocus ? 'focus' : ''}
                value={value}
                onChange={OnChangeText}
                onBlur={OnLostFocus} />
        </div>

        <div className={['button-container', props.IconSpanLocation === IconSpanLocation.Right ? 'right' : ''].join(' ')}>
            <button onClick={OnButtonClick}>
            {props.Icon}
            </button>
            
        </div>

        {
            <MDText light small className='error-message' featured>{error}</MDText>
        }
    </div>)
}

export default MDInputAction;