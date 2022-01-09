document.getElementById("breakfast").addEventListener("click", breakfast)
    function breakfast(){
        document.querySelector(".containerb").classList.remove("hidden")
        document.querySelector(".containerl").classList.add("hidden")
        document.querySelector(".containerdi").classList.add("hidden")
        document.querySelector(".containerde").classList.add("hidden")
        document.querySelector(".containers").classList.add("hidden")
    }

document.getElementById("lunch").addEventListener("click", lunch)
    function lunch(){
        document.querySelector(".containerb").classList.add("hidden")
        document.querySelector(".containerl").classList.remove("hidden")
        document.querySelector(".containerdi").classList.add("hidden")
        document.querySelector(".containerde").classList.add("hidden")
        document.querySelector(".containers").classList.add("hidden")
    }

document.getElementById("dinner").addEventListener("click", dinner)
    function dinner(){
        document.querySelector(".containerb").classList.add("hidden")
        document.querySelector(".containerl").classList.add("hidden")
        document.querySelector(".containerdi").classList.remove("hidden")
        document.querySelector(".containerde").classList.add("hidden")
        document.querySelector(".containers").classList.add("hidden")
    }

document.getElementById("dessert").addEventListener("click", dessert)
    function dessert(){
        document.querySelector(".containerb").classList.add("hidden")
        document.querySelector(".containerl").classList.add("hidden")
        document.querySelector(".containerdi").classList.add("hidden")
        document.querySelector(".containerde").classList.remove("hidden")
        document.querySelector(".containers").classList.add("hidden")
    }

document.getElementById("shake").addEventListener("click", shake)
    function shake(){
        document.querySelector(".containerb").classList.add("hidden")
        document.querySelector(".containerl").classList.add("hidden")
        document.querySelector(".containerdi").classList.add("hidden")
        document.querySelector(".containerde").classList.add("hidden")
        document.querySelector(".containers").classList.remove("hidden")
    }