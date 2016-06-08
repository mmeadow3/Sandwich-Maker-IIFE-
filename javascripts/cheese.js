// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {"american": 0.99,
  					"provolone": 1.50,
  					"swiss": 2.00,
  				     "none": 0.00};

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
    return cheesePrices[cheese];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);