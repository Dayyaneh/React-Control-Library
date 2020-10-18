import React from 'react';
import IconAlignCenter from '../-General/Icon/IconAlignCenter';
import IconAlignLeft from '../-General/Icon/IconAlignLeft';
import IconAlignRight from '../-General/Icon/IconAlignRight';

import IconArrowDown from '../-General/Icon/IconArrowDown';
import IconArrowUp from '../-General/Icon/IconArrowUp';
import IconAsterisk from '../-General/Icon/IconAsterisk';
import IconBold from '../-General/Icon/IconBold';
import IconBulletList from '../-General/Icon/IconBulletList';
import IconCenterJustify from '../-General/Icon/IconCenterJustify';
import IconCircle from '../-General/Icon/IconCircle';
import IconCopy from '../-General/Icon/IconCopy';
import IconCut from '../-General/Icon/IconCut';
import IconDelete from '../-General/Icon/IconDelete';
import IconDesign from '../-General/Icon/IconDesign';
import IconFileUpload from '../-General/Icon/IconFileUpload';
import IconItalic from '../-General/Icon/IconItalic';
import IconLeftIndent from '../-General/Icon/IconLeftIndent';
import IconLeftJustify from '../-General/Icon/IconLeftJustify';
import IconPaste from '../-General/Icon/IconPaste';
import IconRedo from '../-General/Icon/IconRedo';
import IconRightIndent from '../-General/Icon/IconRightIndent';
import IconRightJustify from '../-General/Icon/IconRightJustify';
import IconText from '../-General/Icon/IconText';
import IconUnderline from '../-General/Icon/IconUnderline';
import IconUndo from '../-General/Icon/IconUndo';

export enum IconType {
    Delete = 'Delete',
    FileUpload = 'File Upload',
    Circle = 'Circle',
    ArrowUp = 'Arrow Up',
    ArrowDown = 'Arrow Down',
    AlignCenter = 'Align Center',
    AlignLeft = 'Align Left',
    AlignRight = 'Align Right',
    Asterisk = 'Asterisk',
    Bold = 'Bold',
    BulletList = 'Bullet List',
    CenterJustify = 'Center Justify',
    Copy = 'Copy',
    Cut = 'Cut',
    Italic = 'Italic',
    LeftIndent = 'Left Indent',
    LeftJustify = 'Left Justify',
    Paste = 'Paste',
    Redo = 'Redo',
    RightIndent = 'Right Indent',
    RightJustify = 'Right Justify',
    Underline = 'Underline',
    Undo = 'Undo',
    Text = 'Text',
    Design = 'Design',
}

interface iProps {
    IconType: IconType;
}

const MDIcon: React.FunctionComponent<iProps> = (props: iProps) => {
    switch (props.IconType) {
        case IconType.Delete: return (<IconDelete />)
        case IconType.FileUpload: return (<IconFileUpload />)
        case IconType.Circle: return (<IconCircle />)
        case IconType.ArrowUp: return (<IconArrowUp />)
        case IconType.ArrowDown: return (<IconArrowDown />)
        case IconType.AlignCenter: return (<IconAlignCenter />)
        case IconType.AlignLeft: return (<IconAlignLeft />)
        case IconType.AlignRight: return (<IconAlignRight />)
        case IconType.Asterisk: return (<IconAsterisk />)
        case IconType.Bold: return (<IconBold />)
        case IconType.BulletList: return (<IconBulletList />)
        case IconType.CenterJustify: return (<IconCenterJustify />)
        case IconType.Copy: return (<IconCopy />)
        case IconType.Cut: return (<IconCut />)
        case IconType.Italic: return (<IconItalic />)
        case IconType.LeftIndent: return (<IconLeftIndent />)
        case IconType.LeftJustify: return (<IconLeftJustify />)
        case IconType.Paste: return (<IconPaste />)
        case IconType.Redo: return (<IconRedo />)
        case IconType.RightIndent: return (<IconRightIndent />)
        case IconType.RightJustify: return (<IconRightJustify />)
        case IconType.Underline: return (<IconUnderline />)
        case IconType.Undo: return (<IconUndo />)
        case IconType.Text: return (<IconText />)
        case IconType.Design: return (<IconDesign />)
        default: return (<></>)
    }
}

export default MDIcon;