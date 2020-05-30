/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение

let forEach =  function forEach_proto(arr,  callback )
{
    try {
        if (!Array.isArray(arr)) {
            throw  new Error("not an array");
        }
        if (typeof callback !== "function")
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
    for (let i = 0; i < arr.length; i++)
    {
        callback(arr[i], i, arr);
    }

};

const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

console.log(result); // undefined

exports.forEach = forEach;
