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

// let pets = ["cat", "dog", "bunny", "pig", "fox"]
// for (let i = 0; i < pets.length; i++){
//     console.log(pets[i])
// }

// pets.forEach((item) => {
//     console.log(item)
// })


// const calculateArea = (height, width) => {
//     const area = width * height
//     return area
// }


// let fruits = ["apples", "bananas", "grapes", "oranges"]
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// for (let noms of fruits){console.log(noms)}




// document.querySelector("#check").addEventListener("click", check)




// function pow(x,n){
//     let result = x
//     for (let i=1; i<n; i++){
//         result *= x
//         console.log(result)
//     }
// }

// pow(2,3)

// const sumNumbers = number => number + number

// function purpleParty(){
//     document.querySelector("body").style.background="purple"
// }


// for (const cuties of animals){console.log(cuties)}

// for (const nomnoms of fruits){console.log(nomnoms)}


// let movies = ["movie1", "movie2", "movie3"]

// movies.forEach((item,i) => {
//     document.querySelector("h2").innerText += item
// })

// for (let i = 0; i < movies.length; i++){
//     document.querySelector("h2").innerText += movies[i]
// }


// let nums = [1,2,3,4,5]
// let newArray = []

// function getEven(){
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] % 2 === 0){
//             newArray.push(nums[i])
//         }
//     }
// }
// getEven()

// console.log(newArray)

// function getEvenWithEach(){
//     nums.forEach((item, i) =>{
//         if (item%2 === 0){
//             newArray.push(item)
//         }
//     })
// }

// getEvenWithEach()
// console.log(newArray)

// let animals = ["dog", "cat", "rabbit", "mouse"]
// for (const cuties of animals){console.log(cuties)}

// let nums = [1,2,3,4,5]
// // let product = 1
// for (let i = 0; i < nums.length; i++){
//     product *= nums[i]
// }
// console.log(product)

// nums.forEach((item,i) => {
//     product *= item
// })

// console.log(product)

// newArray = []
// function onlyEven(){
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i]%2 === 0){
//             newArray.push(nums[i])
//         }
//     }
// }

// onlyEven()
// console.log(newArray)

// function forEven(){
//     nums.forEach((item, i) => {
//         if (item%2===0){
//             newArray.push(item)
//         }
//     })
// }

// forEven()
// console.log(newArray)

// let animals = ["dog", "cat", "bunny", "panda"]
// animals.forEach((item, i) => {
//   console.log(item)
// }
  
// );



// let hash = "#"
// for (let i = 1; i <= 7; i++){
//   console.log(hash)
//   hash = hash + "#"
// }
// let arr = [1,2,3,4,5]
// let newArray = []
// function takeNumbers(){
  
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2===0){
//       newArray.push(arr[i])
//     }
//   } console.log(newArray)
// }
// takeNumbers()

// let listOfNums = [1,2,3,4,5]
// product = 1
// function getProduct(arr){
//   for (let i = 0; i < arr.length; i++){
//     product *= arr[i]
//   } console.log(product)
// }

// getProduct(listOfNums)

// const product = listOfNums.reduce((currentProduct, item) => {
//   return item * currentProduct
// }, 1)

// console.log(product)

// function pow(x,n){
// let result = x
// for (let i = 1; i < n; i++){
//   result *= x
//   console.log(result)
// }
// }

// pow(2,3)

// let sorted = arr.sort((a,b) => a-b)

// const product = listOfNums.reduce((currentProduct, item) => {
//   return currentProduct * item
// }, 1)

// let sorted = arr.sort((a,b) => a-b)

// const calculateArea = (width, height) => {
//   const area = width * height
//   return area
// }

// let candy = ["mars", "oreos", "candy"]
// for (const sweets of candy){console.log(sweets)}

// function evenOnly(arr){
//   let newArray = []
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2===0){
//       newArray.push(arr[i])
//     }
//   } console.log(newArray)
// }
// let arr = [1,2,3,4,5]
// evenOnly(arr)


// let kwee = arr.sort((a,b) => a-b)

// let woot = arr.reduce((difference, item) => {
//   return difference - item},0)

//   console.log(woot)


// function multNums(arr){
//   let product = arr.reduce((current, item) => current * item, 1)
//   console.log(product)
// }

// multNums([2,4,5])


// let nums = [1,2,3,4]
// nums.forEach((value, index) => console.log(value))


// const sumNumbers = number => number + number

// function convertsReverse(str){
//   let reversed = str.split("").reverse().join("")
//   console.log(reversed)
// }

// convertsReverse("howdy")

// function disemvowel(str){
//   let newString = ""
//   let vowels = {
//     "a" : true,
//     "e" : true,
//     "i" : true,
//     "o" : true,
//     "u" : true,
//   }
//   for (let i=0; i<str.length; i++){
//     let letter = str[i].toLowerCase()
//     if (!vowels[letter]){
//       newString+= str[i]
//     }
//   }console.log(newString)
// }

// disemvowel("hello")


// let nums = [1,2,3,4,5]
// console.log(nums)
// let mini = Math.min(...nums)
// let max = Math.max(...nums)
// return(`${max} ${mini}`)

// function pow(x,n){
//     let result = x
//     for (let i = 1; i < n; i++){
//         result *= x
//     } console.log(result)
// }
// pow(2,3)

// function reversifyStr(str){
//     let newStr = str.split("").reverse().join("")
//     console.log((newStr))
// }

// reversifyStr("Hello")


// let sorted = arr.sort((a,b) => a-b)

// function randomize(){
//     let random = Math.floor(Math.random() * nums.length)
//     console.log(nums[random])
// }

// randomize()


// let size = 8
// let board = ""
// function addHash(){
//     for (let x=0; x<size; x++){
//         for (let y=0; y<size; y++){
//             if ((x+y)%2===0){
//                 board += " "
//             } else{
//                 board += "#"
//             }
//         }board += "\n"
//     } console.log(board)
// }

// addHash()

// nameOfArray.pop()

// function newArray(arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i]%2 ===0){
//             newArr.push(arr[i])
//         }
//     } console.log (newArr)
// }

// newArray(nums)


// for (const number of nums){
//     console.log(number)
// }

// let reduced = nums.reduce((acc, c) => acc * c,1)
// console.log(reduced)


// sorted = nums.sort((a,b) => b-a)
// console.log(sorted)

// function digitize(n) {
//     let x = n.toString()
//     let strX = (x.split("").reverse())
//     let numX = strX.map(str => Number(str))
//     return numX
//   }

//   console.log(digitize(89))

// let nums = [1,2,3,4,5]

// function reduction(arr){

// let sum = arr.reduce((acc, c) => acc + c, 0)
// console.log(sum)}

// reduction(nums)


// const CalculateArea = (width, height) => {
//   const area = width * height
//   return area
// }

// let sorted = nums.sort((a,b) => a-b)

// nums.forEach(item => {
//   console.log(item)
// })

// for (let i = 1; i < 20; i++){
//   if (i%3 === 0 && i%5 ===0){
//     console.log("FizzBuzz")}
//     else if (i%3 === 0){
//       console.log("Fizz")
//     }
//     else if (i%5 === 0){
//       console.log("Buzz")
//     }
//     else{
//       console.log(i)
//     }
//   }


// function findSmallestInt(arr){
//   let mini = Infinity
//  for (let i = 0; i < arr.length; i++){
//   if ((arr[i]) < mini){
//     mini = (arr[i])
//   } 
//  } console.log(mini)
// }

// findSmallestInt([2,4,6,1,-5])


// let sorted = arr.sort((a,b)=> (a-b))

// let reversed = array.split("").reverse().join("")


// console.log(nums.reduce((acc, c) => acc + c,0))

// let sorted = arr.sort((a,b)=> (a-b))


// function pow(x,n){
//     let result = x
//     for (let i = 1; i < n; i++){
//         result *= x
//     } console.log(result)
// }

// pow(2,4)

// let numbers = [2, 5, 9, 10]

// numbers.forEach(value=>{
//     console.log(value)
// })


// document.getElementById("purple").addEventListener("click", purpleParty)

// `${fName}, ${lName}`
// let newArray = []
// numbers.forEach(value=>{
    
//     if (value%2===0){
//         newArray.push(value)
//     }}
// )

// console.log(newArray)


// for (qty of numbers){console.log(qty)}

// let size = 8
// let grid=""

// function makeChess(){
// for (let x = 0; x<size; x++){
//     for (let y = 0; y<size; y++){
//         if ((x+y)%2===0){
//             grid+=" "
//         }
//         else{
//             grid+="#"
//         }
//     } grid +="\n"
// }console.log(grid)
// }

// makeChess()


// let size = 8
// let board = ""
// function addHash(){
//     for (let x=0; x<size; x++){
//         for (let y=0; y<size; y++){
//             if ((x+y)%2===0){
//                 board += " "
//             } else{
//                 board += "#"
//             }
//         }board += "\n"
//     } console.log(board)
// }

// addHash()

// for (item of numbers){console.log(item)}

// function purpleParty(){
//     document.querySelector("body").style.backgroundColor=purple;
// }

// function multiNums(arr){
//     let five = arr.reduce((acc, c) => acc * c, 1)
//     console.log(five)
// }

// multiNums(numbers)

// for (items of numbers){console.log(items)}

// console.log(numbers.sort((a,b) => b-a))

// document.querySelector(".check").addEventListener("click", check)

// const calculateArea = (width, height) => {
//     const area = width * height
//     return area
// }

// const calculateArea = (width, height) => {
//     const area = width * height
//     return area
// }

// let fruits = ["apples", "oranges", "bananas"]

// fruits.forEach (item => console.log(item))

// console.log("dog")

// function chess(){
// let grid = ""
// let size = 8
//     for (let x=0; x<size; x++){
//         for (let y=0; y<size; y++){
//             if ((x+y)%2===0){
//                 grid += "#"
//             }
//             else{
//                 grid += " "
//             }
//         }  grid += "\n"
//     } console.log(grid)
// } 

// chess()


// let animals = ["dogs", "cats", "mice"]
// animals.forEach(pet => console.log(pet))

// for (const pet of animals){console.log (pet)}

// let van = [2,5,6]
// let vanR = van.reduce((acc, c) =>{
//     return acc + c
// }, 0)

// console.log(vanR)

// for (const numbers of animals){console.log(numbers)}

// let numberList = [2, -45, 6, 20]
// let newList = []

// function min(list){
//     return(Math.min(...list))
// }

// function max(list){
//     return(Math.max(...list))
// }

// function findAverage(array){
//     if (array.length===0){
//       return 0
//     } else{
//       let sum = array.reduce((acc,c) => 
//       acc + c, 0)
//       let average = sum/array.length
//       return average
//       }
//   }

// console.log(findAverage(newList))

// function simpleMultiplication(number){
//     if (number%2===0){
//         number *= 8
//     } else{
//         number *= 9
//     }
//     return number

    // async function hello() {
    //     return await Promise.resolve("Hello");
    //   };
      
    //   hello().then(alert);
      

    // function century(year) {
    //   let cent = year/100
    //   if (Number.isInteger(cent)){
    //     return(cent)
    //   }
    //   else{
    //     return(Math.ceil(cent))
    //   }
    // }

    // let jumblyList = [1, 2, "a", "b", 3]

    // let result = jumblyList.filter(value => Number.isInteger(value))
    // return result

    // function isTriangle(n1,n2,n3){
    //   const isTriangle = (n1,n2,n3) => {
    //   if ((n1+n2 >n3) && (n1+n3 > n2) && (n2+n3 > n1)){
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // }

  

    // console.log(isTriangle(7,2,2))

    // const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    //   if (mpg * fuelLeft >= distanceToPump){
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
    // }

    // console.log(zeroFuel(50,25,2))


// let alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","u","w","x","y","z"]

//     function  isPangram(string){
//       let lower = string.toLowerCase()
//       console.log(lower)
//       let broken = lower.split("")
//       console.log(broken)
//       let pan = alpha.every(x => lower.includes(x))
//       console.log(pan)
//     }
//     isPangram("the quick brown fox jumps over the lazy dog")



// let beta = "better".split("")
    // function isBeta(string){
    //   let test = string.toLowerCase()
    //   let betatest=beta.every(x => test.includes(x))
    //   console.log (betatest)
    // }

  //   isBeta("bette life")

  // let alpha = "abcdefghijklmnopqrstuvwxyz".split

  // function isPangram(string){
  //   let lower = string.toLowerCase()
  //   let pan = alpha.every(x => lower.includes(x))
  //   return pan
  // }

// let myInput = ["apples", "bananas"]

//   function input(array){
//     if (myInput.includes("oranges")){
//       myInput.push("hello")
//     } else{
//       myInput.push("goodbye")
//     }
//     console.log(myInput)
//   }

// let testString = "ATTGC"

// function convertArray(string){
//   let stringToArray = string.split("")
//   return(stringToArray)
// }

// convertArray(testString)

// function DNAstrand(dna){
//   let output = []
//   for (let i = 0; i < dna.length; i++){
//     if (dna[i] === "A"){
//       output.push("T")
//     }
//     else if (dna[i] === "T"){
//       output.push("A")
//     }
//     else if (dna[i] === "C"){
//       output.push("G")
//     }
//     else if (dna[i] === "G"){
//       output.push("C")
//     }
//     else{
//       console.log(output)
//     }
//   } let finalOut = output.join("")
//   return(finalOut)
// } 

// DNAstrand(convertArray(testString))


// function findSum(num){
//   let x = 0;
//   for (let i = 0; i <=num; i++){
//     x += i
//   } console.log(x)
//   return x
// }
// findSum(10)

// let eleSum = elements.reduce((acc,c) => acc + c, 0)

// console.log(eleSum)

// console.log(findSum(10) - eleSum)

// let elements = [1,2,3,4,5,7,8,9,10]
// let lightning = [0,1,2,1,0]
// let rainbow = [1,2,3,4,3,2,1]
// let weather = [2,3,2]
// let cloud = []


// // function findEvenIndex(arr){
// //   let left = 0
// //   let right = 0
// //   if (arr.length === 0){
// //     console.log(-1)
// //   }

// //   for (let i = 0; i < arr.length; i++){
// //     right = arr.slice(i+1).reduce((acc,c) => acc+c,0)
// //     left = arr.slice(0,i).reduce((acc,c) => acc+c,0)
// //     if (right === left){
// //       console.log(`when i is ${i}, the element is ${arr[i]} left is ${left} and right is ${right}`)
// //       console.log(`${i} is the answer`)
// //       return i
// //     }
// //     else{
// //     console.log(`when i is ${i}, the element is ${arr[i]} left is ${left} and right is ${right}`)
// //       console.log("not this index")
// //     }
// // }}

// // findEvenIndex(elements)



// function findIndex(arr){
//   let left = 0
//   let right = 0
//   if (arr.length === 0){
//     return (-1)
//   }

//   for (let i = 0; i < arr.length; i++){
//     right = arr.slice(i+1).reduce((acc,c) => acc+c,0)
//     left = arr.slice(0,i).reduce((acc,c) => acc+c,0)
//     if (right === left){
//       return i
//     }
// } return -1
// }

// console.log(findIndex(rainbow))

// document.querySelector("h1").classList.


// function camelize(str){
// let splitStr = str.split("-")
// let mapSplit = splitStr.map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
// let finalWord = mapSplit.join("")
// console.log(finalWord)
// return(finalWord)
// }

// camelize("background-color")

// function filterRange(arr, a,b){
//   let filtered = arr.filter(x => (a <= x && x <= b))
//   console.log(filtered)
//   return (filtered)
// }

// let arr = [5, 3, 8, 1]
// filterRange(arr, 1, 4)

// function filterRangeInPlace(arr, a, b){
//   for (let i = 0; i < arr.length; i++){
//     if ((arr[i] < a) || (arr[i] > b)) {
//       arr.splice (i,1)
//     } 
//   } console.log(arr)
// }

// filterRangeInPlace(arr,1,4)


// arr.sort( (a,b) => b-a)
// console.log(arr)

// function copySorted(arr){
//   console.log(  ( arr.slice() ) .sort() )
// }

// copySorted(arr)


// let firstName = prompt("What is your first name?")
// let lastName = prompt("What is your last name?")
// console.log(`Your name is ${firstName} ${lastName}.`)

// let day = prompt("Pick a day of the week")
// let lowerDay = day.toLowerCase()
// if (lowerDay === "monday") {
//   console.log(`After ${lowerDay} is Tuesday`)
// }
// else if (lowerDay === "tuesday") {
//   console.log(`After ${lowerDay} is Wednesday`)
// }
// else if (lowerDay === "wednesday") {
//   console.log(`After ${lowerDay} is Thursday`)
// }
// else if (lowerDay === "thursday") {
//   console.log(`After ${lowerDay} is Friday`)
// }
// else if (lowerDay === "friday") {
//   console.log(`After ${lowerDay} is Saturday`)
// }
// else if (lowerDay === "saturday") {
//   console.log(`After ${lowerDay} is Sunday`)
// }
// else if (lowerDay === "sunday") {
//   console.log(`After ${lowerDay} is Monday`)
// }
// else{
//   console.log("You didn't put in a day of the week.")
// }

// let hours = Number(prompt("What is the hour?"))
// let minutes = Number(prompt("What are the minutes?"))
// let seconds = Number(prompt("What are the seconds?"))

// if ((hours > 23) || (hours <= 0)){
//   console.log("Hours don't make sense")
// }

// if ((minutes > 60) || (minutes <= 0)){
//   console.log("Minutes don't make sense")
// }

// if ((seconds > 60) || (seconds <= 0)){
//   console.log("Seconds don't make sense")
// }

// if ((minutes == 59) && (seconds == 59)){
//   if (hours == 23){
//     hours = 0
//   } else{
//     hours += 1
//   }
//   minutes = 0
//   seconds = 0
//   console.log(`${hours}h${minutes}m${seconds}s`)

// } else if (seconds == 59){
//   if (minutes == 59){
//     minutes = 0
//   } else{
//     minutes += 1
//   }
//   seconds = 0
//   console.log(`${hours}h${minutes}m${seconds}s`)
// }

// else{
//     console.log(`${hours}h${minutes}m${seconds+1}s`)
//     }

// let count = prompt("Give a number: ")

// for (let i = 1; i <= count; i++){
//   console.log(i)
// }

// let i = 1
// while (i <= count){
//   console.log(i)
//   i++
// }



// for (let i = 1; i <= count; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
//   else {
//     console.log(`${i} is odd`)
//   }
// }

// let askNum = Number(prompt("Guess a number: "))
// while (askNum > 9){
//   askNum = prompt("Go lower: ")
// }
// while (askNum < 2){
//   askNum = prompt("Go higher")
// }
// console.log(`${askNum} x 1 = ${Number(askNum) * 1}`)
// console.log(`${askNum} x 2 = ${Number(askNum) * 2}`)
// console.log(`${askNum} x 3 = ${Number(askNum) * 3}`)
// console.log(`${askNum} x 4 = ${Number(askNum) * 4}`)
// console.log(`${askNum} x 5 = ${Number(askNum) * 5}`)
// console.log(`${askNum} x 6 = ${Number(askNum) * 6}`)
// console.log(`${askNum} x 7 = ${Number(askNum) * 7}`)
// console.log(`${askNum} x 8 = ${Number(askNum) * 8}`)
// console.log(`${askNum} x 9 = ${Number(askNum) * 9}`)
// console.log(`${askNum} x 10 = ${Number(askNum) * 10}`)

// let answer = prompt("Give me a word: ")
// while ((answer.toLowerCase() != "yes") && (answer.toLowerCase() != "no")){
//   answer = prompt("Give me another word: ")
// }
// console.log("success!")


// let firstName = prompt("Enter first name: ")
// let lastName = prompt("Enter last name: ")
// function sayHello(firstName, lastName) {
//   const message = `Hello, ${firstName} ${lastName}!`;
//   return message;
// }
// console.log(sayHello(firstName, lastName))

// // Square the given number x
// function square1(x) {
//   return (x*x)
// }

// // Square the given number x
// const square2 = x => {return x*x}

// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25

// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25

// for (let i = 1; i <= 10; i++){
//   console.log(square1(i))
// }

// function showMin(a,b){
//   if (a < b){
//     console.log(a)
//   }
//   else if (a > b){
//     console.log(b)
//   }
//   else{
//     console.log("same number")
//   }
// }


// function calculate(a, op, b){
//   if (op === "+"){
//     return(a + b)
//   }
//   else if (op === "-"){
//     return(a - b)
//   }
//   else if (op === "*"){
//     return(a * b)
//   }
//   else if (op === "/"){
//     return(a / b)
//   }
// }

// console.log(calculate(4, "+", 6));  // Must show 10
// console.log(calculate(4, "-", 6));  // Must show -2
// console.log(calculate(2, "*", 0));  // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

// function isAnagram(test, original){
//   let origSplit = original.toLowerCase().split("").sort().join("")
//   let testSplit = test.toLowerCase().split("").sort().join("")
//     if (origSplit === testSplit){
//       return true
//     }
//     else{
//       return false
//     }
//   }
// }

// isAnagram("DeathCubeK", "Buckethead")

// document.querySelector("#animeButton").addEventListener("click", magic)


// function magic(){
//   let linkstuff = document.querySelector("input").value
//   console.log("Magic happens")
//   console.log(linkstuff)
//   let animeID = linkstuff.split("/")[4]
//   console.log(animeID)
// }

// function sumDigits(num){
//   let numberArr = num.toString().split("")
//   for (let i = 0; i < numberArr.length; i++){
//       numberArr[i] = (parseInt(numberArr[i]))
//       console.log(numberArr)
//     }
//   let sum = numberArr.reduce((acc, c) => acc + c, 0)
//   console.log(sum)
//   return (sum)
// }



// function sumDigits(num){
//   let toInt = Math.abs(Number(num))
//   console.log(toInt)
//   let numberArr = toInt.toString().split("")
//     // for (let i = 0; i < numberArr.length; i++){
//     //     numberArr[i] = (parseInt(numberArr[i]))
//     //     console.log(numberArr)
//       // }
//     let sum = numberArr.reduce((acc, c) => +acc + +c, 0)
//     console.log(sum)
//     return (sum)
// }

// sumDigits(-23)

// function even_or_odd(number) {
//   let answer = (number%2 === 0) ? "Even" : "Odd"
//   return answer
// }

// console.log(even_or_odd(4))

// let passArr = [1, 2, 10, 50, 5]

// function solution(nums){
//   return passArr.sort(function(a,b){return a-b})
// }

// console.log(solution(passArr))


// function Calculator() {
//   this.methods = {
//     "-" : (a,b) => a - b,
//     "+" : (a,b) => a + b,
//   }
// }


// console.log( calc.calculate("3 + 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8


// let mouse = {
// color : "black",
// brand : "microsoft",
// shape : "round",
// size : "small",

// leftClick(){
//   console.log("Left clicked")
// },

// rightClick(){
//   console.log("Right clicked.")
// },

// scrollWheel(){
//   console.log("scrolly")
// }
// }

// console.log(mouse)



// function Streetfighter(name, hairColor, outfit, shoes){
//   this.name = "Loli"
//   this.hairColor = "pink"
//   this.outfit = "dress"
//   this.shoes = "sneakers"
//   this.skill = function(){
//     console.log("Haiyaa!")
//   }
//   this.battleCry = function(){
//     console.log("I'm gonna win!")
//   }
// }


// let n = 123456
// let x = Array.from(String(n), Number)

// console.log(x)

// function removeChar(str){
// let str = ("chai").split("")
// console.log(str)
// str.splice(0,1)
// console.log(str)
// str.splice(str.length-1, 1)
// console.log(str)

// function removeChar(str){
//   let result = str.split("")
//   result.splice(0,1)
//   console.log(result)
//   result.splice(result.length-1, 1)
//   console.log(result)
//   return (result)
// }

// removeChar("bobby")

// function changeName(name){
// let array = name.split(" ")
// let first = array[0].split("")[0].toUpperCase()
// let last = array[1].split("")[0].toUpperCase()

// console.log(array)
// console.log(first)
// console.log(last)

// }

// changeName("robert pierce")
// //desired output: R.P

// function defineSuit(card){
//   if (card.includes(♣)){
//     return "clubs"
//   }
// }

// let sentence = "Is this a question?"
// if (sentence.includes("?")){
//   console.log("true")
// } else{
//   console.log("false")
// }

// let multWords = "I will be a jr. dev by the end of the year"
// multWords = multWords.replace("jr. dev", "software engineer")
// console.log(multWords)

// function rps(){
//   let result = Math.random()
//   if (result < 0.3333){
//     return ("rock")
//   } else if (result < 0.6666){
//     return ("paper")
//   } else {
//     return ("scissors")
//   }
// }
// rps()

// function play(move){
//   let computer = rps()
//   if ( ( move === "rock" && computer === "paper") ||
//   ( move === "scissors" && computer === "rock") ||
//   ( move === "paper" && computer === "scissors") )
//   {console.log (`Computer threw a ${computer}. You lose.`)

//   } else if ( move === "rock" && computer === "scissors"){
//     console.log (`Computer threw a ${computer}. You win!`)
//   } else if (( move === "scissors") && (rps() === "rock")){
//     console.log (`Computer threw a ${computer}. You lose.`)
//   } else if (( move === "scissors") && (rps() === "paper")){
//     console.log (`Computer threw a ${computer}. You win!`)
//   } else if (( move === "paper") && (rps() === "scissors")){
//     console.log (`Computer threw a ${computer}. You lose.`)
//   } else if (( move === "paper") && (rps() === "rock")){
//     console.log (`Computer threw a ${computer}. You win!`)
//   } else{
//     console.log("You tied.")
//   }
// } 

// play("scissors")

// let arNum = [2,4,6]
// let sumNum = arNum.reduce((acc, c) => acc + c, 0)
// console.log(sumNum)
// let squareNum = arNum.map(x => x**2)
// console.log(squareNum)

// function takesString(str){
//   return(str.split("").reverse().join(""))
// }

// function isPall(str){
//   if (str === takesString(str)){
//     console.log("true")
//   } else{
//     console.log("false")
//   }
// }

// isPall("leonoel")

// function MakeTony(charName, hairColor, shoeColor, numOfHands){
// this.name = charName
// this.hair = hairColor
// this.shoe = shoeColor
// this.numOfHands = 2
// this.shout = function(){
//   console.log("Hiya!")
// }
// this.skill = function(){
//   console.log("My skill!")
// }
// }

// let icyTony = new makeTony("Icy", "Blonde", "Red", "2")

// console.log(icyTony)

// /**
//  * Definition for isBadVersion()
//  * 
//  * @param {integer} version number
//  * @return {boolean} whether the version is bad
//  * isBadVersion = function(version) {
//  *     ...
//  * };
//  */

// /**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */
//  var solution = function(isBadVersion) {
//   /**
//    * @param {integer} n Total versions
//    * @return {integer} The first bad version
//    */
//   return function(n) {
//       let left = 1
//       let right = n
//       while (left < right){
//         let mid = Math.floor (  (left + right) / 2  )
//         if (isBadVersion(mid)){
//           right = mid
//         } else{
//           left = mid + 1
//         }
//         }
//       }
//   };
// ;


// var search = function(nums, target) {
    
//   let left = 0,
//       right = nums.length-1,
//       mid
  
//   while (left < right){
//       mid = Math.floor( (left + right) / 2)
//       if (nums[mid] == target)
//           return mid
//       if (nums[mid] > target)
//           right = mid
//       else
//           left = mid
      
//   } return -1
// };

// console.log(search(nums, target))

// var search = function(nums, target) {
//   var lo = 0,
//       hi = nums.length - 1,
//       mid;

//   while (lo <= hi) {
//       mid = Math.floor((lo + hi) / 2);
//       if (nums[mid] == target)
//           return mid;
//       if (nums[mid] < target)
//           lo = mid + 1;
//       else
//           hi = mid - 1;
//   }

//   return -1;
// };

// let nums = [-1, 0, 3, 5, 9, 12]
// let target = 14

//  var searchInsert = function(nums, target) {
//   let left = 0,
//       right = nums.length,
//       mid;
//   while (left < right){
//       mid = left + Math.floor((right - left) / 2)
//       if (nums[mid] === target){
//         console.log(`${mid} is mid. ${left} is left and ${right} is right.`)
//           return mid
//       }else if (nums[mid] > target){
//         console.log(`${mid} is mid. ${left} is left and ${right} is right.`)
//           right = mid
//       } else{
//         console.log(`${mid} is mid. ${left} is left and ${right} is right.`)
//           left = mid+1
//       }
//   } return left
// };

// console.log(searchInsert(nums,target))



// 2, 3, 4, 5
// lo + ((hi - lo) / 2)

// 2 + 5 = 7 / 2 = 3
// 2 = 3

let list = [1, 2, 3, 4, 5]
// list.unshift(list.pop())
// console.log(list)

function rotate (arr, k){
  for (let i = 0; i < k; i++){
    arr.unshift(arr.pop())
  }
}

rotate(list, 5)
console.log(list)