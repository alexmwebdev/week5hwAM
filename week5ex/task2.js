const fs = require("fs");
const readline = require("readline");
function reverse(value) {  
    return Array.from(
      String(value || '')
    ).reverse().join('')
  }
async function processLineByLine() {
       
        /* Push each line to a new array. */
        const results = [];
        for (i = 2; i <= process.argv.length-1; i++) {
            /* Read stream and interface */
            try {
                var inputStream = fs.createReadStream('task2/' + process.argv[i]);
                var lineReader = readline.createInterface({
                    input: inputStream,
                    terminal: false,
                });
                for await (const line of lineReader) {
                    results.push(line);
                }
            } catch (error) {
                console.log("Unable to load file " + process.argv[i]);
            }
        }
        return results;
       }
       
       /* Do something with the result. */
       processLineByLine().then(res => console.log(res));