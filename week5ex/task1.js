const fs = require("fs");
const readline = require("readline");
function reverse(value) {  
    return Array.from(
      String(value || '')
    ).reverse().join('')
  }
async function processLineByLine() {
        /* Read stream and interface */
        const inputStream = fs.createReadStream(process.argv[2]);
        const lineReader = readline.createInterface({
          input: inputStream,
          terminal: false,
        });
       
        /* Push each line to a new array. */
        const results = [];
        for await (const line of lineReader) {
            results.push(reverse(line));
        }
       
        /* Return a new array, reversed. */
        return results.reverse();
       }
       
       /* Do something with the result. */
       processLineByLine().then(res => console.log(res));