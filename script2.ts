function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }
        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
const sortedArray = [5, 6, 1, 4, 8, 7, 2, 36, 9, 8, 4, 1, 2, 515, 6, 5, 6];
const targetValue = 7;
const res = binarySearch(sortedArray, targetValue);
console.log(res);
