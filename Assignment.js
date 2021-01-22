// Problem KilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer/1000;
    return meter;
}
var result = kilometerToMeter(30);
console.log(result);

// Problem budgetCalculator

function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop){
    var total = noOfWatch*50 + noOfPhone*100 + noOfLaptop*500;
    // as per watch costs 50, per phone costs 100, per laptop costs 500
    return total;
}
var result =  budgetCalculator(2, 2, 2);
console.log(result);

// Problem Calculation of hotelCost

function hotelCost(stay) {
    var cost = 0;

    if (stay <= 10) {
        cost = stay * 100;
    }
    else if (stay <= 20) {
        var costForFirstTenDays = 10 * 100;
        var remainingDays = stay - 10;
        var costFromTwentyonthDay = remainingDays * 80;
        cost = costForFirstTenDays + costFromTwentyonthDay;
    }
    else {
        var costForFirstTenDays = 10 * 100;
        var costFromTwentyonthDay = 10 * 80;
        var remainingDays = stay - 20;
        var costFromThirtyfistDay = remainingDays * 50;
        cost = costForFirstTenDays + costFromTwentyonthDay + costFromThirtyfistDay;
    }
    return cost;
}

var totalCost =  hotelCost(31)
console.log(totalCost);

// problem megaFriend

var friendName = [ "Ayesa", "Mita", "Tanzim"];
var megaFriend = friendName[0];
for (var i = 0; i < friendName.length; i++){
    var maxString = friendName[i];
    if(maxString > megaFriend){
        megaFriend = maxString;
    } 
}
console.log(megaFriend);