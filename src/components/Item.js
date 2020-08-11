import React, {Fragment} from 'react';
import {ItemTitle} from '@components/ItemTitle';
import {ItemImg} from '@components/ItemImg';
import {ItemTable} from '@components/ItemTable';

export const Item = ({items}) => {
    return(
        <Fragment>
            <ItemTitle title = {items[0].type}/>
            {items.map((item, i) => (
                
                <div className="itemContainer flex" key={i+1}>
                    <ItemImg imgPath = {item.imgPath}/>
                    <ItemTable item = {item}/>
                </div>
            ))}
        </Fragment>
    )
}