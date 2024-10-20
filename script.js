const makeChange = (c) => {
  let change = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

  let remainingCents = c; // The remaining amount in cents

  // Quarters
  change.q = Math.floor(remainingCents / 25);
  remainingCents = remainingCents % 25;

  // Dimes
  change.d = Math.floor(remainingCents / 10);
  remainingCents = remainingCents % 10;

  // Nickels
  change.n = Math.floor(remainingCents / 5);
  remainingCents = remainingCents % 5;

  // Pennies
  change.p = remainingCents;

  return change;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

