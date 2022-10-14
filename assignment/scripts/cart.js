console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
var basket = [];

const addItem = (item) => {
  basket.push(item);
  return true;
}

console.log('Basket is empty:', basket);
console.log('Now adding an apple, expecting "true":');
console.log(addItem('apple'));

const listItems = () => {
  for (item of basket) {
    console.log(item);
  }
}

console.log('Adding an orange...')
addItem('orange');
console.log('Listing items below:');
listItems();

const empty = () => { basket = [] };

console.log('Now emptying basket:')
empty();

console.log('Listing items below:');
listItems();