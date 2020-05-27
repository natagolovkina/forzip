let itemsArr = [
    {itemName:"template",
    itemNumber: "R001",
    itemBrendName:"brend name",
    itemCategory:"item category",
    itemType:"item type",
    itemCharacteristics:{ img:"itemPage/IMGs/bk15e.jpg", model:"Модель", pressure:"Давление,</br>бар", productivity:"Производительность,</br>л/мин", capacity:"Мощность,</br>кВт", noise:"Шум,</br>ДБ", weight:"Вес,</br>кг", size:"Габариты</br>А х В х С, мм", output:"Выход,</br>G"}, 
    itemsList:[
        {model:"ВК5Е-8(10,15)", pressure:"8/10/15", productivity:"550/450/270", capacity:"4,0", noise:"68", weight:"200", size:"890 х 680 х 1025", output:"G 3/4"},
        {model:"ВК7Е-8(10,15)", pressure:"8/10/15", productivity:"800/700/500", capacity:"5,5", noise:"70", weight:"215", size:"890 х 680 х 1025", output:"G 3/4"},
        {model:"ВК10Е-8(10,15)", pressure:"8/10/15", productivity:"1150/1000/700", capacity:"7,5", noise:"71", weight:"225", size:"890 х 680 х 1025", output:"G 3/4"},
        {model:"ВК15Е-8(10,15) (ВС)", pressure:"8/10/15", productivity:"1650/1400/1100", capacity:"11,0", noise:"75", weight:"280", size:"1080 х 680 х 1025", output:"G 3/4"},
        {model:"ВК20Е-8(10,15) (ВС)", pressure:"8/10/15", productivity:"2150/1900/1400", capacity:"15,0", noise:"66", weight:"335", size:"1120 х 810 х 1180", output:"G 3/4"}
        ]
    },
    {itemName:"Rem 1",
    itemNumber: "R011",
    itemBrendName:"remeza",
    itemCategory:"item category 1",
    itemType:"item type 1",
    itemCharacteristics:{model:"Модель", volume:"Объём, л", pressure:"Давление, бар", img:"img src-path"}, 
    itemsList:[
        {model:"rem-42", volume:542, pressure:"10/15"},
        {model:"rem-258", volume:758, pressure:"11/16"}
        ]
    }
];

let findItemByNumber = function (number, arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (number === arr[i].itemNumber) {
            return arr[i]
        };
    };
    return null
};

let makeItemImg = function (itemObj) {
    let itemImg = document.createElement('img');
    itemImg.src = Object.values(itemObj.itemCharacteristics)[0];
    itemImg.classList.add('itemImg');
    return itemImg
};

let makeItemTable = function (itemObj) {
    let itemTable = document.createElement('table');
    itemTable.classList.add('itemTable')
    let headRow = document.createElement('tr');    
    for (let i = 1; i < Object.keys(itemObj.itemCharacteristics).length; i++) {
        let headCell = document.createElement('th');
        headCell.classList.add('textFontDefault', 'border_1px');
        headCell.innerHTML = Object.values(itemObj.itemCharacteristics)[i];
        headRow.append(headCell);
    };    
    itemTable.append(headRow);
    for (let j = 0; j < itemObj.itemsList.length; j++) {
        let itemRow = document.createElement('tr');
        for (let t = 0; t < Object.keys(itemObj.itemsList[j]).length; t++) {
            let dataCell = document.createElement('td');
            dataCell.classList.add('textFontDefault', 'border_1px');
            dataCell.textContent = Object.values(itemObj.itemsList[j])[t];
            itemRow.append(dataCell);
        };
        itemTable.append(itemRow);
    };
    return itemTable
};

let makeItemContainer = function (itemNumber, itemsArr) {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContainer', 'flex');
    let item = findItemByNumber(itemNumber, itemsArr);
    let itemImg = makeItemImg(item);
    let itemTable = makeItemTable(item);
    itemContainer.append(itemImg, itemTable);
    return itemContainer
};

let contentContainer = document.querySelector('#item-place');
contentContainer.append(makeItemContainer("R001", itemsArr));