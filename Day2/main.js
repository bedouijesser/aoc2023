const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString('utf8').split('\n');

const part1 = () => {
	let res = 0;
	input.forEach((g, i) => {
		if (!g) return;
		const matches = g.match(/:.*([1-9]\d{2,}|[2-9]\d)|((1[3-9]) red)|((1[4-9]) green)|((1[5-9]) blue)/g);

		if (matches) return;
		res += i + 1;
	});

	return res;
};

console.log('Part1: ', part1());

const getMinimumCount = (g, type) => {
	const matches = g.match(new RegExp(`\\d+ ${type}`, 'g'));
	if (!matches) return 1;
	return matches.map((str) => +str.split(' ')[0]).reduce((a, c) => (c > a ? c : a), 0);
};

const part2 = () => {
	let res = 0;
	input.forEach((g) => {
		if (!g) return;

		let mr = 1,
			mg = 1,
			mb = 1;

		mr = getMinimumCount(g, 'red');
		mb = getMinimumCount(g, 'blue');
		mg = getMinimumCount(g, 'green');

		res += mr * mb * mg;
	});

	return res;
};

console.log('Part2: ', part2());
