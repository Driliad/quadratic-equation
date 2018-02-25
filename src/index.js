module.exports = function solveEquation(equation) {
  // your implementation
  var regexp =  /\-?\s?\d+/g;
  var getValues = equation.match(regexp);
  getValues.splice(1, 1);

  getValues.forEach(function(elemnt, index) {
    getValues[index] = elemnt.replace(/\s+/g, '');
    getValues[index] = Number(getValues[index]);
  });

  var result = [];

  // console.log(getValues);
  var discr = discriminant(getValues);
  // console.log(discr);
  // console.log(getValues[1], discr, getValues[0]);

  result.push(Math.round((-(getValues[1]) + discr) / (2 * getValues[0])));
  result.push(Math.round((-(getValues[1]) - discr) / (2 * getValues[0])));

  result.sort((a, b) =>  a - b);

  return result;
}

var discriminant = (values = []) => Math.sqrt(values[1]**2 - 4 * values[0] * values[2]);
