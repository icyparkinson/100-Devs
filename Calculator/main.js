 //AC Button While Loop

 function acButton(){
    document.querySelector("#ac").textContent = "C"
}

//Assigning shortcut variable for display
const display = document.querySelector("#display")

//Clearing the calculator
document.querySelector("#ac").addEventListener("click", clearDisplay)

function clearDisplay(){
    document.querySelector("#display").textContent = 0
    document.querySelector("#ac").textContent = "AC"
}

//Assigning numbers to each button
document.querySelector("#one").addEventListener("click", oneButton)

function oneButton(){
    if (display.textContent == 0){
    display.textContent = 1
    }
    else{
    display.textContent += 1
    }
    acButton()
 }

 document.querySelector("#two").addEventListener("click", twoButton)

function twoButton(){
    if (display.textContent == 0){
    display.textContent = 2
    }
    else{
    display.textContent += 2
    }
    acButton()
 }

 document.querySelector("#three").addEventListener("click", threeButton)

 function threeButton(){
     if (display.textContent == 0){
     display.textContent = 3
     }
     else{
     display.textContent += 3
     }
     acButton()
  }

  document.querySelector("#four").addEventListener("click", fourButton)

  function fourButton(){
      if (display.textContent == 0){
      display.textContent = 4
      }
      else{
      display.textContent += 4
      }
      acButton()
   }

   document.querySelector("#five").addEventListener("click", fiveButton)

   function fiveButton(){
       if (display.textContent == 0){
       display.textContent = 5
       }
       else{
       display.textContent += 5
       }
       acButton()
    }

    document.querySelector("#six").addEventListener("click", sixButton)

    function sixButton(){
        if (display.textContent == 0){
        display.textContent = 6
        }
        else{
        display.textContent += 6
        }
        acButton()
     }

     document.querySelector("#seven").addEventListener("click", sevenButton)

     function sevenButton(){
         if (display.textContent == 0){
         display.textContent = 7
         }
         else{
         display.textContent += 7
         }
         acButton()
      }


      document.querySelector("#eight").addEventListener("click", eightButton)

      function eightButton(){
          if (display.textContent == 0){
          display.textContent = 8
          }
          else{
          display.textContent += 8
          }
          acButton()
       }


       document.querySelector("#nine").addEventListener("click", nineButton)

       function nineButton(){
           if (display.textContent == 0){
           display.textContent = 9
           }
           else{
           display.textContent += 9
           }
           acButton()
        }

        document.querySelector("#zero").addEventListener("click", zeroButton)

       function zeroButton(){
           if (display.textContent == 0){
           display.textContent = 0
           }
           else{
           display.textContent += 0
           }
           acButton()
        }

    //Assigning operators
 
    document.querySelector("#dot").addEventListener("click", dotButton)

    function dotButton(){
        if (display.textContent == 0){
        display.textContent = "."
        }
        else{
        display.textContent += "."
        }
     }
 
    document.querySelector("#plus").addEventListener("click", plusButton)

 function plusButton(){
     if (display.textContent == 0){
     display.textContent = "+"
     }
     else{
     display.textContent += "+"
     }
  }

  document.querySelector("#min").addEventListener("click", minButton)

 function minButton(){
     if (display.textContent == 0){
     display.textContent = "-"
     }
     else{
     display.textContent += "-"
     }
  }

  document.querySelector("#mult").addEventListener("click", multButton)

 function multButton(){
     if (display.textContent == 0){
     display.textContent = "*"
     }
     else{
     display.textContent += "*"
     }
  }

  document.querySelector("#div").addEventListener("click", divButton)

 function divButton(){
     if (display.textContent == 0){
     display.textContent = "/"
     }
     else{
     display.textContent += "/"
     }
  }

  //Equals button
  document.querySelector("#equal").addEventListener("click", equalButton)

  function equalButton(){
    display.textContent = eval(display.textContent)
  }


 ///// SIMPLE CALCULATOR ////////

 
 document.querySelector("#add").addEventListener("click", addMe)
 document.querySelector("#sub").addEventListener("click", subMe)
 document.querySelector("#multiply").addEventListener("click", multMe)
 document.querySelector("#divide").addEventListener("click", divMe)



 function addMe(){
    let num1 = Number(document.querySelector("#val1").value)
    let num2 = Number(document.querySelector("#val2").value)
    let z = num1 + num2
    console.log(z)
    document.querySelector("#result").innerHTML = `Result = ${z}`
 }

 function subMe(){
    let num3 = Number(document.querySelector("#val1").value)
    let num4 = Number(document.querySelector("#val2").value)
    let r = num3 - num4
    console.log(r)
    document.querySelector("#result").innerHTML = `Result = ${r}`
 }

 function multMe(){
    const num1 = Number(document.querySelector("#val1").value)
    const num2 = Number(document.querySelector("#val2").value)
    let z = num1 * num2
    console.log(z)
    document.querySelector("#result").innerHTML = `Result = ${z}`
 }

 function divMe(){
    const num1 = Number(document.querySelector("#val1").value)
    const num2 = Number(document.querySelector("#val2").value)
    let z = num1 / num2
    console.log(z)
    document.querySelector("#result").innerHTML = `Result = ${z}`
 }