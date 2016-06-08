// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condoPrices = {"mustard": 0.99,
  					"pickles": 1.50,
  					"tomatoes": 2.00,
  					"none": 0.00};

  // Augment the original object with another method
  maker.addCondos = function(condiments) {
    return condoPrices[condiments];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);