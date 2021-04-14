
import React, { Component } from 'react'
import mdFileModel from '../../-General/DataModels/FileModel';
import IconDelete from '../../-General/Icon/IconDelete';
import IconFileUpload from '../../-General/Icon/IconFileUpload';
import MDBox, { ContentAlignment, Direction } from '../../Box/Box';
import MDButton from '../../Button/Button';
import MDSpinner from '../../Spinner/MDSpinner';
import MDText, { Alignment } from '../../Text/Text';

import './File-Drag-Drop.scss';

export enum Accept {
    Image = "image/*",
    PDF = "application/pdf",
    Word = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    Excel = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    Audio = "audio/*",
    Video = "video/*",
    Text = "text/plain",
    HTML = "text/html",
    All = "*.*",
}

interface iComponentProp {
    placeHolder?: string;
    multiFile?: boolean | false;
    maxFileSize?: number;
    accept?: Accept;
    onFilesChosen?: Function;
}

interface iComponentState {
    dragging: boolean,
    dragCounter: number,
    files: mdFileModel[],
    isLoading: boolean,
    notificationCaption: string;
    notificationValue: string;
}

class MDFileDragDrop extends Component<iComponentProp, iComponentState> {
    /*---------------------------------------------------------------------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------------------------*/
    constructor(prop: iComponentProp) {
        super(prop);
        this.state = {
            files: [],
            dragging: false,
            dragCounter: 0,
            isLoading: false,
            notificationCaption: '',
            notificationValue: '',
        }
    }
    /*---------------------------------------------------------------------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------------------------*/
    onFileLoadEnd(file: any) {
        try {
            this.setState({ isLoading: false });
            const fileBinary = file.target.result;

            if (fileBinary === '') {
                this.setState({
                    notificationCaption: 'Error',
                    notificationValue: 'Your chosen file is not acceptable',
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            notificationCaption: '',
                            notificationValue: '',
                        });
                    }, 3000);
                });
                return false;
            }

            if (this.props.maxFileSize) {
                if (fileBinary.length > (this.props.maxFileSize * 1024)) {
                    this.setState({
                        notificationCaption: 'Error',
                        notificationValue: 'Your chosen file is not fit enough',
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                notificationCaption: '',
                                notificationValue: '',
                            });
                        }, 3000);
                    });
                    return false;
                }
            }

            this.setState({
                files: [...this.state.files, new mdFileModel(file.target.fileName, fileBinary)],
            });

            return true;
        }
        catch (ex) {
            this.setState({
                notificationCaption: 'Error',
                notificationValue: 'Your chosen file is not acceptable',
            }, () => {
                setTimeout(() => {
                    this.setState({
                        notificationCaption: '',
                        notificationValue: '',
                    });
                }, 3000);
            });
        }
    }

    onLoadFile = (files: FileList) => {
        if (files.length === 0)
            return;

        let filteredFileList: File[] = Array.from(files);
        if (this.props.accept) {

            if (this.props.accept === Accept.Image) {
                filteredFileList = filteredFileList.filter(s => s.type.includes("image"));
            }
            if (this.props.accept === Accept.Word) {
                filteredFileList = filteredFileList.filter(s => s.type.includes(Accept.Word));
            }
            if (this.props.accept === Accept.Excel) {
                filteredFileList = filteredFileList.filter(s => s.type.includes(Accept.Excel));
            }
            if (this.props.accept === Accept.PDF) {
                filteredFileList = filteredFileList.filter(s => s.type.includes(Accept.PDF));
            }
            if (this.props.accept === Accept.Video) {
                filteredFileList = filteredFileList.filter(s => s.type.includes('video'));
            }
            if (this.props.accept === Accept.Audio) {
                filteredFileList = filteredFileList.filter(s => s.type.includes('audio'));
            }
            if (this.props.accept === Accept.HTML) {
                filteredFileList = filteredFileList.filter(s => s.type.includes(Accept.HTML));
            }
            if (this.props.accept === Accept.Text) {
                filteredFileList = filteredFileList.filter(s => s.type.includes(Accept.HTML));
            }
        }

        const fileLimitationNumber: number = this.props.multiFile === true ? filteredFileList.length : 1;

        for (let i = 0; i < fileLimitationNumber; i++) {
            this.setState({ isLoading: true });
            const reader = new FileReader();
            Object.defineProperty(reader, 'fileName', { value: filteredFileList[i].name })
            reader.onloadend = this.onFileLoadEnd.bind(this);
            reader.readAsDataURL(filteredFileList[i]);
        }
    }

    onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }

    onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation();
        console.log(e.dataTransfer.files.length);
        this.setState({ dragCounter: this.state.dragCounter + 1 })
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({ dragging: true })
        }
    }

    onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            dragCounter: this.state.dragCounter - 1
        })
        if (this.state.dragCounter === 0) {
            this.setState({ dragging: false });
        }
    }

    onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ dragging: false });
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.onLoadFile(e.dataTransfer.files);
            e.dataTransfer.clearData();
            this.setState({ dragCounter: 0 })
        }
    }

    onDeleteChosenFile = (fileId: string) => {
        const files: mdFileModel[] = [...this.state.files];
        const index = files.findIndex((file: mdFileModel) => file.fileId == fileId);
        files.splice(index, 1);
        this.setState({
            files: files,
        });
    }
    /*---------------------------------------------------------------------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------------------------*/
    renderFile = (file: mdFileModel, index: number) =>
        <MDBox key={index} ClassName='row showing' ContentHorizontalAlign={ContentAlignment.Center} 
            ContentDirection={Direction.Horizontal}>
            <MDButton BorderLess OnClick={() => this.onDeleteChosenFile(file.fileId)}><IconDelete /></MDButton>&nbsp;&nbsp;
            <MDText alignment={Alignment.Left}>{file.fileName}</MDText>
        </MDBox>
    /*---------------------------------------------------------------------------------------------------------------*/
    render = () =>
        <div className={['md-file-drag-drop', this.state.dragging === true && this.state.dragCounter !== 0 ? 'dragging' : ''].join(' ')}
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
            onDragOver={this.onDragOver}
            onDrop={this.onDrop}>
            {
                !this.state.isLoading && this.state.notificationCaption === '' && this.state.notificationValue === '' &&
                <MDBox ClassName='icon-container' ContentHorizontalAlign={ContentAlignment.Center} 
                    ContentVerticalAlign={ContentAlignment.Center}>
                    <MDText large bold>{this.props.placeHolder}</MDText>
                    <IconFileUpload />

                    <MDBox ClassName='file-list' ContentHorizontalAlign={ContentAlignment.Center} 
                        ContentVerticalAlign={ContentAlignment.Center}>
                        {this.state.files.map((file, index) => this.renderFile(file, index))}
                    </MDBox>
                </MDBox>
            }
            {
                this.state.isLoading && <MDSpinner />
            }
            {
                this.state.notificationCaption !== '' && this.state.notificationValue !== '' &&
                <MDBox ClassName="error" ContentVerticalAlign={ContentAlignment.Center} 
                    ContentHorizontalAlign={ContentAlignment.Center} >
                    <MDText large bold featured>{this.state.notificationCaption}</MDText>
                    <MDText large bold featured>{this.state.notificationValue}</MDText>
                </MDBox>
            }
        </div>
    /*---------------------------------------------------------------------------------------------------------------*/
}
export default MDFileDragDrop