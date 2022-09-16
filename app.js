const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const btnCheck = document.querySelector("#btn-check");
const outputBox = document.querySelector("#output-div");
const body = document.querySelector('body')


function checkHandler(){
    const ip = Number(initialPrice.value);
    const curr = Number(currentPrice.value);
    const qty = Number(quantity.value);

    if(ip && curr && qty){
        calculateProfit(ip,curr,qty)
    }else{
        outputBox.innerText = "Please enter Initial Price, Quantity & Current Price of the Stocks!"
    }
}

function calculateProfit(initial, curr, qty ){

    if(initial > curr){
        let loss = (initial - curr) * qty;
        let lossPercent = ((loss / initial) * 100).toFixed(2);
        outputBox.innerText = `your loss is ${lossPercent}% which is ₹${loss} 🥺`
        if(lossPercent >= 50){
            body.style.backgroundColor = "red";
        }else{
            body.style.backgroundColor = "green";
        }
        
    }else if(curr> initial){
        let profit = (curr - initial) * qty;
        let profitPercent = ((profit / initial) * 100).toFixed(2);
        outputBox.innerText = `Your profit is ${profitPercent}% which is ₹${profit} 💵`
        body.style.backgroundColor = "green";
    }else {
        outputBox.innerText = "no pain no gain and no gain no pain!"
        body.style.backgroundColor = "paleturquoise"
    }
}
btnCheck.addEventListener('click',checkHandler )
