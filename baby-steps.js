const args = process.argv.slice(2);
const sum = args.reduce((acc, val) => {
  return acc + parseInt(val);
}, 0);
console.log(sum);
learnyounode;
