// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
 //   console.log(`I'm ${age} years old.  Happy birthday to me!`);
//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
//        debugger;
//    }
//   return gifts;
//}

//wrapGifts(gifts);

let message = [];


function writeCards(addressee, event) {
        for (let i = 0; i < addressee.length; i++) {
            message.push(`Thank you, ${addressee[i]}, for the wonderful ${event} gift!`);
            console.log()
        debugger;
              }
        return message;
}


//console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

function countDown (number) {
    let i = (`${number}`);
    while (i > -1) {
  console.log(i--);
    } 
}

console.log(countDown(3));