console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Init global variables
var basket = [];
const maxItems = 5;

// Return true if the basket contains more than the maximum number of items,
// and false if it does not.
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

// If basket is empty, return 'nothing'
// Otherwise, log each item of the basket.
const listItems = () => {
  
  console.log('The basket contains:');
  
  if (basket.length === 0) {
    console.log('nothing.');
    return null;
  }

  for (item of basket) {
    console.log(item);
  }
}

// Testing listItems()
console.log('Adding an orange...')
addItem('orange');
listItems();

// Empty basket
const empty = () => { basket = [] };

// Testing empty()
console.log('Now emptying basket.')
empty();
listItems();

// *************
// Stretch Goals!

console.log('***********');

// Testing isFull()
// Trying to add to a full basket, expecting false
basket.push('bananas', 'pears', 'blueberries', 'oranges', 'grapefruits');
listItems();
console.log('Can I add another item to the basket?', addItem('hamburger')); // expecting false
listItems(); // expecting same as above, no hamburger

console.log('***********');

// Find index of an item; if that item doesn't exist in the array,
// return null. Otherwise, remove item from the array.
const removeItem = (item) => {
  let x = basket.indexOf(item);
  return x === -1 ? null : basket.splice(x, 1);
}
// sidebar: I know this could be shortened to one line, as follows:
// return basket.indexOf(item) === -1 ? null : basket.splice(basket.indexOf(item), 1);
// however, I decided to list the basket index as a variable for legibility.

// Testing removeItem()
console.log('I am removing;', removeItem('bananas'));
listItems(); // expecting same array as above, minus bananas

// Testing removeItem() failure case
console.log('I am removing hamburger:', removeItem('hamburger')); // expecting null