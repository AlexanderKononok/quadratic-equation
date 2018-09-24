module.exports = function solveEquation(equation) {
  // your implementation
  let D, x1, x2;
  let arr = equation.split(' ');
  let a = arr[0];
  let b = arr[3] + arr[4];
  let c = arr[7] + arr[8];
  let result = [];

  D = b * b - 4 * a * c;

  if (D > 0) {
    x1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
    x2 = Math.round((-b - Math.sqrt(D)) / (2 * a));
  }
  if (D == 0) {
    x1 = Math.round(-b / (2 * a));
  }
  if (D < 0) {
    return "no roots";
  }
  
  if (x1 > x2) {
    result.push(x2, x1);
  } else {
    result.push(x1, x2);
  }

  return result;
}
