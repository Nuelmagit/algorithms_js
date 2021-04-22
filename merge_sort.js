const arrayToSort = [922, 16, 5, 21, 9, 4, 99, 29, 7, 1, 52, 845]

const divideArray = (array) => {
    const middleIndex = Math.floor(array.length / 2);
    return {
        leftSide: array.slice(0, middleIndex),
        rightSide: array.slice(middleIndex, array.length)
    }
}


const joinSides = (leftSideSorted, rightSideSorted) => {
    const sortedArray = [];
    while (leftSideSorted.length > 0 && rightSideSorted.length > 0) {
        const nextElement = leftSideSorted[0] > rightSideSorted[0] ? rightSideSorted.shift() : leftSideSorted.shift();
        sortedArray.push(nextElement);
    }

    while (leftSideSorted.length > 0) {
        sortedArray.push(leftSideSorted.shift());
    }

    while (rightSideSorted.length > 0) {
        sortedArray.push(rightSideSorted.shift());
    }

    return sortedArray;
}

const mergeSort = (array) => {

    if (array.length < 2) return array;
    const {
        leftSide,
        rightSide
    } = divideArray(array);

    const leftSideSorted = mergeSort(leftSide);
    const rightSideSorted = mergeSort(rightSide);
    return joinSides(leftSideSorted, rightSideSorted)
}



const result = mergeSort(arrayToSort)

console.log(result);