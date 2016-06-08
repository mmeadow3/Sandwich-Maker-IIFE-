// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {"white": 0.99,
  					"wheat": 1.50,
  					"sourdough": 2.00,
  				     "none": 0.00};

  // Augment the original object with another method
  maker.addBread = function(bread) {
    return breadPrices[bread];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);