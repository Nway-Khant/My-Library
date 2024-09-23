//Changed the values and operators to test if the algorithm meets all conditions
var x = 50;
var exp1 = x > 55;
var exp2 = x < 40;

// Checked if both expressions are true using &&
if (exp1 && exp2) {
  console.log('True ✅ True ✅');

  // If both conditions are not true, checked if expression1 is true
} else if (exp1) {
  console.log('True ✅ False ❌');

  // If expression1 is not true, then checked if expression2 is true
} else if (exp2) {
  console.log('False ❌ True ✅');

  // If none of the conditions above evaluated to true, both expressions must be false
} else {
  console.log('False ❌ False ❌');
}

// var x = prompt("Choose Your Number");
// var y;
// if (x === 29) {
//   y = "Got it!";
// } else if (x < 29) {
//   y = "Less than";
// } else if (x > 29) {
//   y = "Greater than";
// } else {
//   y = "None of";
// }
