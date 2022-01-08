// YOUTUBE BG PICKER

document.querySelector("li").addEventListener('click', purpleParty)

function purpleParty(){
document.querySelector("body").style.backgroundColor = "purple"
document.querySelector("body").style.color = "white"
}




// WHAT DAY IS TODAY
document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

if (day === "tuesday" || day === "thursday"){
  alert("It is class day.")
} else if (day === "saturday" || day === "sunday"){
  alert("It's the weekend!")
} else {
  alert("It's a boooring day.")
}
}

// POWER FUNCTION
// function pow(x,n){
//   let result = x;
//   for (let i = 1; i < n; i++){
//     result *= x;
//   }
//   return result;
// }

// alert(pow(2,3))


// ANGRY PARENT SIMULATOR

document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName
}

// document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`


function pow(x,n){
    result = x;
    for (let i = 1; n > i; i++){
        result *= x;
    }
    return result;
}

alert(pow(2,4))