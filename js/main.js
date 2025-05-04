import {createDivOutput} from "./docHandler.js"

function update(){
    let value = document.getElementById("input").value
    if (value.trim() != "")
        createDivOutput();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.updateBt').addEventListener('click', update);
});

document.addEventListener("keydown", function (e){
    if (e.ctrlKey && e.key.toLowerCase() == "b"){
        document.querySelector('.updateBt').addEventListener('click', createDivOutput(true));
    }
})