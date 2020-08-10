import itemsMap from '@/maps/itemPage/itemsMap';

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

let makeItemContainerByNum = function (itemNumber, itemsMap) {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContainer', 'flex');
    let item = findItemByNumber(itemNumber, itemsMap);
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
contentInner.append(makeContentCotainerByType("Ременный привод, мощность 4-15 кВт (серия ВК-Е)", itemsMap));