import React, { useRef, useState } from 'react';

import MDButton from '../Button/Button';
import MDContainer, { Direction } from '../Container/Container';
import MDDropDownInput from '../DropDownInput/DropDownInput';
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
        document.execCommand('copy');
        editorRef.current && editorRef.current.focus();
    }

    const OnCut = () => {
        document.execCommand('cut');
        editorRef.current && editorRef.current.focus();
    }

    const OnPaste = () => {
        editorRef.current && editorRef.current.focus();
        document.execCommand('paste');

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
        // const selecteion = document.getSelection();
        // //console.log("selection: ", selecteion);
        // const tags = ['B', 'UL', 'U', 'I'];
        // if (selecteion?.rangeCount) {
        //     for (let i = 0; i < selecteion.rangeCount; i++) {
        //         const startElement = selecteion.getRangeAt(i).startContainer;
        //         const endElement = selecteion.getRangeAt(i).endContainer;
        //         //console.log(selecteion.getRangeAt(i));
        //         if (startElement.isEqualNode(endElement)){

        //         }
        //     }
        // }

        const selection = document.getSelection();
        if (!selection) {
            debugger;
            return;
        }

        //const num_ranges = selection.rangeCount;

        // Will hold parent tags of a range
        let range_parent_tags;

        // Will hold parent tags of all ranges
        let all_ranges_parent_tags = [];

        // Current menu tags
        const menu_tags = ['B', 'UL', 'U', 'I'];

        // Will hold common tags from all ranges
        let menu_tags_common = [];

        // For all ranges
        for (let i = 0; i < selection.rangeCount; i++) {
            // Start container of range
            const start_element = selection.getRangeAt(i).startContainer;

            // End container of range
            const end_element = selection.getRangeAt(i).endContainer;

            // Will hold parent tags of a range
            const range_parent_tags = [];

            // If starting node and final node are the same
            if (start_element.isEqualNode(end_element)) {
                // If the current element lies inside the editor container then don't consider the range
                // This happens when editor container is clicked
                if (editorRef.current?.isEqualNode(start_element)) {
                    all_ranges_parent_tags.push([]);
                    continue;
                }

                let cur_element = start_element.parentNode;
                if (cur_element) {
                    // Get all parent tags till editor container
                    while (!editorRef.current?.isEqualNode(cur_element)) {
                        range_parent_tags.push(cur_element?.nodeName);
                        if (cur_element?.parentNode)
                            cur_element = cur_element?.parentNode;
                    }
                }
            }

            // Push tags of current range
            all_ranges_parent_tags.push(range_parent_tags);
        }

        // Find common parent tags for all ranges
        for (let i = 0; i < menu_tags.length; i++) {
            let common_tag = 1;
            for (let j = 0; j < all_ranges_parent_tags.length; j++) {
                if (all_ranges_parent_tags[j].indexOf(menu_tags[i]) === -1) {
                    common_tag = -1;
                    break;
                }
            }

            if (common_tag === 1)
                menu_tags_common.push(menu_tags[i]);
        }

        setIsBold(menu_tags_common.indexOf('B') !== -1);
        setIsUnderline(menu_tags_common.indexOf('U') !== -1);
        setIsItalic(menu_tags_common.indexOf('I') !== -1);

        // if(menu_tags_common.indexOf('UL') !== -1)
        //     this.#controls.btnList.classList.add("md-html-editor-menu-button-selected");
        // else
        //     this.#controls.btnList.classList.remove("md-html-editor-menu-button-selected");

    }

    return (<div className='md-html-editor'>
        <div className='menu-bar'>
            <div className='font-container'>
                <MDDropDownInput PlaceHolder='Font Name'
                    List={[{
                        index: 0,
                        value: 'sans-serif',
                        caption: 'Sans Serif'
                    }, {
                        index: 1,
                        value: 'times new roman',
                        caption: 'Times new roman',
                    }, {
                        index: 2,
                        value: 'courier new',
                        caption: 'Courier New',
                    }, {
                        index: 3,
                        value: 'arial black',
                        caption: 'Arial Black',
                    }, {
                        index: 4,
                        value: 'arial narrow',
                        caption: 'Arial Narrow',
                    }, {
                        index: 5,
                        value: 'comic sans ms',
                        caption: 'Comic Sans MS',
                    }, {
                        index: 6,
                        value: 'georgia',
                        caption: 'Georgia',
                    }, {
                        index: 7,
                        value: 'tahoma',
                        caption: 'Tahoma',
                    }, {
                        index: 9,
                        value: 'trebuchet ms',
                        caption: 'Trebuchet MS',
                    }, {
                        index: 10,
                        value: 'verdana',
                        caption: 'Verdana',
                    },]} ></MDDropDownInput>
                <MDDropDownInput PlaceHolder='Font Size' List={[
                    {
                        index: 0,
                        value: '1',
                        caption: 'Very small',
                    }, {
                        index: 1,
                        value: '2',
                        caption: 'Small',
                    }, {
                        index: 2,
                        value: '3',
                        caption: 'Less Than Normal'
                    }, {
                        index: 3,
                        value: '4',
                        caption: 'Normal'
                    },{
                        index: 4,
                        value: '5',
                        caption: 'Large'
                    }, {
                        index: 3,
                        value: '6',
                        caption: 'Very Large'
                    }, {
                        index: 3,
                        value: '7',
                        caption: 'Huge'
                    },]}></MDDropDownInput>
            </div>
            <div className='menu-container'>
                <MDButton borderLess onClick={OnCopy}><MDIcon IconType={IconType.Copy}></MDIcon></MDButton>
                <MDButton borderLess onClick={OnCut}><MDIcon IconType={IconType.Cut}></MDIcon></MDButton>
                <MDButton borderLess onClick={OnPaste}><MDIcon IconType={IconType.Paste}></MDIcon></MDButton>

                <MDButton borderLess onClick={OnUndo}><MDIcon IconType={IconType.Undo}></MDIcon></MDButton>
                <MDButton borderLess onClick={OnRedo}><MDIcon IconType={IconType.Redo}></MDIcon></MDButton>

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
            </div>
        </div>
        <div ref={editorRef} className='editor' role="textbox" contentEditable="true" spellCheck="false"
            onKeyUp={OnTextAreaKeyUp} onClick={OnTextAreaKeyUp}></div>
        <div className='footer'></div>
    </div>)
}

export default MDHTMLEditor;