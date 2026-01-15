
//exercise for month expenses 
const myName = 'Felipe';
const mySalary = 3400;
const foodCard = 854;

const moneyAvailableForMonth = mySalary + foodCard;

const computerInstallment = 468;
const rocketseatCourse = 166;
const smartphoneInstallment = 358;

const monthExpenses = computerInstallment + rocketseatCourse + smartphoneInstallment;

const savedMoney = moneyAvailableForMonth - monthExpenses;

const isPositiveBalance = savedMoney > 0;


console.log(`My name is ${myName}!`);
console.log(`I have ${moneyAvailableForMonth} available per month!`);
console.log(`My month expenses are ${monthExpenses}!`);
console.log(`This is what's left per month: ${savedMoney}`)
console.log(`My balance is positive? ${isPositiveBalance}`);

/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

//exercise for school media

const student = 'Felipe';
const firstRating = 10;
const secondRating = 5;
const thirdRating = 6;

const mediaRating = (firstRating + secondRating + thirdRating) / 3;


const isApproved = mediaRating >= 7;
const isNeedRecovery = mediaRating >= 5 && mediaRating < 7;
const isFailed = mediaRating < 5;

console.log(`Student: ${student}`);
console.log(`Is He approved? ${isApproved}`);
console.log(`Does He need recovery? ${isNeedRecovery}`);
console.log(`Is He failed? ${isFailed}`);

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

//exercise about discount to some products - TO-DO

