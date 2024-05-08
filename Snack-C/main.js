'use strict'

let input = '';
let arrayList = [];
let stop = 'stop';

function stampa(input) { 
    do{
        input = prompt('Inserire un elemento nella lista');
        arrayList.push(input);
        stop = prompt('Vuoi inserire altri elementi? Scrivere continua per aggiungere altri elementi o stop per fermare')
    } while (stop !== 'stop');

    let string = arrayList.join(', ');
    console.log(string);

}

stampa(input);