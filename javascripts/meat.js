// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {"turkey": 0.99, //////////////ALL PRIVATE VARIABLES////////////////////////
  					"salami": 1.50,
  					"bacon": 2.00,
  					"none": 0.00};

  // Augment the original object with another method
  maker.addMeat = function(meat) {
    return meatPrices[meat];  //<- passing "turkey" will return 0.99
  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);