'use strict';

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

// const userSalary = function(salary) {
//   if(Number.isFinite(salary)) {
//     console.log(`Размер заработной платы за вычетом налогов равен: ${salary*0.87}.`);
//   } else {
//     console.log("Значение задано неверно.");
//   }
// }
// userSalary(+prompt('Enter your salary'));
// Здесь пишем решение, данный комментарий необходимо стереть.

const userSalary = function () {
  const salary = +prompt('Enter your salary');
  if (Number.isFinite(salary)) {
    alert(
      `Размер заработной платы за вычетом налогов равен: ${salary * 0.87}.`
    );
    console.log(
      `Размер заработной платы за вычетом налогов равен: ${salary * 0.87}.`
    );
  } else {
    alert('Значение задано неверно.');
    console.log('Значение задано неверно.');
  }
};
document.querySelector('#salary').addEventListener('click', userSalary);
