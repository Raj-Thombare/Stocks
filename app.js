const btnCheck = document.querySelector("#btn-check");
const userInput = document.querySelectorAll(".input");
const output = document.querySelector("#output-div");

btnCheck.addEventListener("click",checkBtnHandler)

function checkBtnHandler(){
    let spp = userInput[0]; //Stock Purchase Price
    let sq = userInput[1];  //Stock Quantity
    let scp = userInput[2]; //Stock Current Price
    
};