
// pull in data module
var data = require('./data_clean.js');


// parse data
var dataXY = [];

for (var i in data) {
    var tempXY = [];
    for (var key in data[i]) {
        tempXY.push(data[i][key]);
    }
    dataXY.push(tempXY); 
}

// Logistic ML
const {Matrix} = require('ml-matrix');
var LogisticRegression = require('ml-logistic-regression');


// Shuffle data
function shuffle(array) {
    var j, temp, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
   return array;
}
dataXY = shuffle(dataXY);


// Create training data and testing data 
var trainTestSplit = 0.75 
var trainingDataSize = Math.round(dataXY.length * trainTestSplit);
    // var trainingDataSize = 500;

var Xtrain = [];
var Ytrain = [];
var Xtest = [];
var YtestArray = [];
var Ytest;

var varUsed = 66;
for(var i=0; i < dataXY.length; ++i) {
    // for(var i=0; i < trainingDataSize+250; ++i) {

    var row = [];
    for(var j=0; j < varUsed; ++j) {
        row.push(dataXY[i][j]);
    }
    if(i < trainingDataSize) {
        Xtrain.push(row);
        Ytrain.push(dataXY[i][66])
    } 
    else {
       Xtest.push(row);
       YtestArray.push(dataXY[i][66])
    }
}

Xtrain = new Matrix(Xtrain);
Ytrain = Matrix.columnVector(Ytrain);
Xtest = new Matrix(Xtest);
Ytest = Matrix.columnVector(YtestArray);


// Train the logistic regression 
var logreg = new LogisticRegression(numSteps = 1000, learningRate = 5e-3);
logreg.train(Xtrain,Ytrain);
 

// Test the logistic regression 

var predicted = logreg.predict(Xtest);
    // console.log(predicted);
    // console.log(YtestArray);

var numCorrect = 0;
var Positive = 0;
var Negative = 0;
var TruePositive = 0;
var TrueNegative = 0;

var numTotal = Xtest.length;
for(var i=0; i<numTotal; i++){
    var actual = YtestArray[i]
    if(predicted[i] === actual){numCorrect++;}
    if(actual === 1){Positive++;}
    if((actual === 1)&&(predicted[i] === 1)){TruePositive++;}
    if(actual === 0){Negative++;}
    if((actual === 0)&&(predicted[i] === 0)){TrueNegative++;}
}

console.log('The LR ML model predicts with an overall accuracy of ' + numCorrect/numTotal*100 +'%');
console.log('The LR ML model predicts positive outcomes with an accuracy of ' + TruePositive/Positive*100 +'%');
console.log('The LR ML model predicts negative outcomes with an accuracy of ' + TrueNegative/Negative*100 +'%');





 

 
