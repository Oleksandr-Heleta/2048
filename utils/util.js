function templateStr(tpl, attributes) {
    for(var i in attributes) {
        if(attributes.hasOwnProperty(i)) {
            tpl = tpl.replace('{{' + i + '}}', attributes[i]);
        }
    }
    return tpl;
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomGrid(grids, height, width){
    let j = getRandom(0, height-1);
    let i = getRandom(0, width-1);
    console.log(j, i);
    if (grids[j][i] === '') {
        grids[j][i] = '2';
        return grids; // Доделать рандом 2/4
    } 
    return randomGrid(grids,height, width);
}