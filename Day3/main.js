const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString('utf8').split('\n');

const isSymbol = (char) => char !== '.' && isNaN(parseInt(char));

const solve = () => {
    const n = input.length;
    const m = input[0].length;
    const goods = Array.from({ length: n }, () => Array.from({ length: m }, () => []));
    
    let part1Sum = 0;

    for (let i = 0; i < n; i++) {
        let j = 0;
        while (j < m) {
            if (isNaN(parseInt(input[i][j]))) {
                j++;
                continue;
            }

            const start = j;
            let num = '';
            while (j < m && !isNaN(parseInt(input[i][j]))) {
                num += input[i][j];
                j++;
            }
            num = parseInt(num);

            const checkSymbol = (r, c) => {
                if (r < 0 || r >= n || c < 0 || c >= m) return false;
                if (input[r][c] === '*') goods[r][c].push(num);
                return isSymbol(input[r][c]);
            };

            const hasAdjacentSymbol = 
                checkSymbol(i, start - 1) || 
                checkSymbol(i, j) ||
                [...Array(j - start + 2)].some((_, k) => 
                    checkSymbol(i - 1, start - 1 + k) || 
                    checkSymbol(i + 1, start - 1 + k)
                );

            if (hasAdjacentSymbol) {
                part1Sum += num;
            }
        }
    }

    const part2Sum = goods.flat().reduce((sum, nums) => 
        nums.length === 2 ? sum + nums[0] * nums[1] : sum, 0
    );

    return [part1Sum, part2Sum];
};

const [part1, part2] = solve();
console.log('Part 1:', part1);
console.log('Part 2:', part2);