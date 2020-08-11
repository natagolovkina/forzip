import React from 'react';

export const ItemImg = ({imgPath}) => {
    return(
        <div className="itemContainer_imgContainer flex justify-content_center align-items_center box-sizing">
            <img src={imgPath} className="itemImg" />
        </div>
    )
}
