export const addInteger = (num1, num2) => {
  let n1,
      n2,
      a = [],
      b = [];

  // Handle non strings
  if (typeof num1 != 'string') {
    try {
      n1 = num1.toString();
    }
    catch (error) {
      return console.error(error);
    }
  }

  if (typeof num2 != 'string') {
    try {
      n2 = num2.toString();
    }
    catch (error) {
      return console.error(error);
    }
  }
  
  // throw error if num1/num2 isn't a whole number
  if (n1.includes('.') || n2.includes('.')) {
    return console.error('Sorry! I can only add whole numbers -  I\'m thupid.');
  }

  // make initial array for setupArray
  a = n1.split('').reverse(),
  b = n2.split('').reverse();

  // set up array for get sum
  setupArrays(a, b);
  return getSum(a, b);
};

// setup arrays for getSum
function setupArrays(a, b) {
  let difference = 0;
  let aL = a.length;
  let bL = b.length;

  if (bL > aL) {
    difference = bL - aL;
    for (i = 0; i < difference; i++) {
      a.push('0');
    }
  }
  if (aL > bL) {
    difference = aL - bL;
    for (i = 0; i < difference; i++) {
      b.push('0');
    }
  }
};

// add matching (of index) elements together
function getSum(a, b) {
  let l = a.length,
      n = 0,
      c = false,
      sum = [];


  for (i = 0; i < l; i++) {
    n = Number(a[i]) + Number(b[i]);
    if (c) n += 1;

    if (n >= 10) {
      c = true;
      n -= 10;
    } else (c = false);

    sum.push(n.toString());
  }
  if (c) sum.push(1);

  return sum.reverse().join('');
}