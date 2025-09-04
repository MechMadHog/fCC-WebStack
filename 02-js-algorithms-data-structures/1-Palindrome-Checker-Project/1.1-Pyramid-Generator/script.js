/* console.log("String"); */

const character = "#";
const count = 8;
const rows = [];
/* 
Everything I am adding - isn't staying in the app 
We have stated building the piramid
*/
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);