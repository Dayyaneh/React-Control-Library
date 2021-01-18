import React, { useState } from 'react';
import useMediaQuery, { MobileQuery, TabletQuery } from '../-General/Hooks/MediaQuery';
import MDBox, { Direction, Distribution } from '../Box/Box';
import MDCheckBox from './Check-Box';

export interface CheckListItem {
    Id?: number;
    Value?: boolean | false,
    Caption: string
}

class iGeneralProps {
    Direction?: Direction;
    Distribution?: Distribution;
}

class iPros extends iGeneralProps {
    Tablet?: iGeneralProps;
    Mobile?: iGeneralProps;

    List?: CheckListItem[];
    OnChange?(List: CheckListItem[]): void;
}

const MDCheckBoxList: React.FunctionComponent<iPros> = (props: iPros) => {
    const [ItemList, setItemList] = useState(props.List);

    const isMobile = useMediaQuery(MobileQuery);
    const isTablet = useMediaQuery(TabletQuery);

    const ItemChenge = (Checked: boolean, Caption: string, Id?: number) => {
        setItemList(ItemList?.map((item) => {
            if (Id ? item.Id === Id : item.Caption === Caption)
                item.Value = Checked;
            return item;
        }));

        new Promise(() => {
            props.OnChange && props.OnChange(ItemList ? ItemList : []);
        });
    }

    const getContentDirection = (): Direction => {
        if (isTablet) {
            if (props.Tablet?.Direction)
                return props.Tablet?.Direction;
        }
        else if (isMobile) {
            if (props.Mobile?.Direction)
                return props.Mobile?.Direction;
        }

        return props.Direction ? props.Direction : Direction.Horizontal;
    }

    const getDistribution = (): Distribution  => {
        if (isTablet) {
            if (props.Tablet?.Distribution)
                return props.Tablet?.Distribution;
        }
        else if (isMobile) {
            if (props.Mobile?.Distribution)
                return props.Mobile?.Distribution;
        }

        return props.Distribution ? props.Distribution : Distribution.Equal;
    }

    return (<MDBox ContentDirection={getContentDirection()}
        ContentDistribution={getDistribution()}>
        {
            props.List && props.List.map((Item: CheckListItem, index: number) => {
                return (<MDCheckBox key={index} Caption={Item.Caption} Value={Item.Value} Id={Item.Id} OnChange={ItemChenge} />);
            })
        }
    </MDBox>);
}

export default MDCheckBoxList;