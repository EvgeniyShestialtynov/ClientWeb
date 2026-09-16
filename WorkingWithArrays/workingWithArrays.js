"use strict";

(function () {
    function sortDescendingNumbersArray(array) {
        return array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    function sliceLastArrayElements(array, count) {
        return array.slice( -count - 1);
    }

    function sliceFirstArrayElements(array, count) {
        return array.slice(0, count);
    }

    function getEvenArrayNumbersSum(array) {
        return array.reduce((sum, arrayElement) => {
            if (arrayElement % 2 === 0) {
                return sum + arrayElement;
            }

            return sum;
        }, 0);
    }

    function fillArrayTo(end) {

        const array = [];
        let i;

        for (i = 0; i < end; i++) {
            array[i] = i + 1;
        }

        return array;
    }

    function getEvenElementsSqare(array) {
        return array.filter(e => e % 2 === 0).map(e => e ** 2);
    }

    const array = [5, 3, 4, 2, 1, 6, 3, 9, 0];
    console.log("Создан массив: " + array);

    console.log("Массив отсортирован по убыванию: " + sortDescendingNumbersArray(array));
    console.log("Получены первые 5 элементов массива: " + sliceFirstArrayElements(array, 5));
    console.log("Получены последние 5 элементов массива: " + sliceLastArrayElements(array, -5));
    console.log("Сумма элементов массива являющихся четными числами: " + getEvenArrayNumbersSum(array));

    const array100 = fillArrayTo(100);
    console.log("Создан массив от 1 до 100: " + array100);

    const evenElementsSqaresArray = getEvenElementsSqare(array100);
    console.log("Список квадратов четных элементов массива: " + evenElementsSqaresArray);
})();
