import React from 'react';

import './Bullet-List.scss';

export interface listItem {
    caption: string;
    value: string;
}

interface iComponentProps {
    children?: React.ReactElement[];
}

const MDBulletList: React.FunctionComponent<iComponentProps> = (props: iComponentProps) => {
    return(
        <div className='md-bullet-list'>
            {
                props.children && props.children.map((element: React.ReactElement, index: number)=> {
                    if (element.type.valueOf().hasOwnProperty('name') && 
                        Object.getOwnPropertyDescriptor(element.type, 'name')?.value === 'MDBulletListItem') {
                        return element;
                    }
                })
            }
        </div>
    );
}

export default MDBulletList;