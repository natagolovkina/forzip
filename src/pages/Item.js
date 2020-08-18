import React, {Fragment} from 'react';
import '@styles/content-item.css';

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

const ItemTable = ({itemsVar}) => {
    return(
        <div className="itemContainer_tableContainer">
            <table className="itemTable">
                <thead>
                    <tr>
                        {Object.values(itemsVar.characteristics).map((character, headNum) => (
                            <th className="textFontDefault border_1px" key={headNum} dangerouslySetInnerHTML={{ __html: character }}></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {itemsVar.list.map((itemRow, rowNum) => (
                        <tr key={rowNum}>
                            {Object.values(itemRow).map((option, cellNum) => (
                                <td className="textFontDefault border_1px" key={cellNum}>
                                    {option}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {
                itemsVar.notes && itemsVar.notes.map((note, noteNum) => (
                    <p className="textFontDefault itemNote" key={noteNum}>{note}</p>
                ))
            }
            
        </div>
    )
};

export const Item = ({item}) => {
    return(
        <div className="content__container">
            <Fragment>
                <ItemTitle title = {item.type}/>
                {item.map((itemsVar, i) => (
                    <div className="itemContainer flex" key={i}>
                        <ItemImg imgPath = {itemsVar.imgPath}/>
                        <ItemTable itemsVar = {itemsVar}/>
                    </div>
                ))}
            </Fragment>
        </div>
    )
}