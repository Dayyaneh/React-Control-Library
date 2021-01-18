import React, { Suspense } from 'react';
import MDSpinner from '../Spinner/MDSpinner';

interface iProps {
    Page: React.LazyExoticComponent<React.FunctionComponent<{}>>, 
}

const MDPageLoader: React.FunctionComponent<iProps> = (props: iProps) => {
    return (<Suspense fallback={<MDSpinner Width='350px' />}>
        <props.Page />
    </Suspense>);
}

export default MDPageLoader;