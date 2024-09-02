const fs = require('fs');
// const input = fs.readFileSync('./sample.txt').toString('utf8').split('\n');
const input = fs.readFileSync('./input.txt').toString('utf8').split('\n');
const times = input[0].split(':')[1].trim().split(' ').filter(Boolean).map(Number);
const distances = input[1].split(':')[1].trim().split(' ').filter(Boolean).map(Number);

// T = Total Time, D = Total Distance, t = hold time, d= distance traveled
// d(t) = t * (T - t)
// t (T - t) = D; t(T-t) - D = 0; tT - t2 - D = 0; -t^2 +Tt - D = 0; t^2-Tt+D = 0;
// t = (T +-sqrt(T^2-4*D))/2

const part1 = () => {
	let res = 0;
	for (let i = 0; i < times.length; i++) {
		let T = times[i];
		let D = distances[i] + 1;
		const discriminant = T * T - 4 * D;
		if (discriminant < 0) continue;

		let min = Math.ceil((T - Math.sqrt(discriminant)) / 2);
		let max = Math.floor((T + Math.sqrt(discriminant)) / 2);
		if (min > max) continue;

		if (!res) res = 1;
		res *= max - min + 1;
	}
	return res;
};
console.log('Part1 ', part1());

const part2 = () => {
	let res = 0;

	let T = Number(times.map(String).join(''));
	let D = Number(distances.map(String).join('')) + 1;
	const discriminant = T * T - 4 * D;

	let min = Math.ceil((T - Math.sqrt(discriminant)) / 2);
	let max = Math.floor((T + Math.sqrt(discriminant)) / 2);

	if (!res) res = 1;
	return max - min + 1;
};
console.log('Part2 ', part2());
