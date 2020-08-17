import React, {Fragment} from 'react';
import '@styles/content-item.css';

//временная мапа для товаров
import itemsMap from '@/maps/itemPage/itemsMap';
let items = itemsMap;

const ItemTitle = ({title}) => {
    return(
        <h1 className="titleDefault">{title}</h1>
    )
};

const ItemImg = ({imgPath}) => {
    return(
        <div className="itemContainer_imgContainer flex justify-content_center align-items_center box-sizing">
            <img src={imgPath} className="itemImg" />
        </div>
    )
};

const ItemTable = ({item}) => {
    return(
        <div className="itemContainer_tableContainer">
            <table className="itemTable">
                <thead>
                    <tr>
                        {Object.values(item.characteristics).map((character, headNum) => (
                            <th className="textFontDefault border_1px" key={headNum+1} dangerouslySetInnerHTML={{ __html: character }}></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {item.list.map((itemRow, rowNum) => (
                        <tr key={rowNum+1}>
                            {Object.values(itemRow).map((option, cellNum) => (
                                <td className="textFontDefault border_1px" key={rowNum*10+cellNum+1}>
                                    {option}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {
                item.notes && item.notes.map((note, noteNum) => (
                    <p className="textFontDefault itemNote" key={noteNum+1}>{note}</p>
                ))
            }
            
        </div>
    )
};

export const Items = () => {
    return(
        <div className="content__container">
            <Fragment>
                <ItemTitle title = {items[0].type}/>
                {items.map((item, i) => (
                    <div className="itemContainer flex" key={i+1}>
                        <ItemImg imgPath = {item.imgPath}/>
                        <ItemTable item = {item}/>
                    </div>
                ))}
            </Fragment>
        </div>
    )
}