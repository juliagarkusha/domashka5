const  testArray = ['html', 'css', 'js', 'jquery', 'react'];

const removeElement = (array, item) => {
    if(array.includes(item)) {
        return array.filter(arrayItem => arrayItem !== item)
    }

    console.log(`Переданный в функцию массив не содержит элемент ${item}`);

    return array;
}

const validRemoveItem = 'jquery';
const inValidRemoveItem = 'php';

console.log('Тест 1. В функцию removeElement передали item, который есть в исходном массиве array:');
console.log('Исходный массив:', testArray);
console.log('Элемент, который нужно удалить:', validRemoveItem);
console.log('Результат выполнения функции removeElement:', removeElement(testArray, validRemoveItem));

console.log('Тест 2. В функцию removeElement передали item, которого нет в исходном массиве array:');
console.log('Исходный массив:', testArray);
console.log('Элемент, который нужно удалить:', inValidRemoveItem);
console.log('Результат выполнения функции removeElement:', removeElement(testArray, inValidRemoveItem));
