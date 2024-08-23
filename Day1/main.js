const fs = require("fs");

const input = (fs.readFileSync("./input.txt")).toString("utf8").split("\n");

const part1 = input.reduce((a,c) => {
    const numbers = c.match(/\d+/g)
       
    return a + +numbers[0][0]*10 + +numbers[numbers.length-1].at(-1)
},0)   
        
console.log("Part1: ", part1)
         
// Part 2 solution
const numberMap = {
    one: "1", two: "2", three: "3", four: "4", five: "5",
    six: "6", seven: "7", eight: "8", nine: "9"
};

function findFirstAndLastNumber(line) {
    const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;
    const matches = [...line.matchAll(regex)];
    
    if (matches.length === 0) return 0;

    let first = matches[0][1];
    let last = matches[matches.length - 1][1];

    first = numberMap[first] || first;
    last = numberMap[last] || last;

    return Number.parseInt(first + last);
}

const part2 = input.reduce((a, c) => a + findFirstAndLastNumber(c), 0);

console.log("Part2: ", part2);
