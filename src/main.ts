import './style.css'

//СНЯТЬ ОГРАНИЧЕНИЯ ДЛЯ УСТАНОВКИ ПАКЕТОВ
//Get-ExecutionPolicy
//Set-ExecutionPolicy unrestricted
//y

//npm create vite  - установка пакета Node JS для каждого проекта

/* МЕТОДЫ ВЫВОДА

document.write('Hello, developers!') // .whrite('') выводит текст на страничку боди
console.log("Hello, developers!")    //вывод
console.info("Hello, developers!")   //информационный вывод, не отличается от лог
console.error("Hello, developers!")  //вывод в формате ошибки
console.warn("Hello, developers!")   //вывод в формате предупреждения

*/

//ПЕРЕМЕННЫЕ и КОНСТАНТЫ. НЕ ИМЕЮТ СТРОГОЙ ТИПИЗАЦИИ. ПРОСТО let или const
let num; //объявление
console.log(num);

num = 15; //инициализация
num = 25; //переопределение переменной
const a = 99; //константы не переопределяются. фикс значение
let abc = 'abc';
abc = "abc"; //строки в любых ковычках можно записывать
//console.log("Переменная num равна " + num + "!") //конкатенация - сложение строк. Цифры превращаются в троки


/*//МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ
let y = 6
let x = 3
console.log(y+x)
console.log(y-x)
console.log(y*x)
console.log(y/x)
console.log(y**2) // возведение числа в степень
console.log(y%x)  // остаток от деления 
*/

let x = 3;
x = x + 5; //***
x += 5;    //***сокращенная запись "ПЕРЕМЕННАЯ + значение" или
x -= 5;
x /= 5;
x %= 5;
x *= 5;
x++; //добавит единицу (+1)
x--; //соотвесттвенно


//ОПЕРАТОРЫ СРАВНЕНИЯ
let num1 = 5;
let num2 = 6;
console.log(num1<num2);

let lett1 = "a";   
let lett2 = "b"; 
console.log(lett1<lett2);  // b будет больше, потому что дальше в алфавите

let lett3 = 5 as any;      //цифра больше чем строка. в случае с разными типами, данные конвертируются в число и сравнивается
let num4 = "5" as any;
console.log(lett3==num4);  // здесь будет true
console.log(lett3===num4);  //строгое стравнение.будет false
console.log(lett3!==num4);  //не равно строго
console.log(lett3!=num4)    //не равно
                          



//ПРИОРИТЕТ ВЫЧИСЛЕНИЯ СКОБКИ ()
let one = 1;
let two = 2;
let three = one + two;
console.log("Переменная three равна " + three + "!")

let o = 1;
let t = 2;
//console.log("Сумма чисел = " + (t + o) + "!")



//КОНВЕРТАЦИЯ
let count1 = +("22");   // плюсик или Number (устаревшее) - преобразование строки с число 
let count2 = Number("11"); 
//console.log("Сумма значений из строки в число = " + (count1 + count2) + "!") 




//ОБЪЕКТ Math. - ВСТРОЕННЫЕ ЗНАЧЕНИЯ
/*
console.log("Math может вывести число ПИ - " + Math.PI)
console.log("Math может найти минимальное значение среди множества - " + Math.min(5,3,7,-2,4,1,9,0))
console.log("Или максимальное - " + Math.max(5,3,7,-2,4,1,9,0))
*/







