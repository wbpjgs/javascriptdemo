//define array
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

//获取最高分并打印
function getHighScoreAndPrint(scores) {
    var highScore = 0;
    for (var i = 0; i < scores.length; i++) {
        const score = scores[i];
        console.log("index i=" + i + " scores=" + score);
        if (score > highScore) {
            highScore = score;
        }
    }
    return highScore;
}

function getBestSolutions(scores, highScore) {
    //记录最好的方案
    var bestSolutions = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

//获取最经济的方案
function getEconomicSolution(scores, highScore) {
    //记录最低成本
    var currentCost = 100;
    //记录最低成本的索引
    var index;
    //cost 数组和scores是平行数组
    var cost = [
        .25, .27, .25, .25, .25, .25,
        .33, .31, .25, .29, .27, .22,
        .31, .25, .25, .33, .21, .25,
        .25, .25, .28, .25, .24, .22,
        .20, .25, .30, .25, .24, .25,
        .25, .25, .27, .25, .26, .29];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (currentCost > cost[i]) {
                currentCost = cost[i];
                index = i;
            }
        }
    }
    return index;

}

var highScore = getHighScoreAndPrint(scores);
console.log("bubble high score is " + highScore);
var bestSolutions = getBestSolutions(scores, highScore);
console.log("best solutions:" + bestSolutions);
var bestEconomicSolution = getEconomicSolution(scores, highScore);
console.log("best economic solution is " + bestEconomicSolution);