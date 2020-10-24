import React from 'react';
import { Type } from 'typescript';

import './ClientSideGrid.scss';

export interface MDDataModel {
    fieldName: string;
    fieldCaption: string;
}

interface iProps {
    DataModel: MDDataModel[],
    Data?: object[],
    PageSize?: number,
}

const MDClientSideGrid: React.FunctionComponent<iProps> = (props: iProps) => {
    return (<table className='client-side-grid'>
        <thead>
            <tr>
                {
                    props.DataModel.map((field) => {
                        return (<th>{field.fieldCaption}</th>)
                    })
                }
            </tr>
        </thead>
        <tbody>
                {
                    props.Data && props.Data.map((dataRow) => {
                        return <tr>
                            {props.DataModel.map((field) => {
                                if (props.Data && dataRow.hasOwnProperty(field.fieldName)) {
                                    const value = Object.getOwnPropertyDescriptor(dataRow, field.fieldName)?.value;
                                    return (<td>{value}</td>)
                                }
                            })
                            }
                        </tr>
                    })
                }
        </tbody>
    </table>)
}

export default MDClientSideGrid;