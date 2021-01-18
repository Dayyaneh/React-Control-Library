import React from 'react';

export enum IconType {
    Home = 'Home',
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
    Grid = 'Grid',
    Check = 'Check',
    CheckList = 'Check List',
    Input = 'Input',
    RadioButton = 'Radio Button',
    About = 'About',
    Library = 'Library',
    Key = 'Key',
    Div = 'Div',
}

interface iProps {
    IconType: IconType;
}

const MDIcon: React.FunctionComponent<iProps> = (props: iProps) => {
    switch (props.IconType) {
        case IconType.Delete: {
            const Icon = require('../-General/Icon/IconDelete');
            return (<Icon.default />)
        }
        case IconType.FileUpload: {
            const IconFileUpload = require('../-General/Icon/IconFileUpload');
            return (<IconFileUpload.default />)
        }
        case IconType.Circle: {
            const IconCircle = require('../-General/Icon/IconCircle');
            return (<IconCircle.default />)
        }
        case IconType.ArrowUp: {
            const IconArrowUp = require('../-General/Icon/IconArrowUp');
            return (<IconArrowUp.default />)
        }
        case IconType.ArrowDown: {
            const IconArrowDown = require('../-General/Icon/IconArrowDown');
            return (<IconArrowDown.default />)
        }
        case IconType.AlignCenter: {
            const IconAlignCenter = require('../-General/Icon/IconAlignCenter');
            return (<IconAlignCenter.default />)
        }
        case IconType.AlignLeft: {
            const IconAlignLeft = require('../-General/Icon/IconAlignLeft');
            return (<IconAlignLeft.default />)
        }
        case IconType.AlignRight: {
            const IconAlignRight = require('../-General/Icon/IconAlignRight');
            return (<IconAlignRight.default />)
        }
        case IconType.Asterisk: {
            const IconAsterisk = require('../-General/Icon/IconAsterisk');
            return (<IconAsterisk.default />)
        }
        case IconType.Bold: {
            const IconBold = require('../-General/Icon/IconBold');
            return (<IconBold.default />)
        }
        case IconType.BulletList: {
            const IconBulletList = require('../-General/Icon/IconBulletList');
            return (<IconBulletList.default />)
        }
        case IconType.CenterJustify: {
            const IconCenterJustify = require('../-General/Icon/IconCenterJustify');
            return (<IconCenterJustify.default />)
        }
        case IconType.Copy: {
            const IconCopy = require('../-General/Icon/IconCopy');
            return (<IconCopy.default />)
        }
        case IconType.Cut: {
            const IconCut = require('../-General/Icon/IconCut');
            return (<IconCut.default />)
        }
        case IconType.Italic: {
            const IconItalic = require('../-General/Icon/IconItalic');
            return (<IconItalic.default />)
        }
        case IconType.LeftIndent: {
            const IconLeftIndent = require('../-General/Icon/IconLeftIndent');
            return (<IconLeftIndent.default />)
        }
        case IconType.LeftJustify: {
            const IconLeftJustify = require('../-General/Icon/IconLeftJustify');
            return (<IconLeftJustify.default />)
        }
        case IconType.Paste: {
            const IconPaste = require('../-General/Icon/IconPaste');
            return (<IconPaste.default />)
        }
        case IconType.Redo: {
            const IconRedo = require('../-General/Icon/IconRedo');
            return (<IconRedo.default />)
        }
        case IconType.RightIndent: {
            const IconRightIndent  = require('../-General/Icon/IconRightIndent');
            return (<IconRightIndent.default />)
        }
        case IconType.RightJustify: {
            const IconRightJustify = require('../-General/Icon/IconRightJustify');
            return (<IconRightJustify.default />)
        }
        case IconType.Underline: {
            const IconUnderline = require('../-General/Icon/IconUnderline');
            return (<IconUnderline.default />)
        }
        case IconType.Undo: {
            const IconUndo = require('../-General/Icon/IconUndo');
            return (<IconUndo.default />)
        }
        case IconType.Text: {
            const IconText = require('../-General/Icon/IconText');
            return (<IconText.default />)
        }
        case IconType.Design: {
            const IconDesign = require('../-General/Icon/IconDesign');
            return (<IconDesign.default />)
        }
        case IconType.Grid: {
            const IconGrid = require('../-General/Icon/IconGrid');
            return (<IconGrid.default />)
        }
        case IconType.Check: {
            const IconCheck = require('../-General/Icon/IconCheck');
            return (<IconCheck.default />)
        }
        case IconType.Input: {
            const IconInput = require('../-General/Icon/IconInput');
            return (<IconInput.default />)
        }
        case IconType.RadioButton: {
            const IconRadioButton = require('../-General/Icon/IconRadioButton');
            return (<IconRadioButton.default />)
        }
        case IconType.CheckList: {
            const IconCheckList = require('../-General/Icon/IconCheckList');
            return (<IconCheckList.default />)
        }
        case IconType.Home: {
            const Icon = require('../-General/Icon/IconHome');
            return (<Icon.default />)
        }
        case IconType.About: {
            const Icon = require('../-General/Icon/IconAbout');
            return (<Icon.default />)
        }
        case IconType.Library: {
            const Icon = require('../-General/Icon/IconLibrary');
            return (<Icon.default />)
        }
        case IconType.Key: {
            const Icon = require('../-General/Icon/IconKey');
            return (<Icon.default />)
        }
        case IconType.Div: {
            const Icon = require('../-General/Icon/IconDiv');
            return (<Icon.default />)
        }
        default: return (<></>)
    }
}

export default MDIcon;