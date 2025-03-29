// Задание 1: Вывод элементов массива
const arr = ['apple', 'banana', 'cherry', 'date'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задание 2: Генерация случайного пароля
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let password = '';

for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
}

console.log("Generated password:", password);

// Задание 3: Деструктуризация объекта
const person = { name: "Aibek", age: 25, country: "Kyrgyzstan" };
const { name, age } = person;

console.log("Name:", name, "Age:", age);

// Задание 4: Объединение объектов
const car1 = { brand: "Toyota", year: 2015 };
const car2 = { brand: "Honda", year: 2020 };

const newCar = { ...car1, ...car2 };

console.log("Merged Car:", newCar);

// Задание 5: Фильтрация чисел
const values = [10, "hello", 25, "world", 30, false, 50, "JS"];
const numbersOnly = values.filter(item => typeof item === "number");

console.log("Filtered Numbers:", numbersOnly);
