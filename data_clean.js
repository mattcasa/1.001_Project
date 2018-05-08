var convert = require('convert-csv-to-json');
var fs = require('fs');
var Replacer = require('pattern-replace');

// import CSV as JSON object
let fileInputName = 'data_clean.csv'; 
var outputJSON = convert.fieldDelimiter(',').getJsonFromCsv(fileInputName);

// convert object parameters to integers
for(var i in outputJSON){
    for(var key in outputJSON[i]){
        outputJSON[i][key] = parseFloat(outputJSON[i][key])
    }
}

    // console.log(outputJSON[0]);
    // console.log(outputJSON[1]);
    // console.log(outputJSON[0].course_1473x);

module.exports = outputJSON;
