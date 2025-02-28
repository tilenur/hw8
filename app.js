// Задача 1: Проверка на четность и нечетность
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Четное" : "Нечетное";
}

console.log(checkEvenOdd(4)); // "Четное"
console.log(checkEvenOdd(7)); // "Нечетное"

// Задача 2: Факториал числа
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// Задача 3: Поиск максимального числа в массиве
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-5, -1, -8])); // -1

// Задача 4: Подсчет числа гласных в строке
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello")); // 2
console.log(countVowels("world")); // 1

// Задача 6: Сумма всех чисел в массиве
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([-1, -2, 3])); // 0

