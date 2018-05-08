// pull in data module
var data = require('./data_clean.js');
var fs = require('fs');


// parse data
var dataXY = [];

for (var i in data) {
    var tempXY = [];
    for (var key in data[i]) {
        tempXY.push(data[i][key]);
    }
    dataXY.push(tempXY); 
}


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
var trainTestSplit = 0.01 
// var trainingDataSize = Math.round(dataXY.length * trainTestSplit);
var trainingDataSize = 100000;

var Xtrain = [];
var Ytrain = [];
var Xtest = [];
var Ytest = [];

var varUsed = 66;
// for(var i=0; i < dataXY.length; ++i) {
for(var i=0; i < trainingDataSize+100000; ++i) {
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
       Ytest.push(dataXY[i][66])
    }
}

var train = [];

for(var i=0; i<Xtrain.length;i++){
    train[i]={};
    train[i].input = Xtrain[i]
    train[i].output = [Ytrain[i]]
}


// Neural net
var brain = require('brain.js');
var net = new brain.NeuralNetwork();

// Train neural net
net.train(train);

// Test neural net
var numCorrect = 0;
var Positive = 0;
var Negative = 0;
var TruePositive = 0;
var TrueNegative = 0;

var numTotal = Xtest.length;
for(var i=0; i<numTotal; i++){
    var actual = Ytest[i]
    var predicted = net.run(Xtest[i]); 
    var predict = Math.round(predicted) 
    if(predict === actual){numCorrect++;}
    if(actual === 1){Positive++;}
    if((actual === 1)&&(predict === 1)){TruePositive++;}
    if(actual === 0){Negative++;}
    if((actual === 0)&&(predict === 0)){TrueNegative++;}
}

console.log('The neural net predicts with an overall accuracy of ' + numCorrect/numTotal*100 +'%');
console.log('The neural net predicts positive outcomes with an accuracy of ' + TruePositive/Positive*100 +'%');
console.log('The neural net predicts negative outcomes with an accuracy of ' + TrueNegative/Negative*100 +'%');

// Write neural net to JSON
var json = net.toJSON();
var log = JSON.stringify(json);
fs.writeFileSync('neural_net.json', log)
