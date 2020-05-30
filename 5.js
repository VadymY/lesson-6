/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

function reduce(ar, cb, init){
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

    let cond = !init && typeof init !== "string";
    let sum = (cond) ? ar[0] : init;
    let start = (cond) ? 1 : 0;
    for (let i = start; i < ar.length; i++){
        sum = cb(sum, ar[i], i, ar);
    }

    return sum;
}

const result = reduce(
    1,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
    }
    ,
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
