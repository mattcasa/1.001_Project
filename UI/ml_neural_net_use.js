var fs = require('fs');
var brain = require('brain.js');
var net = new brain.NeuralNetwork({
    activation: 'sigmoid', 
    hiddenLayers: [4],
    learningRate: 0.6 
  });

//read in user defined input
    // var rawInput = fs.readFileSync("input.json")
    // var input = [1,0, 0,0,0,0,0,0,0,0,0,4,0,0,0, 1,0, 0,1,0, 1, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,1,0, 1,0, 59, 0, 29, 12, 1]
    // var rawInput = fs.readFileSync("./UI/input.json")
    // var input = JSON.parse(rawInput);  

// Read in neural net

var rawdata = fs.readFileSync('./UI/neural_net.json');
var data = JSON.parse(rawdata);  
net.fromJSON(data);

// Export user input function

    // var predicted = net.run(input); 
    //   // console.log(predicted);
    // var predict = Math.round(predicted)

    // console.log(Math.round(net.run(input)));

exports.predict = function (i) {
  return Math.round(net.run(i));
};
  // var rawInput = fs.readFileSync("input.json")
  // var rawdata = fs.readFileSync('neural_net.json');


  // var input = [1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,3,0,23,0,0]
  // var input = [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,59,0,29,12,1];

  // console.log(predicted)
  // console.log(predict)

  // if(predict === 1){
  //   console.log('Our neural net predicts CERTIFICATION');
  // }
  // else {
  //   console.log('Our neural net predicts NO CERTIFICATION');
  // }
