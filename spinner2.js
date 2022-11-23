const spinner = ['\r|  ', '\r/  ', '\r-   ','\r\\    ','\r|    ','\r/   ','\r-   ','\r\\   ','\r| ']

let passTime = 100
for (const symbol of spinner) { //each symbol in the array
  setTimeout(() => {
    process.stdout.write(symbol);
  }, passTime);
  passTime += 200; //change the pass time each loop
}

//previously before refactor
// setTimeout(() => {
//   process.stdout.write('\r| ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\    '); 
// }, 700);
// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);
// setTimeout(() => {
// process.stdout.write('\r\\   '); 
// }, 1500);
// setTimeout(() => {
//   process.stdout.write('\r| ');
// }, 1700);