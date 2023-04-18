const binarySearch = require('../index');

let num = [1, 12, 33, 44, 55, 76, 87, 98, 129, 201];
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

test('Функция должна возвращать индекс элемента в первой половине массива', () => {
    expect(binarySearch(1, num)).toBe(0);
    expect(binarySearch(12, num)).toBe(1);
    expect(binarySearch('A', letters)).toBe(0);
    expect(binarySearch('B', letters)).toBe(1);
});
test('Функция должна возвращать индекс элемента во второй половине массива', () => {
    expect(binarySearch(129, num)).toBe(8);
    expect(binarySearch(201, num)).toBe(9);
    expect(binarySearch('G', letters)).toBe(6);
    expect(binarySearch('H', letters)).toBe(7);
});
test('Функция должна возвращать индекс элемента в середине массива', () => {
    expect(binarySearch(55, num)).toBe(4);
    expect(binarySearch(76, num)).toBe(5);
    expect(binarySearch('D', letters)).toBe(3);
    expect(binarySearch('E', letters)).toBe(4);
});
test('Функция должна быть определена', () => {
    expect(binarySearch).toBeDefined();
});
test('Функция должна возвращать -1, если элемента не существует в данном массиве', () => {
    expect(binarySearch(22, num)).toBe(-1);
    expect(binarySearch(-3, num)).toBe(-1);
    expect(binarySearch('A', num)).toBe(-1);
    expect(binarySearch('a', letters)).toBe(-1);
    expect(binarySearch('U', letters)).toBe(-1);
    expect(binarySearch(1, letters)).toBe(-1);
});
