'use strict'

let array1 = ["Gino", "Pippo"];
let array2 = ["Sorbillo", "Bastianich", "Munchen", "Salvatiello"];
let addArray = '';

do{
    if(array1.length < array2.length) {
        addArray = prompt('Inserire nuovo elemento');
        array1.push(addArray);
    } else if (array1.length > array2.length) {
        addArray = prompt('Inserire nuovo elemento');
        array2.push(addArray);
    } else {
        console.log('Le liste sono uguali');
    }

} while(array1.length < array2.length || array1.length > array2.length); 

console.log('Sei fuori');
console.log(array1);
console.log(array2);