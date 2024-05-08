'use strict'

let userArray = [];
let input = '';
let stop = 'stop';

function contaElementi(userArray) {
    do{
        input = prompt('Inserire un elemento nella lista');
        userArray.push(input);
        stop = prompt('Vuoi inserire altri elementi? Scrivere continua per aggiungere altri elementi o stop per fermare')

    } while (stop !== 'stop');
}

contaElementi(userArray);

console.log(userArray.length);