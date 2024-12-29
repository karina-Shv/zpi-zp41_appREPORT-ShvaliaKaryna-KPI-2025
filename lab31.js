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

// 1. Задані одновимірні масиви A і B з 10 чисел
const A = [23, 42, 6, 38, 3, 12, 20, 16, 2, 20];
const B = [1, 32, 2, 7, 9, 12, 5, 15, 20, 11];

// Функція для обчислення масиву C за заданою формулою
// Формула: c[i] = 1 / (a[i] - b[i]), якщо a[i] ≠ b[i]
//          c[i] = 1, якщо a[i] == b[i]
function calculateC(A, B) {
    // Використовуємо метод map для створення нового масиву C
    const C = A.map((a, i) => a !== B[i] ? 1 / (a - B[i]) : 1);
    return C;
}

// Функція для обміну максимального елемента з першим у масиві
// Приймає масив, знаходить максимальний елемент і змінює його місцями з першим
function swapMaxWithFirst(array) {
    // Знаходимо індекс максимального елемента
    const maxIndex = array.indexOf(Math.max(...array));
    // Обмінюємо значення першого елемента і максимального
    [array[0], array[maxIndex]] = [array[maxIndex], array[0]];
    return array;
}

// Обчислення масиву C
let C = calculateC(A, B);
console.log("Масив C до перестановки:", C);

// Перестановка максимального елемента і першого
const CModified = [...C]; // Створюємо копію масиву для модифікації, щоб не змінювати оригінальний масив
swapMaxWithFirst(CModified);
console.log("Масив C після перестановки:", CModified);

// 2. Сортування масиву методом бульбашки
// Функція реалізує алгоритм сортування "бульбашкою"
function bubbleSort(array) {
    const arr = [...array]; // Створюємо копію масиву для сортування, щоб зберегти оригінальний масив
    let n = arr.length; // Отримуємо довжину масиву
    let swapped; // Змінна для відстеження, чи відбувався обмін елементів у поточному проході
    do {
        swapped = false; // На початку кожного проходу припускаємо, що обміну не буде
        for (let i = 0; i < n - 1; i++) {
            // Якщо поточний елемент більший за наступний, міняємо їх місцями
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; // Встановлюємо прапорець, що обмін відбувся
            }
        }
        n--; // Скорочуємо область перевірки, оскільки останній елемент вже відсортований
    } while (swapped); // Продовжуємо, поки відбувається хоча б один обмін
    return arr;
}

// Масив для сортування
const arrayToSort = [10, 3, 7, 2, 5, 8, 1, 9, 4, 6];
console.log("Масив до сортування:", arrayToSort);
const sortedArray = bubbleSort(arrayToSort);
console.log("Масив після сортування:", sortedArray);*/







