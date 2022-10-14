console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Init global variables
var basket = [];
const maxItems = 5;
const isFull = () => { return basket.length >= maxItems };

// Return false if basket is full, otherwise add item to basket
const addItem = (item) => {
  if (isFull()) { return false };
  basket.push(item);
  return true;
}

// Testing addItem()
console.log('Basket is empty:', basket);
console.log('Now adding an apple, expecting "true":');
console.log(addItem('apple'));

// Log each item in the basket
const listItems = () => {
  for (item of basket) {
    console.log(item);
  }
}

// Testing listItems()
console.log('Adding an orange...')
addItem('orange');
console.log('Listing items below:');
listItems();

// Empty basket
const empty = () => { basket = [] };

// Testing empty()
console.log('Now emptying basket:')
empty();
console.log('Listing items below:');
listItems();

// Stretch Goals!

// Testing isFull()
// Pushing 5 items into the basket
basket.push('bananas', 'pears', 'blueberries', 'oranges', 'grapefruits');

console.log(addItem('hamburger')); // expecting false

