const message = [];

function writeCards(addressee, event) {
        for (let i = 0; i < addressee.length; i++) {
            message.push(`Thank you, ${addressee[i]}, for the wonderful ${event} gift!`);
        debugger;
              }
        return message;
}


function countDown (number) {
    let i = (number);
    while (i > -1) {
      console.log(i);
      i--;
    } 
}

console.log(countDown(11));