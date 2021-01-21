
//Question Number one.
/*function kilometerToMeter(kilometer){
    let meter = kilometer*1000;
    return meter;
}

var convertMeter = kilometerToMeter(10);
console.log(convertMeter);
*/
/*
//Question Number Two.
function budgetCalculator(watch, phone, laptop){
   var watchPrice = watch*50;
   var phonePrice = phone*100;
   var laptopPrice = laptop*500;
   var totalPrice = watchPrice + phonePrice + laptopPrice;
   return totalPrice;
}

var result = budgetCalculator(2, 5, 4);
console.log(result);
*/

function hotelCost(day){
  var cost = 0;
  if(day<=10){
      cost = day*100;
  }
  else if(day<=20){
      var tenDayCost = day*100;
      var remaining = day - 10;
      var afterTenDay = remaining*80;
      cost = tenDayCost + afterTenDay;
  }
 
  else{
      var tenDayCost = day*100;
      var afterTenDay = 10*80;
      var remaining = day - 20;
      var afterTweenty = remaining*50;
      cost = tenDayCost + afterTenDay + afterTweenty;
  }
 return cost;

}

var totalCost = hotelCost(10);
console.log(totalCost);