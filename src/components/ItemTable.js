import React, {Fragment} from 'react';

export const ItemTable = ({item}) => {
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
                ))}
            
        </div>
    )
}