/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function filter (ar, cb){
    try {
        if (!Array.isArray(ar)) {
            throw  new Error("not an array");
        }
        if (typeof cb !== "function")
        {
            throw  new Error("not a function");
        }
    }
    catch(e) {
        switch (e.message) {
            case "not an array":
                console.log("the first arg is not array");
                return;
            case "not a function":
                console.log("the second arg is not function");
                return;
            default:
                console.log(e.message);
                return;
        }
    }
    let ret = [];
    for (let i = 0; i < ar.length; i++){
        if (cb(ar[i], i, ar)){
            ret.push(ar[i]);
        }
    }
    return ret;
}

const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
