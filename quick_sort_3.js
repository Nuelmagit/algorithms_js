 const arrayToSort = [922, 16, 5, 21, 9, 4, 99, 29, 7, 1, 52, 845]


 const quickSort = (arr) => {
     if (arr.length < 2) return arr;

     const pivotKey = Math.floor((arr.length - 1) / 2)
     const pivotValue = arr[pivotKey];
     let leftKey = 0;
     let rightKey = arr.length - 1;
     while (leftKey < rightKey) {

         while (arr[leftKey] < pivotValue) {
             leftKey++;
         }

         while (arr[rightKey] > pivotValue) {
             rightKey--;
         }

         if (leftKey < rightKey) {
             const leftValue = arr[leftKey];
             const rightValue = arr[rightKey];
             arr[leftKey] = rightValue;
             arr[rightKey] = leftValue;
             leftKey++;
             rightKey--;
         }
     }



     if (arr.length > 2) {
         const partOne = quickSort(arr.slice(0, leftKey));
         const partTwo = quickSort(arr.slice(leftKey, arr.length));
         return partOne.concat(partTwo);
     } else {
         return arr;
     }
 }

 console.log(quickSort(arrayToSort))