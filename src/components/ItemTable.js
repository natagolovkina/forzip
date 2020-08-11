import React, {Fragment} from 'react';

const ItemNote = ({notes}) => {
    return (
        <Fragment>
            {notes.map((note, noteNum) => (
                <p className="textFontDefault itemNote" key={noteNum+1}>{note}</p>
            ))}
        </Fragment>
    )
}

export const ItemTable = ({item}) => {
    return(
        <div className="itemContainer_tableContainer">
            <table className="itemTable">
                <thead>
                    <tr>
                        {Object.values(item.characteristics).map((character, headNum) => (
                            <th className="textFontDefault border_1px" key={headNum+1}>{character}</th>
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
            {(() => {
                if (item.notes) {
                    <ItemNote notes = {item.notes}/>
                    /*console.log(item.name, ': ',item.notes)
                    {item.notes.map((note, noteNum) => {
                        console.log(note)
                        return (
                            <p className="textFontDefault itemNote" key={i*10000+noteNum}>
                                {note}
                            </p>
                        )
                    })}*/
                }
            })()}
        </div>
    )
}
