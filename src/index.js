module.exports = function solveEquation(equation) {
  // your implementation
  var regexp = /\-?\s?\d+/g;
  var coefficients = equation.match(regexp);

  coefficients.splice(1, 1);

  coefficients.forEach(function (currentElement, index) {
    coefficients[index] = currentElement.replace(/\s+/g, ''); +
    currentElement;
  });

  var disc = discriminant(coefficients);

  if (disc < 0) return {
    Error: 'Discriminant less than zero'
  }
  if (disc === 0) return -(coefficients[1] / (2 * coefficients[0]));

  var result = [];

  result.push(Math.round((-(coefficients[1]) + disc) / (2 * coefficients[0])));
  result.push(Math.round((-(coefficients[1]) - disc) / (2 * coefficients[0])));

  result.sort((a, b) => a - b);

  return result;
}

var discriminant = (values = []) => Math.sqrt(values[1] ** 2 - 4 * values[0] * values[2]);