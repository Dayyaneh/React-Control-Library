import React, { useRef, useState } from 'react';
import MDIcon, { IconType } from '../Icon/Icon';
import MDText from '../Text/Text';

import './DropDownInput.scss';

export interface MDDropDownItemModel {
    index: number,
    value: string,
}

export interface iProps {
    IsRequired?: boolean | false;
    PlaceHolder?: string;
    Searchable?: boolean | false;
    List?: MDDropDownItemModel[];
    Selected?: MDDropDownItemModel;
    OnSelect?(selected: MDDropDownItemModel): void;
}

const MDDropDownInput: React.FunctionComponent<iProps> = (props: iProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [inputValue, setInputValue] = useState(props.Selected ? props.Selected.value : '');
    const [list, setList] = useState(props.List);

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
        setList(props.List?.filter(item => item.value.toLowerCase().includes(e.currentTarget.value.toLowerCase())));
    }

    const OnItemSelect = (selected: MDDropDownItemModel) => {
        setInputValue(selected.value);
        props.OnSelect && props.OnSelect(selected);
    }

    const OnControlBlur = () => {
        if (props.List && props.List.findIndex(item => item.value === inputValue) < 0){
            setInputValue('');

            setTimeout(() => {
                setList(props.List);
            }, 300);            
        }

        if (inputValue === '' && props.IsRequired) {
            //should show error
        }

        setTimeout(() => {
            setIsFocus(false);
            inputRef.current && inputRef.current.blur();
        }, 200);
    }

    return (<div className='md-drop-down-input' onClick={() => {
        setIsFocus(true);
        inputRef.current && inputRef.current.focus();
    }}>
        <div className='input-container'>
            <div className={['place-holder-container', inputValue || isFocus ? 'focus' : ''].join(' ')}>
                {props.IsRequired && <MDIcon IconType={IconType.Circle}></MDIcon>}
                <MDText light>{props.PlaceHolder}</MDText>
            </div>
            <input ref={inputRef} readOnly={!props.Searchable} 
                value={inputValue} 
                onChange={onChangeText} 
                onBlur={OnControlBlur}></input>
            <div className='icon-span'>
                <MDIcon IconType={IconType.ArrowDown} />
            </div>
        </div>
        <div className={['drop-down-container', isFocus ? 'open' : 'close'].join(' ')}>
            {list && list.map((item: MDDropDownItemModel) => {
                return (<div className='drop-down-item' onClick={() => { OnItemSelect(item) }}>{item.value}</div>)
            })}
            {!list || list.length === 0 && <div className='drop-down-item no-item'>No match items</div>}
        </div>
    </div>)
}

export default MDDropDownInput;