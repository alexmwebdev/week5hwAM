const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
       
        /* Push each line to a new array. */
        for (i = 2; i < process.argv.length; i++) {
            /* Read stream and interface */
            let resultsi = [];
            try {
                var inputStream = fs.createReadStream('task2/' + process.argv[i]);
                var lineReader = readline.createInterface({
                    input: inputStream,
                    terminal: false,
                });
                for await (const line of lineReader) {
                    resultsi.push(line);
                }
                console.log(resultsi);
            } catch (error) {
                console.log("Unable to load file " + process.argv[i]);
            }
        }
       }
       
       /* Do something with the result. */
processLineByLine();