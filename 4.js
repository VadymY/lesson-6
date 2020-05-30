/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение

function some(ar, cb){
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
    let ret  = false;
    for (let i = 0; i < ar.length; i++){
        if(cb(ar[i], i, ar)){
            ret = true;
            break;
        }
    }

    return ret;
}

const result = some(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true

exports.some = some;
