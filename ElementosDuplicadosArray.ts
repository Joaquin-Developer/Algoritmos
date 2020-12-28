
function removeDuplicates(array: Array<number>) {
    return Array.from(new Set(array));    
}

const myArray = removeDuplicates([1, 2, 1, 1, 3, 4, 5, 6, 4]);

console.log(myArray.join(", "));

