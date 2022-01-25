// // YOUTUBE BG PICKER

// document.querySelector("li").addEventListener('click', purpleParty)

// function purpleParty(){
// document.querySelector("body").style.backgroundColor = "purple"
// document.querySelector("body").style.color = "white"
// }




// // WHAT DAY IS TODAY
// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

// if (day === "tuesday" || day === "thursday"){
//   alert("It is class day.")
// } else if (day === "saturday" || day === "sunday"){
//   alert("It's the weekend!")
// } else {
//   alert("It's a boooring day.")
// }
// }

// // POWER FUNCTION
// // function pow(x,n){
// //   let result = x;
// //   for (let i = 1; i < n; i++){
// //     result *= x;
// //   }
// //   return result;
// // }

// // alert(pow(2,3))


// // ANGRY PARENT SIMULATOR

// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName
// }

// // document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`

// `${fName}${lName}`



// function loop(n){
//   let hash = "#";
//   for (let i = 1; i <= n; i++ ){
//    console.log(hash)
//    hash += "#"}
//   }

//   loop(7)


//   function fizzBuzz(){
//   for (let i = 1; i <= 20; i++){
//     if (i%3===0 && i%5===0){
//       console.log("FizzBuzz")
//     } else if (i%3===0){
//       console.log("fizz")
//     } else if (i%5===0){
//       console.log("buzz")
//     } else{
//     console.log(i)
//   }
// }
// }
// fizzBuzz()

// document.querySelector("#placeToYell").innerText =

// document.querySelector("#check").addEventListener("click" , check)




// let size = 8
// let board = ""
// for (let y = 0; y < size; y++){
//   for (let x=0; x < size; x++){
//     if ((x+y)%2==0){
//       board += " "
//     } else{
//       board += "#"
//     }
//   }board += "\n"
// }


// console.log(board)


// let size = 8
// let board = ""

// for (let y=0; y<size; y++){
//   for (let x=0; x<size; x++){
//     if ((x+y)%2==0){
//       board +=" "
//     } else{
//       board += "#"
//     }
//   } board += "\n"
// }

// console.log(board)


// function countChar(word, n){
//   count = 0
//   for (let i = 0; i < word.length; i++){
//     if ((word[i]) == n){
//       count++
//     }
//   } console.log(count)
// }

// countChar("kakkerklak", "k")


// let size = 8
// let board = ""

// for (let y=0; y<size; y++){
//   for (let x=0; x<size; x++){
//     if ((x+y)%2 == 0){
//       board += " "
//     } else{
//       board += "#"
//     }
//   } board += "\n"
// }

// console.log(board)


// let animals = ["dog", "cat", "fox", "panda", "bear"]
// function getAnimal(){
//   let chosen = Math.floor((Math.random() * animals.length))
//   console.log(animals[chosen])
// }

// getAnimal()


// const calculateArea = function(width, height){
//   const area = width * height
//   return area
// }

// const calculateArea = (width, height) => {
//   const area = width * height
//   return area
// }

// const sumNumbers = number => {
//   const sum = number + number
//   return sum
// }

// const sumNumbers = number => number + number



// const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here

// const circle = {
//   circumference(){
//     return 2*r*3.14
//   },

//   area(){
//     return 3.14*Math.pow(r,2)
//   }
// }


// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

// const n = Number(prompt("Enter credit value:"))

// const account = {
//   name : "Alex",
//   balance : 0,

//   credit(){
//     return account.balance + n
//   },

//   describe(){
//      return `owner: ${account.name}, balance ${account.balance}`
//   }
// }
// console.log(account.credit())
// console.log(account.describe(3))

// let size = 8
// let board=("")

// for (let x=0; x<size; x++){
//     for (let y=0; y<size; y++){
//         if ((x+y)%2 === 0){
//         board += "#"
//         } else {
//             board += " "
//         }
//     } board += "\n"
// }

// console.log(board)

// let size = 8
// let board = ""

// for (let x=0; x<size; x++){
//     for (let y=0; y<size; y++){
//         if ((x+y)%2==0){
//             board += " "
//         } else{
//             board += "#"
//         }
//     } board += "\n"
// }

// console.log(board)

// function pow (x,n){
// let result = x
// for (let i=1; i<n; i++){
//     result *= x
// } console.log(result)
// }
// pow(2,3)


// // POWER FUNCTION
// // function pow(x,n){
// //   let result = x;
// //   for (let i = 1; i < n; i++){
// //     result *= x;
// //   }
// //   return result;
// // }



// document.querySelector("#check").addEventListener("click", checkDate)


// function checkDate(){

//     const day = document.querySelector("#day").value.toLowerCase()

//     if (day==="tuesday" || day==="thursday"){
//         console.log ("It's class day!")
//     }
//     else if (day==="saturday" || day === "sunday"){
//         console.log("It's weekend!")
//     }
//     else{
//         console.log("it's a boring day")
//     }
// }

// const animals = ["fox", "dog", "cat"]
// animals.forEach(cutie => {
//     console.log(cutie)
// })

// function pow(x,n){
//     let result = x
//     for (let i = 1; i<n; i++){
//         result *= x
//     } console.log(result)
// }

// pow(2,3)


// let fruits = ["apple", "banana", "grapes", "pear"]


// for (const noms of fruits){console.log(noms)}

// let nums = [1, 2, 3]
// nums.forEach((item, i) => {
//     nums[i] = item + 3 })

//     console.log(nums)

//     let x=0
// for (let i=0; i<nums.length; i++){
       
//         x += nums[i]
//     } 
    
//     console.log(x/nums.length)

let pets = ["cat", "dog", "bunny", "pig", "fox"]
for (let i = 0; i < pets.length; i++){
    console.log(pets[i])
}



