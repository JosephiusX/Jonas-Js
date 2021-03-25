'use strict';

function calcAge(birthYear) {
    const age =  2037 - birthYear; // age is only avalible in the calc age scope
   
function printAge(){
    let output = `${firstName} you are ${age}, born in ${birthYear}`
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true; // var is function scoped not block scoped
        // Creating New variable with same name as outer scope's variable
        const firstName = 'Steven'; // in this case even though first name is defined globally above it is being called within the block therefor js chooses the variable in the block because it comes first 
        
        output = 'NEW OUTPUT!'//Reassigning outer scope's variable

        const str =`Oh, and your a millenial, ${firstName}`;
        console.log(str);
        console.log(millenial);

        function add(a,b) {
            return a + b;
        }

    }
    // console.log(str); // error str cannot be accessed outside of the if block
    console.log(millenial);// with var the variable can be accessed outside of the bkock // old syntax
    // console.log(add(2,3));// can not be accessed ourside of the block but only for strict mode, works fine with strict mode turned off
    console.log(output);
}
    printAge();
     
    return age;
}

const firstName = 'jonas'; 
calcAge(1991);
// console.log(age); // age is not defined because it is only avalible within the calc age function
// printAge(); // also not defined 