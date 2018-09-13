module.exports = function solveEquation(equation) {
	const regexp = /\-?\s?\d+/g;
	const coefficients = equation.match(regexp);

	coefficients.splice(1, 1);

	coefficients.forEach((currentElement, index) => {
		coefficients[index] = currentElement.replace(/\s+/g, '');
		+currentElement;
	});

	const disc = discriminant(coefficients);

	if (disc < 0)
		return {
			Error: 'Discriminant less than zero',
		};
	if (disc === 0) return -(coefficients[1] / (2 * coefficients[0]));

	const result = [];

	result.push(Math.round((-coefficients[1] + disc) / (2 * coefficients[0])));
	result.push(Math.round((-coefficients[1] - disc) / (2 * coefficients[0])));

	result.sort((a, b) => a - b);

	return result;
};

var discriminant = (values = []) =>
	Math.sqrt(values[1] ** 2 - 4 * values[0] * values[2]);
