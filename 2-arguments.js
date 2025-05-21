// Check the number of command-line arguments 
const args = process.argv.slice(2);
 
console.log(process.argv)

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
