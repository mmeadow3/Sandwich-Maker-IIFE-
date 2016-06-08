// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping ;
var finalToppings = "";
// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var breadChooser = document.getElementById("bread-chooser");
var condoChooser = document.getElementById("condo-chooser");

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////GIVES RADIO BUTTONS TO REACT TO FUNCTIONS////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
 selectedTopping = event.target.value;
 chosenTopping = SandwichMaker.addMeat(selectedTopping);
  console.log(chosenTopping);
  // Determine the price of the topping chosen
finalSandwichPrice += chosenTopping;
finalToppings += selectedTopping + ", ";
  // Add the topping to the SandwichMaker to increase the total price
});
//////////////////////END MEAT MAKER FUNCTION///////////////////////////////////////////
///////////////////////START CHEESE MAKER FUNCTION/////////////////////////////////////
cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
 selectedTopping = event.target.value;
 chosenTopping = SandwichMaker.addCheese(selectedTopping);
  console.log(chosenTopping);
  // Determine the price of the topping chosen
finalSandwichPrice += chosenTopping;
finalToppings += selectedTopping + ", ";
  // Add the topping to the SandwichMaker to increase the total price
});
///////////////////////END CHEESE MAKER FUNCTION/////////////////////////////////////
///////////////////////START BREAD MAKER FUNCTION/////////////////////////////////////
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
 selectedTopping = event.target.value;
 chosenTopping = SandwichMaker.addBread(selectedTopping);
  console.log(chosenTopping);
  // Determine the price of the topping chosen
finalSandwichPrice += chosenTopping;
finalToppings += selectedTopping + " bread, ";
  // Add the topping to the SandwichMaker to increase the total price
});
///////////////////////END BREAD MAKER FUNCTION/////////////////////////////////////////
///////////////////////START CONDIMENTS MAKER FUNCTION/////////////////////////////////////
condoChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
 selectedTopping = event.target.value;
 chosenTopping = SandwichMaker.addCondos(selectedTopping);
  console.log(chosenTopping);
  // Determine the price of the topping chosen
finalSandwichPrice += chosenTopping;
finalToppings += selectedTopping;
  // Add the topping to the SandwichMaker to increase the total price
});
///////////////////////END CONDIMENTS MAKER FUNCTION/////////////////////////////////////


//////////////////FUNCTION FOR FINAL PRICE////////////////////////////////////
var button = document.getElementById("make-sandwich")
button.addEventListener("click", function () {
// console.log(finalSandwichPrice);
output.innerHTML = `<p>` + "Your total price is $" + finalSandwichPrice.toFixed(2) + `</p>`;
toppings.innerHTML = `<p>` + "Your sandwich will contain: " + finalToppings + `</p>`;
});





