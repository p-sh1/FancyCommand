# FancyCommand
--- 
A FancyCommand that combines grep and tee.

## What it is 

It simple searches a file for a word, if word is found, it prints the output in the local console, and also saves the same lines to an output file, along with showing a final matched words count!

## How to use
node grepTee.js (word) (inputFile) (outputFile)

*reccomended to have the input sample and grepTee in the same file!*

## Notes

- If any argument is missing, it prints a usage message.
- If the input file does not exist, it prints a "file not found" error.
  
## Requirements
- Node.js

