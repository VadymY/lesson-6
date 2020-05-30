/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение

function every(ar, cb){
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
    let ret = true;
    for (let i = 0; i < ar.length; i++){
        if(!cb(ar[i], i, ar)){
            ret = false;
            break;
        }
    }

    return ret;
}

const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});

console.log(result); // true

exports.every = every;
