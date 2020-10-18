import React, { useRef, useState } from 'react';

import MDButton from '../Button/Button';
import MDContainer, { Direction } from '../Container/Container';
import MDIcon, { IconType } from '../Icon/Icon';

import './HTML-Editor.scss';

interface iProps {

}

const MDHTMLEditor: React.FunctionComponent<iProps> = () => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [isBold, setIsBold] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isItalic, setIsItalic] = useState(false);

    const OnCopy = () => {
        document.execCommand("copy");
        editorRef.current && editorRef.current.focus();
    }

    const OnCut = () => {
        document.execCommand('cut');
        editorRef.current && editorRef.current.focus();
    }

    const OnPaste = () => {
        document.execCommand('paste');
        editorRef.current && editorRef.current.focus();
    }

    const OnUndo = () => {
        document.execCommand('undo');
        editorRef.current && editorRef.current.focus();
    }

    const OnRedo = () => {
        document.execCommand('redo');
        editorRef.current && editorRef.current.focus();
    }

    const OnBold = () => {
        document.execCommand('bold');
        setIsBold(!isBold);
        editorRef.current && editorRef.current.focus();
    }

    const OnUnderline = () => {
        document.execCommand('underline');
        editorRef.current && editorRef.current.focus();
        setIsUnderline(!isUnderline);
    }

    const OnItalic = () => {
        document.execCommand('italic');
        editorRef.current && editorRef.current.focus();
        setIsItalic(!isItalic);
    }

    const OnAlignLeft = () => {
        // document.execCommand('');
        // editorRef.current && editorRef.current.focus();
    }

    const OnAlignCenter = () => {
        // document.execCommand('');
        // editorRef.current && editorRef.current.focus();
    }

    const OnAlignRight = () => {
        // document.execCommand('');
        // editorRef.current && editorRef.current.focus();
    }

    const OnLeftJustify = () => {
        document.execCommand('justifyLeft');
        editorRef.current && editorRef.current.focus();
    }

    const OnCenterJustify = () => {
        document.execCommand('justifyCenter');
        editorRef.current && editorRef.current.focus();
    }

    const OnRightJustify = () => {
        document.execCommand('justifyRight');
        editorRef.current && editorRef.current.focus();
    }

    const OnLeftIndent = () => {
        document.execCommand('indent');
        editorRef.current && editorRef.current.focus();
    }

    const OnRightIndent = () => {
        document.execCommand('outdent');
        editorRef.current && editorRef.current.focus();
    }

    const OnTextAreaKeyUp = () => {
        const selecteion = document.getSelection();
        //console.log("selection: ", selecteion);
        const tags = ['B', 'UL', 'U', 'I'];
        if (selecteion?.rangeCount) {
            for (let i = 0; i < selecteion.rangeCount; i++) {
                const startElement = selecteion.getRangeAt(i).startContainer;
                const endElement = selecteion.getRangeAt(i).endContainer;
                //console.log(selecteion.getRangeAt(i));
                if (startElement.isEqualNode(endElement)){

                }
            }
        }

    }

    return (<div className='md-html-editor'>
        <MDContainer className='menu-bar' direction={Direction.Horizontal}>
            <MDButton borderLess outline onClick={OnCopy}><MDIcon IconType={IconType.Copy}></MDIcon></MDButton>
            <MDButton borderLess outline onClick={OnCut}><MDIcon IconType={IconType.Cut}></MDIcon></MDButton>
            <MDButton borderLess outline onClick={OnPaste}><MDIcon IconType={IconType.Paste}></MDIcon></MDButton>

            <MDButton borderLess outline onClick={OnUndo}><MDIcon IconType={IconType.Undo}></MDIcon></MDButton>
            <MDButton borderLess outline onClick={OnRedo}><MDIcon IconType={IconType.Redo}></MDIcon></MDButton>

            <MDButton borderLess selected={isBold} onClick={OnBold}><MDIcon IconType={IconType.Bold}></MDIcon></MDButton>
            <MDButton borderLess selected={isUnderline} onClick={OnUnderline}><MDIcon IconType={IconType.Underline}></MDIcon></MDButton>
            <MDButton borderLess selected={isItalic} onClick={OnItalic}><MDIcon IconType={IconType.Italic}></MDIcon></MDButton>

            <MDButton borderLess onClick={OnAlignLeft}><MDIcon IconType={IconType.AlignLeft}></MDIcon></MDButton>
            <MDButton borderLess onClick={OnAlignCenter}><MDIcon IconType={IconType.AlignCenter}></MDIcon></MDButton>
            <MDButton borderLess onClick={OnAlignRight}><MDIcon IconType={IconType.AlignRight}></MDIcon></MDButton>

            <MDButton borderLess onClick={OnLeftJustify}><MDIcon IconType={IconType.LeftJustify}></MDIcon></MDButton>
            <MDButton borderLess onClick={OnCenterJustify}><MDIcon IconType={IconType.CenterJustify}></MDIcon></MDButton>
            <MDButton borderLess onClick={OnRightJustify}><MDIcon IconType={IconType.RightJustify}></MDIcon></MDButton>

            <MDButton borderLess onClick={OnLeftIndent}><MDIcon IconType={IconType.LeftIndent}></MDIcon></MDButton>
            <MDButton borderLess onClick={OnRightIndent}><MDIcon IconType={IconType.RightIndent}></MDIcon></MDButton>

        </MDContainer>
        <div ref={editorRef} className='editor' role="textbox" contentEditable="true" spellCheck="false"
            onKeyUp={OnTextAreaKeyUp}></div>
        <div className='footer'></div>
    </div>)
}

export default MDHTMLEditor;