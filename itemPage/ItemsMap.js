let characteristicsTranslate = {model:"Модель", pressure:"Давление,</br>бар", productivity:"Производительность,</br>л/мин", capacity:"Мощность,</br>кВт", noise:"Шум,</br>ДБ", weight:"Вес,</br>кг", size:"Габариты</br>А х В х С, мм", output:"Выход,</br>G"};

let itemsArr = [
    {itemName:"R001",
    itemNumber: "R001",
    itemBrendName:"Ремеза (Remeza)",
    itemCategory:"Винтовые компрессоры",
    itemType:"Ременный привод, мощность 4-15 кВт (серия ВК-Е)",
    itemImgPath:"itemPage/IMGs/bk15e.jpg",
    itemCharacteristics:{model:"Модель", pressure:"Давление,</br>бар", productivity:"Производительность,</br>л/мин", capacity:"Мощность,</br>кВт", noise:"Шум,</br>ДБ", weight:"Вес,</br>кг", size:"Габариты</br>А х В х С, мм", output:"Выход,</br>G"}, 
    itemsList:[
        {model:"ВК5Е-8(10,15)", pressure:"8/10/15", productivity:"550/450/270", capacity:"4,0", noise:"68", weight:"200", size:"890 х 680 х 1025", output:"G3/4"},
        {model:"ВК7Е-8(10,15)", pressure:"8/10/15", productivity:"800/700/500", capacity:"5,5", noise:"70", weight:"215", size:"890 х 680 х 1025", output:"G3/4"},
        {model:"ВК10Е-8(10,15)", pressure:"8/10/15", productivity:"1150/1000/700", capacity:"7,5", noise:"71", weight:"225", size:"890 х 680 х 1025", output:"G3/4"},
        {model:"ВК15Е-8(10,15) (ВС)", pressure:"8/10/15", productivity:"1650/1400/1100", capacity:"11,0", noise:"75", weight:"280", size:"1080 х 680 х 1025", output:"G3/4"},
        {model:"ВК20Е-8(10,15) (ВС)", pressure:"8/10/15", productivity:"2150/1900/1400", capacity:"15,0", noise:"66", weight:"335", size:"1120 х 810 х 1180", output:"G3/4"}
        ],
    itemNotes: ['ВС - частотно-регулируемый привод']
    },
    {itemName:"R002",
    itemNumber: "R002",
    itemBrendName:"Ремеза (Remeza)",
    itemCategory:"Винтовые компрессоры",
    itemType:"Ременный привод, мощность 4-15 кВт (серия ВК-Е)",
    itemImgPath:"itemPage/IMGs/bk5e.jpg",
    itemCharacteristics:{model:"Модель", volume:"Объём,</br>л", pressure:"Давление,</br>бар", productivity:"Производительность,</br>л/мин", capacity:"Мощность,</br>кВт", noise:"Шум,</br>ДБ", weight:"Вес,</br>кг", size:"Габариты</br>А х В х С, мм", output:"Выход,</br>G"}, 
    itemsList:[
        {model:"ВК5Е-8(10,15)-270", volume:"270", pressure:"8/10/15", productivity:"550/450/270", capacity:"4,0", noise:"68", weight:"305", size:"1270 х 680 х 1585", output:"G3/4"},
        {model:"ВК7Е-8(10,15)-270", volume:"270", pressure:"8/10/15", productivity:"800/700/500", capacity:"5,5", noise:"70", weight:"340", size:"1270 х 680 х 1585", output:"G3/4"},
        {model:"ВК10Е-8(10,15)-270", volume:"270", pressure:"8/10/15", productivity:"1150/1000/700", capacity:"7,5", noise:"71", weight:"345", size:"1270 х 680 х 1585", output:"G3/4"},
        {model:"ВК15Е-8(10,15)-500(ВС)", volume:"500", pressure:"8/10/15", productivity:"1650/1400/1100", capacity:"11,0", noise:"75", weight:"475", size:"2030 х 680 х 1585", output:"G3/4"},
        {model:"ВК20Е-8(10,15)-500(ВС)", volume:"500", pressure:"8/10/15", productivity:"2150/1900/1400", capacity:"15,0", noise:"66", weight:"535", size:"1930 х 810 х 1585", output:"G3/4"}
        ],
        itemNotes: ['ВС - частотно-регулируемый привод']
    },
    {itemName:"R003",
    itemNumber: "R003",
    itemBrendName:"Ремеза (Remeza)",
    itemCategory:"Винтовые компрессоры",
    itemType:"Ременный привод, мощность 4-15 кВт (серия ВК-Е)",
    itemImgPath:"itemPage/IMGs/bk15ed.jpg",
    itemCharacteristics:{model:"Модель", volume:"Объём,</br>л", pressure:"Давление,</br>бар", productivity:"Производительность,</br>л/мин", capacity:"Мощность,</br>кВт", noise:"Шум,</br>ДБ", weight:"Вес,</br>кг", size:"Габариты</br>А х В х С, мм", output:"Выход,</br>G"}, 
    itemsList:[
        {model:"ВК5Е-8(10,15)-500Д", volume:"500", pressure:"8/10/15", productivity:"550/450/270", capacity:"4,0", noise:"68", weight:"405", size:"2030 х 695 х 1585", output:"G1/2"},
        {model:"ВК7Е-8(10,15)-500Д", volume:"500", pressure:"8/10/15", productivity:"800/700/500", capacity:"5,5", noise:"70", weight:"450", size:"2030 х 695 х 1585", output:"G1/2"},
        {model:"ВК10Е-8(10,15)-500Д", volume:"500", pressure:"8/10/15", productivity:"1150/1000/700", capacity:"7,5", noise:"71", weight:"460", size:"2030 х 695 х 1585", output:"G1/2"},
        {model:"ВК15Е-8(10,15)-500Д(ВС)", volume:"500", pressure:"8/10/15", productivity:"1650/1400/1100", capacity:"11,0", noise:"75", weight:"505", size:"2030 х 750 х 1585", output:"G3/4"},
        {model:"ВК20Е-8(10,15)-500Д(ВС)", volume:"500", pressure:"8/10/15", productivity:"2150/1900/1400", capacity:"15,0", noise:"66", weight:"585", size:"1930 х 810 х 1760", output:"G3/4"}
        ],
        itemNotes: ['ВС - частотно-регулируемый привод']
    },
    {itemName:"R004",
    itemNumber: "R004",
    itemBrendName:"Ремеза (Remeza)",
    itemCategory:"Винтовые компрессоры",
    itemType:"Открытого типа мощность 11,0-15,0 кВт",
    itemImgPath:"itemPage/IMGs/bk15a.jpg",
    itemCharacteristics:{model:"Модель", volume:"Объём,</br>л", pressure:"Давление,</br>бар", productivity:"Производительность,</br>л/мин", capacity:"Мощность,</br>кВт", noise:"Шум,</br>ДБ", weight:"Вес,</br>кг", size:"Габариты</br>А х В х С, мм", output:"Выход,</br>G"}, 
    itemsList:[
        {model:"ВК15А-10(15)-500", volume:"500", pressure:"10/15", productivity:"1400/1100", capacity:"11,0", noise:"80", weight:"390", size:"2030 х 690 х 1450", output:"G3/4"},
        {model:"ВК20А-10(15)-500", volume:"500", pressure:"10/15", productivity:"1900/1400", capacity:"15,0", noise:"80", weight:"445", size:"2030 х 690 х 1450", output:"G3/4"},        
        ],
        itemNotes: ''
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

let findItemsByType = function (type, arr) {
    let sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (type === arr[i].itemType) {
            sortedArr.push(arr[i]);
        };
    };
    return sortedArr
};

let makeItemTitle = function (itemObj) {
    let itemTitle = document.createElement('h1');
    itemTitle.classList.add('titleDefault');
    itemTitle.textContent = itemObj.itemType;
    return itemTitle
};

let makeItemImg = function (itemObj) {
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('itemContainer_imgContainer', 'flex', 'justify-content_center', 'align-items_center', 'box-sizing');
    let itemImg = document.createElement('img');
    itemImg.src = itemObj.itemImgPath;
    itemImg.classList.add('itemImg');
    imgContainer.append(itemImg);
    return imgContainer
};

let makeItemTable = function (itemObj) {
    let tableContainer = document.createElement('div');
    tableContainer.classList.add('itemContainer_tableContainer');
    let itemTable = document.createElement('table');
    itemTable.classList.add('itemTable')
    let headRow = document.createElement('tr');    
    for (let i = 0; i < Object.keys(itemObj.itemCharacteristics).length; i++) {
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
    tableContainer.append(itemTable);
    if (itemObj.itemNotes) {
        for (let t = 0; t < itemObj.itemNotes.length; t++) {
            let itemNote = document.createElement('p');
            itemNote.textContent = itemObj.itemNotes[t];
            itemNote.classList.add('textFontDefault', 'itemNote');
            tableContainer.append(itemNote);
        };        
    };
    return tableContainer
};

let makeItemContainerByNum = function (itemNumber, itemsArr) {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContainer', 'flex');
    let item = findItemByNumber(itemNumber, itemsArr);
    let itemImg = makeItemImg(item);
    let itemTable = makeItemTable(item);
    itemContainer.append(itemImg, itemTable);
    return itemContainer
};

let makeItemContainer = function (itemObj) {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContainer', 'flex');
    let itemImg = makeItemImg(itemObj);
    let itemTable = makeItemTable(itemObj);
    itemContainer.append(itemImg, itemTable);
    return itemContainer
};

let makeContentCotainerByType = function (type, arrSource) {
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content__container');
    let sortedArr = findItemsByType(type, arrSource);    
    let pageTitle = makeItemTitle(sortedArr[0]);
    contentContainer.append(pageTitle);
    for (let i = 0; i < sortedArr.length; i++) {
        let itemContainer = makeItemContainer(sortedArr[i]);
        contentContainer.append(itemContainer);
    };
    return contentContainer
};

let contentOuter = document.querySelector('#content-place');
let contentInner = contentOuter.children[0];
contentInner.append(makeContentCotainerByType("Ременный привод, мощность 4-15 кВт (серия ВК-Е)", itemsArr));