export default function searchMethodsModule () {
    return {
        findByNum: function (str, itemsArr) {
            let result = itemsArr.filter(item => item.number === str);
            if (!result.length) {
                result = 'По номеру "' + str + '" товар не найден';
            }
            return result
        },
        findByType: function (str, itemsArr) {
            let result = itemsArr.filter(item => item.type === str);
            if (!result.length) {
                result = 'По названию "' + str + '" товар не найден';
            }
            return result
        }
    };
};