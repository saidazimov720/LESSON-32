function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (target < arr[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}
var sortedArray = [5, 6, 1, 4, 8, 7, 2, 36, 9, 8, 4, 1, 2, 515, 6, 5, 6];
var targetValue = 7;
var res = binarySearch(sortedArray, targetValue);
console.log(res);
