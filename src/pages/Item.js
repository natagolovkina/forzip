import React, {Fragment} from 'react';
import '@styles/content-item.css';

const ItemTypeTitle = ({title}) => {
    return(
        <h1 className="titleDefault">{title}</h1>
    )
};

const ItemSectionTitle = ({title}) => {
    return(
        <h2 className="itemSectionTitle">{title}</h2>
    )
};

const ItemImg = ({img}) => {
    return(
        <figure className="itemContainer_imgContainer flex flex-direction_column justify-content_center align-items_center box-sizing">
            <img src={img.path} className="itemImg" />
            <figcaption className="textFontDefault">{img.figcaption}</figcaption>
        </figure>
    )
};

let ifArray = function (characteristics) {
    let first = [];
    let second = [];
    Object.values(characteristics).map((character) => {
        let obj = {width:1, height:1, inner:''};
        if (Array.isArray(character)) {
            obj.width = 2;
            let rest = [];
            [obj.inner, ...rest] = character;
            second = [...second, ...rest];
        } else {
            obj.height = 2;
            obj.inner = character;
        };
        first.push(obj);
    });
    return [first, second]
};

const TableHeadRow = ({characteristics}) => {
    if (Object.values(characteristics).some(Array.isArray)) {
        let [firstRow, secondRow] = ifArray(characteristics);
        return (
            <thead>
                <tr>
                    {firstRow.map((character, headNum) => (
                        <th className="textFontDefault border_1px" rowSpan={character.height} colSpan={character.width} key={headNum} dangerouslySetInnerHTML={{ __html: character.inner }}></th>
                    ))}
                </tr>
                <tr>
                    {secondRow.map((character, headNum) => (
                        <th className="textFontDefault border_1px" key={headNum} dangerouslySetInnerHTML={{ __html: character }}></th>
                    ))}
                </tr>
            </thead>
        )
    } else {
        return(
            <thead>
                <tr>
                    {Object.values(characteristics).map((character, headNum) => (
                        <th className="textFontDefault border_1px" key={headNum} dangerouslySetInnerHTML={{ __html: character }}></th>
                    ))}
                </tr>
            </thead>
        )
    }
};

const ItemTable = ({itemsVar}) => {    
    return(
        <div className="itemContainer_tableContainer">
            <table className="itemTable">
                <TableHeadRow characteristics = {itemsVar.characteristics}/>
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
    console.log(item);
    return(
        <div className="content__container">
            <ItemTypeTitle title = {item[0].type} />
            {item.map((itemsVar, i) => (
                <Fragment>
                    <ItemSectionTitle title = {itemsVar.sectionTitle} key={i}/>
                    <div className="itemContainer flex" key={i*100}>
                        <ItemImg img = {itemsVar.img} />
                        <ItemTable itemsVar = {itemsVar} />
                    </div>
                </Fragment>
            ))}
        </div>
    )
}