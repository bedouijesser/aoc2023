const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString('utf8').split('\n');
// const input = fs.readFileSync('./sample.txt').toString('utf8').split('\n');
// const input = fs.readFileSync('./sample2.txt').toString('utf8').split('\n');

const part1 = () => {
	let res = 0;
    for (let line of input) {
        if (!line) continue;
		let tr = 0;
        let [wn, cn] = line
			.split(':')[1]
			.trim()
			.split('|')
			.map((e) => e.split(' ').filter((e) => e));
		// console.log("winning: ", wn, "current: ", cn);
        for (let [i,n] of cn.entries()) {
            if (wn.includes(n)) {
                tr = !tr ? 1 : tr*2;

            }
        }
        res += tr
	}
    return res;
};
console.log('Part1 ', part1());

const part2 = () => {
    console.log(input.join('\n'));
    let winMap = {}
    for (let [ind, line] of input.entries()) {
		if (!line) continue
        let tr = 0;
        let [wn, cn] = line
			.split(':')[1]
			.trim()
			.split('|')
			.map((e) => e.split(' ').filter((e) => e));
        for (let [i,n] of cn.entries()) {
            if (wn.includes(n)) {
                tr += 1;
            }
        }
        for (let x=0; x<=tr && input[x]; x++) {
            // console.log(ind, winMap, winMap[ind+1], x)
            winMap[ind+x+1] = x===0? (winMap[ind+1]||0) +1 :  (winMap[ind+x+1]||0) + (winMap[ind+1] || 1)  
        }
        // console.log("line"+ind,tr, winMap)
	}
    return Object.entries(winMap).reduce((a,c)=> a+c[1],0);
};
console.log('Part2 ', part2());
