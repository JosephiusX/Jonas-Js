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
*/

////////////////////////////// 270.Common JS Modules ////////////////////////////
////////////////////////////// 270.Common JS Modules ////////////////////////////
////////////////////////////// 270.Common JS Modules ////////////////////////////

/*

export.addTocartfunction (product, quantity) { // this dosent work in the browser but it will work in node js
    cart.push({ product, quantity});
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
};

// Import
const { addToCart } = require('./shoppingCart.js');
*/

//////////////////// 271. A Brief Introduction to the Command Line /////////////////////
//////////////////// 271. A Brief Introduction to the Command Line /////////////////////
//////////////////// 271. A Brief Introduction to the Command Line /////////////////////
/*

*/

///////////////////////// 272.Introduction to NPM ////////////////////////////
///////////////////////// 272.Introduction to NPM ////////////////////////////
///////////////////////// 272.Introduction to NPM ////////////////////////////
/*

npm init : creates a package.json file, 
npm i lodash-es : lodash 
npm i : installs dependancies listed in package.json file


import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        {product: 'bread', quantity: 5 },
        {product: 'pizza', quantity: 5 },
    ],
    user: {loggedIn: true}, 
};
const stateClone = Object.assign({}, state); // this is what lodash is for ??? 
const stateDeepClone = cloneDeep(state);  // gonna have to circle back

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
*/

/////////////////// 273.Bundling with Parcel and NPM scripts ////////////////////
/////////////////// 273.Bundling with Parcel and NPM scripts ////////////////////
/////////////////// 273.Bundling with Parcel and NPM scripts ////////////////////
/*
npm i parcel --save -dev : Error troubleshooting at about 7:00

the dist folder is created with the files that will be distributed

        setting up start and build scripts
"start": "parcel index.html",
"build": "parcel build index.html"

had to change the main in package.json to   "main": "script.html",

we can install parcel glabally : npm i parcel -g, however it is ideal to install it locally to stay up to date

*/


// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
    cart: [
        {product: 'bread', quantity: 5 },
        {product: 'pizza', quantity: 5 },
    ],
    user: {loggedIn: true}, 
};
const stateClone = Object.assign({}, state); // this is what lodash is for ??? 
const stateDeepClone = cloneDeep(state);  // gonna have to circle back

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if(module.hot) { // parcel,  helps the page not dreload alot 
    module.hot.accept();
}