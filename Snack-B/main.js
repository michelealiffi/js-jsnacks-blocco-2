'user strict'

let input = '';
const arrayList = ['cane', 'gatto', 'pesce', 'topo', 'uccello'];

function trovaIndice(input) {

    input = prompt('Digitare il nome dell`elemento che si vuole cercare nell`array');

    debugger

    if(arrayList.includes(input)) {
        console.log(arrayList.indexOf(input));
    } else {
        console.log(arrayList.indexOf(input));
    }

}

trovaIndice(input);