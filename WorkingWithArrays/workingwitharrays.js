function arrayDescSort(array){
    return array.sort(function(e1, e2) {
        return e2-e1;
    });
}

function arraySlice(array,start,end) {
    if (end === undefined) {
        return array.slice(start);
    } else {
        return array.slice(start, end);
    }
}

function evenArrayNumbersSum (array) {
    return array.reduce((sum, arrayElement)=>{
        if(arrayElement % 2 === 0){
            return sum+arrayElement
        } return sum
    }, 0);
}

function sequentialArrayFill (array, end) {
    for(i=0; i<end; i++) {
        array[i] = i+1;
    }
}

function evenElementsSqrt (array) {
    const list = [];
    array.forEach(arrayElement=>{
        if(arrayElement % 2 === 0){
            list.push(arrayElement ** 2)
        }
    })
    return list;
}

const array = [5, 3, 4, 2, 1, 6, 3, 9, 0];
console.log("Создан массив: " + array);

console.log("Массив отсортирован по убыванию: " + arrayDescSort(array));

console.log("Получены первые 5 элементов массива: " + arraySlice(array, 0, 5));

console.log("Получены последние 5 элементов массива: " + arraySlice(array, -5));

console.log("Сумма элементов массива являющихся четными числами: " + evenArrayNumbersSum(array));

const array100 = [];
sequentialArrayFill(array100, 100);
console.log("Создан массив от 1 до 100 : " + array100);

const listEvenElementsSqrt = evenElementsSqrt(array100);
console.log("Список квадратов четных элементов массива: " + listEvenElementsSqrt);