'use strict'

let input = '';
let arrayList = [];
let stop = 'stop';
let newArrayList = arrayList;

function inserisciInTesta(input) { 
    do{
        input = prompt('Inserire un elemento nella lista');
        arrayList.push(input);
        stop = prompt('Vuoi inserire altri elementi? Scrivere continua per aggiungere altri elementi o stop per fermare')
    } while (stop !== 'stop');

    let popped = newArrayList.unshift(input = prompt('Inserire un elemento nella lista'));
    console.log(popped);
    console.log(newArrayList);

}

inserisciInTesta(input);