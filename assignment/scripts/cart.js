console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
var basket = [];

const addItem = (item) => {
  basket.push(item);
  return true;
}

const listItems = () => {
  for (item of basket) {
    console.log(item);
  }
}

const empty = () => { basket = [] };