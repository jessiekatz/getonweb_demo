var numDogs, numFries, numSoda, subtotal, taxed;
var newSub;
var discount = false;

var hotdogPrice = 4.65;
var fryPrice = 3.75;
var drinkPrice = 1.89;


// Prompts
numDogs = prompt("How many hotdogs would you like?");
numFries = prompt("How many fries would you like?");
numSoda = prompt("How many sodas would you like?");

var hotdogTotal = numDogs * hotdogPrice;
var fryTotal = numFries * fryPrice;
var drinkTotal = numSoda * drinkPrice
subtotal = hotdogTotal + fryTotal + drinkTotal;

if (subtotal >= 25) {
    discount = true;
    newSub = subtotal * 0.9;
} else {
    newSub = subtotal;
}

taxed = 0.0625 * newSub;

function showMoney(num) {
    var str = "$";
    num = Math.round(num * 100)/100;
    
    if (num % 1 == 0) 
        str += num + '.00';
    else if ((num*10) % 1 == 0)
        str += num.toString() + '0';
    else
        str += num;

    return str;
}

// Display on html
document.getElementById("hot-dog").innerHTML = numDogs;
document.getElementById("fry").innerHTML = numFries;
document.getElementById("soda").innerHTML = numSoda;

document.getElementById("hot-dog-price").innerHTML = showMoney(hotdogTotal);
document.getElementById("fry-price").innerHTML = showMoney(fryTotal);
document.getElementById("soda-price").innerHTML = showMoney(drinkTotal);

document.getElementById("subtotal").innerHTML = showMoney(subtotal);
if (discount) {
    document.getElementById("discount").innerHTML = showMoney(subtotal * 0.1);
} else {
    document.getElementById("discount").innerHTML = "-$0.00";

}
document.getElementById("new-sub").innerHTML = showMoney(newSub);
document.getElementById("tax").innerHTML = showMoney(taxed);
document.getElementById("fin-total").innerHTML = showMoney(newSub + taxed);
