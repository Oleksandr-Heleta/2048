function templateStr(tpl, attributes) {
    for(var i in attributes) {
        if(attributes.hasOwnProperty(i)) {
            tpl = tpl.replace('{{' + i + '}}', attributes[i]);
        }
    }
    return tpl;
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomGrid(grids, height, width){
    let j = getRandom(0, height-1);
    let i = getRandom(0, width-1);
    if (grids[j][i] === '') {
        grids[j][i] = '2';
        return grids; // Доделать рандом 2/4
    } 
    return randomGrid(grids,height, width);
};

function fullArr(arr) {
    const stack = [];
    for(let char of arr) {
        if (char !== '') findChar(char);
    }
    function findChar(char){
        if(stack.length > 0 && stack[stack.length-1].char === char) {
            stack[stack.length-1].appeared++;
            if(stack[stack.length-1].appeared === 2) {
                stack.pop();
                char = String( +char * 2);
                findChar(char);
                
            }
        } else {
            stack.push({char, appeared: 1});
        }
    }
    let res = [];
    stack.forEach(n => {
        res.push(n.char);
    })
    return res;
    };

function moveHorizont(grids, move) {
    let res = grids.map(j => {
        let numberArr = fullArr(j);
        let diffLength = j.length - numberArr.length;
        let emptyArr = [];
        for (i = 0; i < diffLength; i += 1){
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
    })
    return res;
}