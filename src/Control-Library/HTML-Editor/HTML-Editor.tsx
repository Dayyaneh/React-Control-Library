import React from 'react';
import './HTML-Editor.scss';

interface iProps {

}

interface iState {

}

class MDHTMLEditor extends React.Component<iProps, iState> {
    constructor(props: iProps){
        super(props);
    }

    render() {
        return(<div className='md-html-editor'></div>)
    }
}

export default MDHTMLEditor;