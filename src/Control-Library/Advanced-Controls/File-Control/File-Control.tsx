import React, { useEffect, useRef, useState } from 'react';
import mdFileModel from '../../-General/DataModels/FileModel';
import classNames from '../../-General/General';
import InputActionRoute from '../../../Routes/Input-Action/Input-Action-Route';
import MDIcon, { IconType } from '../../Icon/Icon';
import MDInputAction from '../../Input-Action/Input-Action';
import MDText from '../../Text/Text';

import "./File-Control.scss";

export class Accept {
    static Image: string = "image/*";
    static PDF: string = "application/pdf";
    static Word: string = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    static Excel: string = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    static Audio: string = "audio/*";
    static Video: string = "video/*";
    static Text: string = "text/plain";
    static HTML: string = "text/html";
    static All: string = "*.*";

    static toString = (value?: Accept | null): string => {
        if (value === Accept.Image)
            return Accept.Image;
        else if (value === Accept.PDF)
            return Accept.PDF;
        else if (value === Accept.Word)
            return Accept.Word;
        else if (value === Accept.Excel)
            return Accept.Excel;
        else if (value === Accept.Audio)
            return Accept.Audio;
        else if (value === Accept.Video)
            return Accept.Video;
        else if (value === Accept.Text)
            return Accept.Text;
        else if (value === Accept.HTML)
            return Accept.HTML;

        return Accept.All;
    }
}

export enum AcctionButtonLocation {
    Left = 'left',
    Right = 'right',
}

interface iProps {
    PlaceHolder?: string;
    IsRequiered?: boolean | false;
    MaxFileSize?: number | null | undefined;
    Accept?: Accept | null | undefined;
    IsMultiple?: boolean | undefined;
    DefaultMargin?: boolean | false;
    AcctionButtonLocation?: AcctionButtonLocation;
}

const MDFileControl: React.FunctionComponent<iProps> = (props: iProps) => {
    const [inputValue, setInputValue] = useState('');
    const fileElementRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [files, setFiles] = useState<mdFileModel[]>([]);

    useEffect(() => {
        if (props.IsMultiple === true) {
            if (files.length > 0) {
                setInputValue(files.length > 0 ? files.length + ' files are selected' : '');
            }
        }
        else {
            if (files.length > 0) {
                setInputValue(files[0].fileName ? files[0].fileName : '');
            }
        }
    }, [files])

    const onInputAction = () => {
        if (fileElementRef.current) {
            fileElementRef.current.click()
        }
    }

    const onFileLoadEnd = (file: any) => {
        try {
            const fileBinary = file.target.result;

            if (fileBinary === "") {
                setError('Chosen file(s) are not acceptable');
                return false;
            }

            if (props.MaxFileSize) {
                if (fileBinary.length > (props.MaxFileSize * 1024)) {
                    setError('your chosen file is not fit enough');
                    return false;
                }
            }

            if (props.IsMultiple) {
                setFiles(files => [...files, new mdFileModel(file.target.fileName, fileBinary)]);
            }
            else {
                setFiles([new mdFileModel(file.target.fileName, fileBinary)]);
            }

            setError('');

            return true;
        }
        catch (ex) {
            setError('your chosen file is not acceptable');
        }
    }

    const OnChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target.files) {
                if (e.target.files.length < 1) {
                    return false;
                }

                for (let i = 0; i < e.target.files.length; i++) {
                    const reader = new FileReader();
                    Object.defineProperty(reader, 'fileName', { value: e.target.files[i].name })
                    reader.onloadend = onFileLoadEnd;
                    reader.readAsDataURL(e.target.files[i]);
                }
            }
        } catch (ex) {
            return false;
        }
    }

    const OnGetFocus = () => {
    }

    const OnLostFocus = () => {
    }

    const renderFilePreview = () => {
        if (props.IsMultiple) {
            return (<div className='multiple-file'>
                {files.map((afile: mdFileModel, index) => {
                    if (index > 3)
                        return;

                    return (<img key={'img' + index} style={{width: `calc(100% - ${index * 2} px)`, height: `calc(100% - ${index * 2} px)`}}  src={afile.fileBinary?.toString()} />)
                })}
            </div>);
        }
        else {
            if (files.length > 0)
                return (<div className='afile'>
                    <img src={files[0].fileBinary?.toString()} />
                </div>);
        }
    }

    const inputOption = {
        multiple: props.IsMultiple ? true : false,
        accept: Accept.toString(props.Accept),
    }

    return (<div className='md-file-control'>
        <div className='file-input'>

            <div onClick={OnGetFocus}
                className={classNames(['md-input-action',
                    props.DefaultMargin ? 'default-margin' : '',
                    props.AcctionButtonLocation === AcctionButtonLocation.Right ? 'right' : ''])}>

                <div className={classNames(['file-preview-container',
                    inputValue ? 'showing' : 'hiding',
                    props.AcctionButtonLocation === AcctionButtonLocation.Right ? 'right' : ''])}>
                    {renderFilePreview()}
                </div>

                <div className='input-container'>
                    <div className={['place-holder', inputValue || isFocus ? 'focus' : ''].join(' ')}>
                        {props.IsRequiered && <MDIcon IconType={IconType.Circle}></MDIcon>}
                        <p>{props.PlaceHolder}</p>
                        {inputValue !== '' && <button onClick={() => { setInputValue('') }}>
                            <MDIcon IconType={IconType.Delete} />
                        </button>}
                    </div>
                    <input
                        //ref={inputRef}
                        type='text'
                        inputMode='text'
                        disabled
                        className={inputValue || isFocus ? 'focus' : ''}
                        value={inputValue}
                        onBlur={OnLostFocus} />
                </div>

                <div className={classNames(['button-container',
                    props.AcctionButtonLocation === AcctionButtonLocation.Right ? 'right' : ''])}>
                    <button onClick={onInputAction}>
                        <MDIcon IconType={IconType.FileUpload} />
                    </button>
                </div>
                {
                    <MDText light small className='error-message' featured>{error}</MDText>
                }
            </div>

            <input ref={fileElementRef} type='file' {...inputOption} onChange={OnChangeFile}></input>
        </div>
    </div>);
}

export default MDFileControl;