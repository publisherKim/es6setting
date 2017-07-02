'use strict';


// es6 function : block scope variaous declare
const senteces = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' }
];

// es6 function : object destructure
function say({ subject, verb, object }) {
    // es6 function : template literals
    // ` backtick
    console.log(`${subject} ${verb} ${object} !var`);

}

// es6 function : for of
for (let s of senteces) {
    say(s);
}