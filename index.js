// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch(n, arr, start = 0, end = arr.length) {
    let median = Math.floor((end + start) / 2);
    if (n < arr[0] || n > arr[arr.length - 1] || end < start) {
        return -1;
    } else if (n == arr[median]) {
        return median;
    } else if (n < arr[median]) {
        return binarySearch(n, arr, start, median - 1);
    } else if (n > arr[median]) {
        return binarySearch(n, arr, median + 1, end);
    } else {return -1}
}

module.exports = binarySearch;
