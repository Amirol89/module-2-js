// let numbers = [];
//
// for (let i = 0; i < 5; i++) {
//     let num = parseInt(prompt(`Enter number ${i + 1}:`));
//     numbers.push(num);
// }
//
// console.log("Numbers in reverse order:");
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }
//


// question 2

// let count = parseInt(prompt("Enter number of participants:"));
// let names = [];
//
// for (let i = 0; i < count; i++) {
//     let name = prompt(`Enter name ${i + 1}:`);
//     names.push(name);
// }
//
// names.sort();
//
// let ol = document.createElement("ol");
//
// for (let i = 0; i < names.length; i++) {
//     let li = document.createElement("li");
//     li.textContent = names[i];
//     ol.appendChild(li);
// }
//
// document.body.appendChild(ol);


// question 3

// let dogs = [];
//
// for (let i = 0; i < 6; i++) {
//     let name = prompt(`Enter dog name ${i + 1}:`);
//     dogs.push(name);
// }
//
// dogs.sort();
// dogs.reverse();
//
// let ul = document.createElement("ul");
//
// for (let i = 0; i < dogs.length; i++) {
//     let li = document.createElement("li");
//     li.textContent = dogs[i];
//     ul.appendChild(li);
// }
//
// document.body.appendChild(ul);


// question 4
//
// let numbers = [];
//
// while (true) {
//   let input = prompt("Enter a number (0 to stop):");
//   let num = Number(input);
//
//   if (num === 0) {
//     break;
//   }
//
//   numbers.push(num);
// }
//
// numbers.sort((a, b) => b - a);
//
// console.log("Numbers from largest to smallest:");
// for (let n of numbers) {
//   console.log(n);
// }

// question 5
//
// let numbers = [];
//
// while (true) {
//   let input = prompt("Enter a number:");
//   let num = Number(input);
//
//   if (numbers.includes(num)) {
//     console.log("The number has already been given. Program stops.");
//     break;
//   }
//
//   numbers.push(num);
// }
//
// numbers.sort((a, b) => a - b);
//
// console.log("Numbers in ascending order:");
// for (let n of numbers) {
//   console.log(n);
// }


// question 6

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let ul = document.createElement("ul");

while (true) {
  let roll = rollDice();

  let li = document.createElement("li");
  li.textContent = roll;
  ul.appendChild(li);

  if (roll === 6) {
    break;
  }
}

document.body.appendChild(ul);