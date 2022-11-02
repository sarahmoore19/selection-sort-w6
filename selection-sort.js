
function selectionSort(arr) {
  let copy = [...arr];
  let newArr  = [];
  while (copy.length) {
    let low = Infinity;
    let i;
    copy.forEach((num, index) => {
      if (num < low) {
        low = num;
        i = index;
      }
    });

    [copy[i], copy[copy.length - 1]] = [copy[copy.length - 1], copy[i]]
    newArr.push(copy.pop());
  }
return newArr;
}

function selectionSort2(arr, newArr = []) {
  if (!arr.length) return newArr;
  let i;
  let low = Infinity;
  arr.forEach((num, index) => {
    if (num < low) {
      low = num;
      i = index;
    }
  });
  [arr[i], arr[arr.length - 1]] = [arr[arr.length - 1], arr[i]];
  newArr.push(arr.pop());
  return selectionSort2(arr, newArr);
}


function selectionSortInPlace(arr) {
let count = 0;
while (count < arr.length) {
let low = Infinity;
let index;
for (let i = count; i < arr.length; i++) {
  if (arr[i] < low) {
    low = arr[i];
    index = i;
  }
};
[arr[count], arr[index]] = [arr[index], arr[count]];
count++;
}
return arr;

}

function selectionSortInPlace2(arr, count = 0) {
if (count === arr.length) return arr;
let index;
let low = Infinity;
for (let i = count; i < arr.length; i++) {
  if (arr[i] < low) {
    low = arr[i];
    index = i;
  }
}
[arr[count], arr[index]] = [arr[index], arr[count]];
return selectionSortInPlace2(arr, count + 1)
}
arr1 = [2,4,6,8,1,3,5,7,9];
arr2 = [2,4,6,8,1,3,5,7,9];
arr3= [2,4,6,7,3,-13,400,7,2,1/3,8,1,3,5,7,9];
arr4= [2,4,6,7,3,-13,400,7,2,1/3,8,1,3,5,7,9];


console.log(selectionSort(arr1))
console.log(selectionSort2(arr2))
console.log(selectionSortInPlace(arr3))
console.log(selectionSortInPlace2(arr4))





module.exports = [selectionSort, selectionSortInPlace];
