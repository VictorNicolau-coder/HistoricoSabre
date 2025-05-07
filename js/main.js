import {createDivOutput} from "./docHandler.js"

function update(){
    let value = document.getElementById("input").value
    if (value.trim() != "")
        createDivOutput(false);
    console.log("Veio pra ca")
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.updateBt').addEventListener('click', update);
});

document.addEventListener("keydown", function (e){
    if (e.ctrlKey && e.key.toLowerCase() == "b") 
        createDivOutput(true)
})