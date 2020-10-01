import React from 'react';

interface ComponentProps {
    id?: number,
}

class Search extends React.Component<ComponentProps> {
    constructor(prop: ComponentProps) {
        super(prop);
    }

    render() {
        return (<h1>Search ----- id: {this.props.id}</h1>)
    }
}

export default Search;