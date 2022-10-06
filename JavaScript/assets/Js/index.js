// function test() {
//   // some codes
//   // console.log("Test");

//   return "Test";
// }

// test();

// test();
// const testFunc = function () {
//   return "Anonymous func";
// };

// console.log(testFunc());
// console.log(test());
// console.log(testFunc());

// const showStudentList = () => {
//   console.log("test 3");
// };

// showStudentList();

// function usefull() {}

// function outside(func) {
//   return func();
// }

// function outsideTwo() {
//   return function () {};
// }

// outside(usefull);

// document.querySelector("button").addEventListener("click", function () {
//   console.log("This is event");
// });

// var a; // Hoisted

// function test() {} // hoisted

// a = "test";

//______________________

// console.log(a);
// var a = "Test";

// console.log(a);
// // let a;

// // let a = "test";

// function test() {}

const personRovshen = {
  firstname: "Rovshan",
  lastname: "Khalilov",
  salary: 200,
};

const personElnur = {
  firstname: "Elnur",
  lastname: "Azizov",
  salary: 150,
};
const personIbrahim = {
  firstname: "Ibrahim",
  lastname: "Aliyev",
  salary: 5000,
};

personIbrahim.salary;

personIbrahim["salary"];

const employees = [personRovshen, personElnur, personIbrahim];

// employees.forEach(function (employee) {
//   console.log(employee);
// });

// _____________________

// forEach(employees, function (employee) {
//   console.log("employee", employee);
// });

// forEach(employees, (employee) => {
//   console.log("employee", employee);
// });

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function findSalaryAvarage(arr, nameKey, surnameKey, salaryKey) {
  let avarage = 0;
  forEach(arr, function (item) {
    avarage += item[salaryKey];
    console.log("Ad Soyad:", item[nameKey], item[surnameKey]);
  });

  return "Ortlama: " + (avarage / arr.length).toFixed(2);
}

// console.log(findSalaryAvarage(employees, "firstname", "lastname", "salary"));

// function forEachFunc(callback) {}

const arr = [
  { name: "Leman", surname: "Yagubova", age: 19 },
  { name: "Ismayil", surname: "Zeynlaov", age: 20 },
  { name: "Undefined", surname: "Flankesov", age: 0 },
];

let finded = arr.find((item) => item.age > 18);

console.log(finded);
