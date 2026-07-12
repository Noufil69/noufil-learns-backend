const prices=[100,200,350,500,16548,69420,69696969420];
console.log("All prices");
prices .forEach(function(price){
    console.log("$"+price);
});
const expensive=prices.filter(function(price){
    return price>250;
});
console.log("expensive items"+ expensive);
const withTax=prices.map(function(price){
    return price*18;
});
const result=prices.filter(function(price){return price>250;})
.map(function(price){return price*18;});
console.log("expensive items with tax", result);