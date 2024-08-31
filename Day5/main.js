const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString('utf8').split('\n');
// const input = fs.readFileSync('./sample.txt').toString('utf8').split('\n');

const parseInput = () => {
	const map = { seeds: input[0].split(':')[1].trim().split(' ').map(Number) };
	let cat = 0;
	for (let i = 1; i < input.length - 1; i++) {
		if (!input[i]) continue;
		if (input[i].match(/.+ map/g)) {
			cat++;
			map[cat] = [];
			continue;
		}
		map[cat].push(input[i].split(' ').map(Number));
	}

	return map;
};
const parsedInput = parseInput();

const part1 = () => {
	let minLocation = Infinity;
	for (let seed of parsedInput.seeds) {
		let location = seed;
		for (let i = 1; i < 8; i++) {
			let temp = location;
			inner: for (let sl of parsedInput[i]) {
				// console.log(seed,sl)
				if (temp >= sl[1] && temp <= sl[1] + sl[2]) {
					// console.log("shift detected", i, sl,temp +" > "+(temp +sl[0]-sl[1]) )
					temp += sl[0] - sl[1];
					break inner;
				}
			}
			location = temp;
		}
		// console.log(location);
		minLocation = Math.min(minLocation, location);
	}

	return minLocation;
};
console.log('Part1 ', part1());

const part2 = () => {
	let minLocation = Infinity;
	const seeds = [];
	let seedsArr = parsedInput.seeds;
	for (let i = 0; i < seedsArr.length - 1; i++) {
		if (i % 2) continue;
		let rangeS = seedsArr[i];
		let rangeEnd = seedsArr[i] + seedsArr[i + 1];
		for (let seed = rangeS; seed<rangeEnd; seed ++) {
			let location = seed;
			for (let i = 1; i < 8; i++) {
				let temp = location;
				inner: for (let sl of parsedInput[i]) {
					// console.log(seed,sl)
					if (temp >= sl[1] && temp <= sl[1] + sl[2]) {
						// console.log("shift detected", i, sl,temp +" > "+(temp +sl[0]-sl[1]) )
						temp += sl[0] - sl[1];
						break inner;
					}
				}
				location = temp;
			}
			// console.log(location);
			minLocation = Math.min(minLocation, location);
		}
        console.log("finished range" ,rangeS, rangeEnd-1)
	}

	// console.log(seeds);
	return minLocation;
};
console.log('Part2 ', part2());
