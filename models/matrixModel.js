class MatrixModel extends BaseModel {
    constructor() {
        super();
        this.attributes = {
            size: {
                width: 4,
                height: 4,
            },
            grid: [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ],
            addCount: 0,
            cell: []
        };
        if (!MatrixModel.instance) {
            MatrixModel.instance = this;
        }

        return MatrixModel.instance;

    }

    startNewGame() {
        this.attributes.cell = [];
        this.attributes.grid = [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
        ];
        this.randomGrid(this.attributes);
        this.randomGrid(this.attributes);
        this.publish('changeData');
    }

    makeActionByKey(key) {
        this.attributes.cell = [];
        let cloneArr = this.attributes.grid;
        if (key === 'left' || key === 'right') {
            this.attributes.grid = this.moveHorizont(this.attributes.grid, key);
        } else {
            let turnGrids = this.rowInColum(this.attributes.grid);
            if (key === 'up') {
                turnGrids = this.moveHorizont(turnGrids, 'left');
            } else {
                turnGrids = this.moveHorizont(turnGrids, 'right');
            }
            this.attributes.grid = this.rowInColum(turnGrids);
        }
        if (similarArr(cloneArr, this.attributes.grid)) return this.attributes.addCount;
        this.randomGrid(this.attributes);
        this.publish('changeData');
        return this.attributes.addCount;
    }

    randomGrid(attributes) {
        let j = getRandom(0, attributes.size.height - 1);
        let i = getRandom(0, attributes.size.width - 1);
        if (attributes.grid[j][i] === '') {
            attributes.grid[j][i] = '2';
            attributes.cell.push([j, i]);
            return attributes;
        }
        return this.randomGrid(attributes);
    }

    fullArr(arr) {
        const stack = [];
        let score = 0;
        for (let char of arr) {
            if (char !== '') findChar(char);
        }
        function findChar(char) {
            if (stack.length > 0 && stack[stack.length - 1].char === char) {
                stack[stack.length - 1].appeared++;
                if (stack[stack.length - 1].appeared === 2) {
                    stack.pop();
                    char = +char * 2;
                    score += char;
                    char = String(char);
                    findChar(char);
                }
            } else {
                stack.push({ char, appeared: 1 });
            }
        }
        let res = [];
        stack.forEach(n => {
            res.push(n.char);
        });
        this.attributes.addCount += score;
        return res;
    }

    moveHorizont(grids, move) {
        this.attributes.addCount = 0;
        let res = grids.map(j => {
            let numberArr = [];
            switch (move) {
                case 'left':
                    numberArr = this.fullArr(j);
                    break;
                case 'right':
                    numberArr = this.fullArr(j.reverse()).reverse();
                    break;
                default:
                    return;
            }

            let diffLength = j.length - numberArr.length;
            let emptyArr = [];
            for (let i = 0; i < diffLength; i += 1) {
                emptyArr.push('');
            }
            switch (move) {
                case 'left':
                    return j = numberArr.concat(emptyArr);
                case 'right':
                    return j = emptyArr.concat(numberArr);
                default:
                    return;
            }
        });
        return res;
    }

    rowInColum(grids) {
        let turnArr = [];
        for (let j = 0; j < grids.length; j += 1) {
            turnArr.push([]);
            for (let i = 0; i < grids[j].length; i += 1) {
                turnArr[j].push('');
            }
        }

        for (let j = 0; j < grids.length; j += 1) {
            for (let i = 0; i < grids.length; i += 1) {
                turnArr[i][j] = grids[j][i];
            }
        }
        return turnArr;
    }
}
