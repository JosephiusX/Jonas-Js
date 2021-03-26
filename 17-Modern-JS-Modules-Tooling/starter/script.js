///////////////// 269.Exporting and importing modules ////////////////////////
///////////////// 269.Exporting and importing modules ////////////////////////
///////////////// 269.Exporting and importing modules ////////////////////////
/*
// Importing moduld
// all import statements are hoisted to the top
// import { addToCart,
//          totalPrice as price, // the as changes the name of the variable as it is imported to this file
//          totalQuantity} from './shoppingCart.js'; // importing the addToCart function from ./shoppingCart.js , I can also add the other exported variable names in the same block
// addToCart('bread', 5); // this works as if the function was in this file
// console.log(price, tq); // they log as if the variables were from this page
console.log("importing module");

// import * as ShoppingCart from './shoppingCart.js'; // somehow this imports everything at once
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, {addToCart, totalPrice as price, tq} from './shoppingCart.js'; // the export defauld value is now called add
// add('pizza', 2); // results of the default export in the shoppingCart.js file
// console.log(price); // not good practice to do it this way

import add, { cart } from './shoppingCart.js'; // the export defauld value is now called add
add('pizza', 2); // results of the default export in the shoppingCart.js file

// imports are a live connection to exports

add('bread', 5);
add('apples', 4);

console.log(cart);
*/

///////////////////////////// 269. The Module Pattern //////////////////////////
///////////////////////////// 269. The Module Pattern //////////////////////////
///////////////////////////// 269. The Module Pattern //////////////////////////
/*

*/

const ShoppingCart2 = (function() { // write a function as a immidietly invoked expression ( for when we need data returned once ), we can save it to a variable
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) { 
        cart.push({ product, quantity});
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
    };

    const orderStock = function (product, quantity) { 
        cart.push({ product, quantity});
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    };
})();

ShoppingCart2.addToCart('apple' , 4);
ShoppingCart2.addToCart('apple' , 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined