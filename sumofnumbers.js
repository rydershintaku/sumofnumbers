function sumFor(data) {
// for -loop
  let sum = 0;
  for (let i = 0; i < data.length; i++) sum += data[i];
  return sum;
}

function sumWhile(data) {
  let sum = 0;
  let num = data.length - 1;
  while (num >= 0) {
    sum += data[num--];
  }
  return sum;
}

function sumRecursion(data) {
  // recursion
  return (data.length === 0) ? 0 : data[0] + sumRecursion(data.slice(1));
}


function sumTheSimpleWay(data) {
  // underscore
  return _.size(data);
}
