/*function getShippingMessage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Canada", 100, 20));
console.log(getShippingMessage("Germany", 200, 50));


function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}

console.log(makeTransaction(6, 760, 1234));
console.log(makeTransaction(10, 554, 3000));
console.log(makeTransaction(2, 12, 2000));

function makeArray(firstArray, secondArray, maxLength) {    
    const combinedArray = firstArray.concat(secondArray);   

    if (combinedArray.length > maxLength) {        
        return combinedArray.slice(0, maxLength);
    } else {        
        return combinedArray;
    }
}

console.log(makeArray([1, 2, 3], [4, 5, 6], 10));
console.log(makeArray([1, 2], [3, 4, 5], 3));
console.log(makeArray([1, 2, 3], [4, 5], 4));

const A = [23, 42, 6, 38, 3, 12, 20, 16, 2, 20];
const B = [1, 32, 2, 7, 9, 12, 5, 15, 20, 11];

function calculateC(A, B) {
    const C = A.map((a, i) => a !== B[i] ? 1 / (a - B[i]) : 1);
    return C;
}

function swapMaxWithFirst(array) {
    const maxIndex = array.indexOf(Math.max(...array));
    [array[0], array[maxIndex]] = [array[maxIndex], array[0]];
    return array;
}

let C = calculateC(A, B);
console.log("Масив C до перестановки:", C);

const CModified = [...C];
swapMaxWithFirst(CModified);
console.log("Масив C після перестановки:", CModified);

function bubbleSort(array) {
    const arr = [...array];
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; 
            }
        }
        n--; 
    } while (swapped);
    return arr;
}

const arrayToSort = [10, 3, 7, 2, 5, 8, 1, 9, 4, 6];
console.log("Масив до сортування:", arrayToSort);
const sortedArray = bubbleSort(arrayToSort);
console.log("Масив після сортування:", sortedArray);*/







