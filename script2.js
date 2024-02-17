var subtotal, taxed, newSub;
var discount = false;

var itemPrice = {"hotdog": 4.65, "fry": 3.75, "drink": 1.89};
var itemQuant = {};

// Prompts
itemQuant["numDogs"] = prompt("How many hotdogs would you like?");
itemQuant["numFries"] = prompt("How many fries would you like?");
itemQuant["numSoda"] = prompt("How many sodas would you like?");

subtotal = (itemQuant.numDogs * itemPrice.hotdog) + 
            (itemQuant.numFries * itemPrice.fry) + 
            (itemQuant.numSoda * itemPrice.drink);

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
document.getElementById("hot-dog").innerHTML = itemQuant["numDogs"];
document.getElementById("fry").innerHTML = itemQuant["numFries"];
document.getElementById("soda").innerHTML = itemQuant["numSoda"];

document.getElementById("hot-dog-price").innerHTML = "$"+itemQuant.numDogs * itemPrice.hotdog;
document.getElementById("fry-price").innerHTML = "$"+itemQuant.numFries * itemPrice.fry;
document.getElementById("soda-price").innerHTML = "$"+itemQuant.numSoda * itemPrice.drink;

document.getElementById("subtotal").innerHTML = showMoney(subtotal);
if (discount) {
    document.getElementById("discount").innerHTML = showMoney(subtotal * 0.1);
} else {
    document.getElementById("discount").innerHTML = "-$0.00";

}
document.getElementById("new-sub").innerHTML = showMoney(newSub);
document.getElementById("tax").innerHTML = showMoney(taxed);
document.getElementById("fin-total").innerHTML = showMoney(newSub + taxed);
