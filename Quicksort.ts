/**
 * Algoritmo de ordenamiento QUICKSORT con TypeScript
 */

function quickSort(arr: number[]): number[] {
    if (arr.length === 0) return [];

    let mediumIndex: number = Math.floor(arr.length / 2);
    let pivot: number = arr[mediumIndex];
    let leftArr: number[] = [];
    let rightArr: number[] = [];
    
    for (let index = 0; index < arr.length; index++) {
        if (index != mediumIndex) {
            if (arr[index] > pivot) {
                rightArr.push(arr[index]);
            } else {
                leftArr.push(arr[index]);
            }
        }
    }
    leftArr = quickSort(leftArr);
    rightArr = quickSort(rightArr);
    return leftArr.concat(pivot).concat(rightArr);
}

let sortArray: number[] = quickSort([5, -1, 4, 2, 1, -7, 0, -14, 14]);
console.log(sortArray.join(","));