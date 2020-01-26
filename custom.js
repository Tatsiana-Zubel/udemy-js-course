"use strict";

let money = prompt ("Ваш бюджет на месяц?");
console.log(money);

let time = prompt ("Введите дату в формате YYYY-MM-DD");
console.log(time);


let appData = {
   budget: money,
   timeData: time,
   expenses: {
   },
   optionalExpenses: {}, 
   income: [], 
   savings: false,
}


let first1 = prompt("Введите обязательную статью расходов в этом месяце");
let first2 = prompt("Во сколько обойдется?");
appData.expenses[first1] = first2;

let second1 = prompt("Введите обязательную статью расходов в этом месяце");
let second2 = prompt("Во сколько обойдется?");
appData.expenses[second1] = second2;

console.log(appData.expenses);

let day = alert (money/30);




