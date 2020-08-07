import React from 'react';

export const FilterList = ({filterItems}) => {
    return(
        <ul className="content__filtersContainer_filtersList border_1px border-radius_12px">
            {filterItems.map((filterItem, i) => (
                <li className="content__filtersContainer_filtersList_filtersItem textFontDefault" key={i}>{filterItem}</li>
            ))}
        </ul>
    )
}