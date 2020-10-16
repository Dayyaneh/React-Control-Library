import React, { useRef, useState } from 'react';

import MDButton from '../Button/Button';
import MDIcon, { IconType } from '../Icon/Icon';
import MDText from '../Text/Text';

import './input.scss';

export enum InputMode {
    Text = 'text',
    Number = 'number',
    Phone = 'phone',
    Decimal = 'decimal',
    Email = 'email',
    URL = 'url',
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
    OnChange?(value: string): void;
}

const MDInput: React.FunctionComponent<iProps> = (props: iProps) => {
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
            default:
                return 'text';
        }
    }

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.InputMode === InputMode.Number) {
            if (e.currentTarget.value === '' || e.currentTarget.value.match('^[0-9]*$')) {
                setValue(e.currentTarget.value);
                if (props.OnChange)
                    props.OnChange(e.currentTarget.value);
            }
            return;
        }
        else if (props.InputMode === InputMode.URL) {
            if (e.currentTarget.value === '' || e.currentTarget.value.match('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})'))
                setError('');
            else
                setError('Format Error');
        }
        else if (props.InputMode === InputMode.Email) {
            if (e.currentTarget.value === '' || e.currentTarget.value.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))
                setError("");
            else
                setError("Format Error");
        }
        else if (props.InputMode === InputMode.Phone) {
            if (e.currentTarget.value === '' || e.currentTarget.value.match('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'))
                setError('');
            else
                setError("Format Error");
        }
        else if (props.InputMode === InputMode.Decimal) {
            if (e.currentTarget.value === '' ||e.currentTarget.value.match('^\d*(\.)?\d+$'))
                setError('');            
            else 
                setError("Format Error");
        }

        setValue(e.currentTarget.value);
        if (props.OnChange)
            props.OnChange(e.currentTarget.value);
    }

    const onGetFocus = () => {
        setIsFocus(true);
        inputRef.current && inputRef.current.focus();
    }

    return (<div className={['md-input', props.IconSpanLocation === IconSpanLocation.Right ? 'right' : ''].join(' ')}
        onClick={onGetFocus}>
        <div className='input-container'>
            <div className={['place-holder', value || isFocus ? 'focus' : ''].join(' ')}>
                {props.IsRequiered && <MDIcon IconType={IconType.Circle}></MDIcon>}
                <p>{props.PlaceHolder}</p>
                {value !== '' && <MDButton outline borderLess onClick={() => { setValue('') }}><MDIcon IconType={IconType.Delete} /></MDButton>}
            </div>
            <input ref={inputRef}
                inputMode={getInputMode()}
                className={value || isFocus ? 'focus' : ''}
                value={value} onChange={onChangeText}
                onBlur={() => {
                    if (value === '' && props.IsRequiered) {
                        setError('this field is mandatory')
                    }
                    setIsFocus(false);
                }}
            ></input>
        </div>
        {
            props.Icon && <div className={['icon-span', props.IconSpanLocation === IconSpanLocation.Right ? 'right' : ''].join(' ')}>
                {props.Icon}
            </div>
        }
        {
            error && <MDText light small className='error-message' featured>{error}</MDText>
        }
    </div>)
}

export default MDInput;