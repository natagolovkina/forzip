import React, {Fragment} from 'react';

/*
const ItemNote = (notes) => {
    return (
        <Fragment>
            {notes.map((note, noteNum) => (
                <p className="textFontDefault itemNote" key={noteNum}>{note}</p>
            ))}
        </Fragment>
    )
}
*/

export const Item = ({items}) => {
    return(
        <Fragment>
            <h1 className="titleDefault">{items[0].type}</h1>

            {items.map((item, i) => (
                
                <div className="itemContainer flex" key={i+1}>
                    <div className="itemContainer_imgContainer flex justify-content_center align-items_center box-sizing">
                        <img src={item.imgPath} className="itemImg" />
                    </div>
                    <div className="itemContainer_tableContainer">
                        <table className="itemTable">
                            <thead>
                                <tr>
                                    {Object.values(item.characteristics).map((character, headNum) => (
                                        <th className="textFontDefault border_1px" key={i*10+headNum}>{character}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {item.list.map((itemRow, rowNum) => (
                                    <tr key={i*100+rowNum}>
                                        {Object.values(itemRow).map((option, cellNum) => (
                                            <td className="textFontDefault border_1px" key = {(i*100+rowNum)*10+cellNum}>
                                                {option}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {(() => {
                            if (item.notes) {
                                //<ItemNote notes = {item.notes}/>
                                console.log(item.name, ': ',item.notes)
                                {item.notes.map((note, noteNum) => {
                                    console.log(note)
                                    return (
                                        <p className="textFontDefault itemNote" key={i*10000+noteNum}>
                                            {note}
                                        </p>
                                    )
                                })}
                            }
                        })()}
                    </div>
                </div>
            ))}
        </Fragment>
    )
}