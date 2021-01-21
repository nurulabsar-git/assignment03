// https://github.com/nurulabsar-git/assignment03

//Answer Number one.
function kilometerToMeter(kilometer){
    let meter = kilometer*1000;
    return meter;
}
var convertMeter = kilometerToMeter(100);
console.log(convertMeter, "meter");


//Answer Number Two.
function budgetCalculator(watch, phone, laptop){

    if(watch<=0 || phone<=0 || laptop<=0){
        return -1;
    }

    else{
    var watchPrice = watch*4200;  //[here 1$ = 84 tk]
    var phonePrice = phone*8400;
    var laptopPrice = laptop*42000;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
    }
}
var result = budgetCalculator(2, 5, 4);
console.log(result);



// Answer Number Three.
function hotelCost(day){
  var cost = 0;
  if(day<=10){
      cost = day*100;
  }
  else if(day<=20){
      var tenDaysCost = day*100;
      var remaining = day - 10;
      var afterTenDays = remaining*80;
      cost = tenDaysCost + afterTenDays;
  }
 
  else{
      var tenDaysCost = day*100;
      var afterTenDays = 10*80;
      var remaining = day - 20;
      var afterTwenty = remaining*50;
      cost = tenDaysCost + afterTenDays + afterTwenty;
  }
 return cost;
}
var totalCost = hotelCost(22);
console.log(totalCost, "Taka");



// Answer Number four.
megaFriend = ["Nurul Absar", "Absar", "Rifat", "Arafat"];
var lengthiFriend = megaFriend[0];

for(var i = 0; i>megaFriend.length; i++){
    var friendName=megaFriend[i];
    if(friendName>lengthiFriend){
        lengthiFriend = friendName;
    }
}
console.log(lengthiFriend);




/*Extra problem solve
 Question: convert meter into kilometer?
*/

function meterToKilometer(meter){
    var kilometer = meter/1000;
    return kilometer;
}
var convertKiloMeter = meterToKilometer(10000);
console.log(convertKiloMeter, "km");
