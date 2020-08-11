import React, {Fragment} from 'react';
import {Item} from '@components/Item';
import '@styles/content-item.css';

import itemsMap from '@/maps/itemPage/itemsMap';
console.log(itemsMap);

export const Items = () => {
    return(
        <Fragment>
            <div className="content__container">
                <Item items = {itemsMap}/>
            </div>
        </Fragment>
    )
}