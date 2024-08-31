const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString('utf8').split('\n');

// hail string: px py pz @ vx vy vz
const parseHail = (h) => {
	let t = h.split(' ');
	return {
		px: t[0],
		py: t[1],
		py: t[2],
		vx: t[4],
		vy: t[5],
		vz: t[6],
	};
};

const pairs = input.reduce(function (result, value, index, array) {
	if (index % 2 === 0) result.push(array.slice(index, index + 2));
	return result.map((r) => parseHail(r));
}, []);

const part1 = () => {
	for (let [h1, h2] of pairs) {
	}
};
console.log('Part1 ', part1());
// console.log("pairs ", pairs);
