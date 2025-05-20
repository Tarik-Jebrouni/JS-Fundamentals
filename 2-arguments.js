// Check the number of command-line arguments 
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("1 argument");
} else {
  console.log(`${args.length} arguments`);
}
