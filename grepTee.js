// grepTee // Searches for word in file, if found -> outputs word and saves to output file



const fs = require("fs");

function main() {

  const word = process.argv[2];
  const inputFile = process.argv[3];
  const outputFile = process.argv[4];


  if (!word || !inputFile || !outputFile) {

    console.log("Usage: node greptee.js <word> <inputFile> <outputFile>");
    return;
  }


  if (!fs.existsSync(inputFile)) {

    console.log("Error: file not found -> " + inputFile);
    return;
  }

  const text = fs.readFileSync(inputFile, "utf8");
  const lines = text.split("\n");


  const matches = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(word)) {
      matches.push(lines[i]);
      
    }
  }

  for (let i = 0; i < matches.length; i++) {
    console.log(matches[i]);
  }


  fs.writeFileSync(outputFile, matches.join("\n"));

  console.log("Matches found: " + matches.length);

}



main();
