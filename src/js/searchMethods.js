export default function searchMethodsModule () {
    return {
        findByNum: function (str, itemsArr) {
            return itemsArr.filter(item => item.number === str)
        },
        findByType: function (str, itemsArr) {
            return itemsArr.filter(item => item.type === str)
        }
    };
};