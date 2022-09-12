// Code your solutions in this file
// function writeCards(name) {
//     for (let i = 0; i < name.length; i++) {
//         console.log(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
//     }
// }

function writeCards(names) {
    const returnArray = []
    let i = 0;
    while (i < names.length) {
      console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
      returnArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
      i++;
    }
    return returnArray
  }
  function countDown(number) {
    let i = number;
    while (i >= 0) {
      console.log(i);

      i--;
    }
  }
