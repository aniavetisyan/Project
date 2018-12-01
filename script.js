var m = Math.round((Math.random() * 20) + 5)
var n = Math.round((Math.random() * 20) + 5)
var matrix = []
var side = 20
function getRandInt(max) {
    return Math.round(Math.random() * Math.floor(max))
}
for (var y = 0; y < m; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {
        matrix[y].push(getRandInt(6))
    }
} console.log(matrix)

var side = 30;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var kerparArr = [];
var stexcoxArr = [];

function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gi = new Gishatich(x, y)
                gishatichArr.push(gi)
            }
            else if (matrix[y][x] == 4) {
                var ke = new Kerpar(x, y)
                kerparArr.push(ke)
            }
            else if (matrix[y][x] == 5) {
                var st = new Stexcox(x, y)
                stexcoxArr.push(st)
            }
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("purple");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            rect(x * side, y * side, side, side)

        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in kerparArr) {
        kerparArr[i].eat()
        kerparArr[i].move()
        kerparArr[i].mult()
        kerparArr[i].die()
    }
    for (var i in stexcoxArr) {
        stexcoxArr[i].eat()
        stexcoxArr[i].move()
        stexcoxArr[i].mult()
        stexcoxArr[i].die()
    }
}


