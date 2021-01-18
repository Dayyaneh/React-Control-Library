import React, { useState } from 'react';
import MDBox, { Direction, Distribution } from '../Box/Box';
import MDRadioButton from './Radio-Button';

export interface RadioListItem {
    Id?: number;
    Value?: boolean | false,
    Caption: string
}

interface iProps {
    Direction?: Direction,
    List?: RadioListItem[],
    OnChange?(value: boolean, Caption: string, Id?: number): void;
}

const MDRadioButtonList: React.FunctionComponent<iProps> = (props: iProps) => {
    const [ItemList, setItemList] = useState(props.List);

    const ItemChenge = (Checked: boolean, Caption: string, Id?: number) => {
        setItemList(ItemList?.map((item) => {
            if (Id ? item.Id === Id : item.Caption === Caption)
                item.Value = true;
            else item.Value = false;
            return item;
        }));

        props.OnChange && props.OnChange(Checked, Caption, Id); 
    }

    return (<MDBox ContentDirection={props.Direction ? props.Direction : Direction.Horizontal}
        ContentDistribution={Distribution.Equal}>
        { ItemList && ItemList.map((item) => {
            return <MDRadioButton key={item.Id} Caption={item.Caption} Value={item.Value} Id={item.Id} OnChange={ItemChenge} />
        })}
    </MDBox>);
}

export default MDRadioButtonList;