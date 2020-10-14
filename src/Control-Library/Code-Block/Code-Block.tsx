import React from 'react';
import './Code-Block.scss';

interface iComponentProps {
    children?: React.ReactText;
    code: string;
}

const MDCodeBlock: React.FunctionComponent<iComponentProps> = (props: iComponentProps) => {
    return (<pre className='md-code-block'><code>{props.code}</code></pre>);
}

export default MDCodeBlock;