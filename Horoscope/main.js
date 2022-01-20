document.querySelector("#button").addEventListener("click", checkDate)

function checkDate(){

    const checkMonth = document.querySelector("#month").value.toLowerCase()
    const checkDay = document.querySelector("#day").value
    const sign = document.querySelector("#sign")
    const signInfo = document.querySelector("#signInfo")


    if ((checkMonth === "december" && checkDay >= 21) || (checkMonth === "january" && checkDay <= 20)){
        sign.innerHTML = "Capricorn"
        signInfo.innerHTML = "Info here"
    }
        else if 
            ((checkMonth === "january" && checkDay >= 21) || (checkMonth === "february" && checkDay <= 18)){
                sign.innerHTML = "Aquarius"
                signInfo.innerHTML = "Info here"
        }
        else if 
            ((checkMonth === "february" && checkDay >= 19) || (checkMonth === "march" && checkDay <= 20)){
                sign.innerHTML = "Pisces"
                signInfo.innerHTML = "Info here"
        }
        else if 
            ((checkMonth === "march" && checkDay >= 21) || (checkMonth === "april" && checkDay <= 19)){
                sign.innerHTML = "Aries"
                signInfo.innerHTML = "Info here"
        }
        else if 
            ((checkMonth === "april" && checkDay >= 20) || (checkMonth === "may" && checkDay <= 20)){
                sign.innerHTML = "Taurus"
                signInfo.innerHTML = "Info here"
        }
        else if 
            ((checkMonth === "may" && checkDay >= 21) || (checkMonth === "june" && checkDay <= 20)){
                sign.innerHTML = "Gemini"
                signInfo.innerHTML = "Info here"
        }
        else if 
            ((checkMonth === "june" && checkDay >= 21) || (checkMonth === "july" && checkDay <= 22)){
                sign.innerHTML = "Cancer"
                signInfo.innerHTML = "Info here"
        }
        else if 
            ((checkMonth === "july" && checkDay >= 23) || (checkMonth === "august" && checkDay <= 22)){
                sign.innerHTML = "Leo"
                signInfo.innerHTML = "Info here"
        }
        else if 
            ((checkMonth === "august" && checkDay >= 23) || (checkMonth === "september" && checkDay <= 22)){
                sign.innerHTML = "Virgo"
                signInfo.innerHTML = "Info here"
        }
        else if 
            ((checkMonth === "september" && checkDay >= 23) || (checkMonth === "october" && checkDay <= 22)){
                sign.innerHTML = "Libra"
                signInfo.innerHTML = "Info here"
        }
        else if 
            ((checkMonth === "october" && checkDay >= 23) || (checkMonth === "november" && checkDay <= 21)){
                sign.innerHTML = "Scorpio"
                signInfo.innerHTML = "Info here"
        }
        else if 
            ((checkMonth === "november" && checkDay >= 22) || (checkMonth === "december" && checkDay <= 21)){
                sign.innerHTML = "Sagittarius"
                signInfo.innerHTML = "Info here"
        }

    }

