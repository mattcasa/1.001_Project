var express = require('express');
var fs = require("fs");
var bodyParser = require('body-parser');
var webSocketServer = require('ws').Server; 
var webSocket = require('ws'); 

var nn = require('./UI/ml_neural_net_use.js');

var app = express();
app.use(express.static('UI'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var input = [1,0, 0,0,0,0,0,0,0,0,0,4,0,0,0, 1,0, 0,1,0, 1, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,1,0, 1,0, 59, 0, 29, 12, 1]




app.get('/', function (req, res) {
    console.log("I received a get request");
    console.log(req.body);
 });

app.post('/', function(req, res){
    console.log("I received a post request");
    // console.log(req.body.institute);
    // console.log(req.body.course);

    if(req.body.institute === 'MITx'){
        input[0] = 0;
        input[1] = 1;
    }
    if(req.body.institute === 'HarvardX'){
        input[0] = 1;
        input[1] = 0;
    }
    if(req.body.course === '14.73x'){
        input[2] = 1;
        input[3] = 0;
        input[4] = 0;
        input[5] = 0;
        input[6] = 0;
        input[7] = 0;
        input[8] = 0;
        input[9] = 0;
        input[10] = 0;
        input[11] = 0;
        input[12] = 0;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === '2.01x'){
        input[2] = 0;
        input[3] = 1;
        input[4] = 0;
        input[5] = 0;
        input[6] = 0;
        input[7] = 0;
        input[8] = 0;
        input[9] = 0;
        input[10] = 0;
        input[11] = 0;
        input[12] = 0;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === '3.091x'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 1;
        input[5] = 0;
        input[6] = 0;
        input[7] = 0;
        input[8] = 0;
        input[9] = 0;
        input[10] = 0;
        input[11] = 0;
        input[12] = 0;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === '6.002x'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 0;
        input[5] = 1;
        input[6] = 0;
        input[7] = 0;
        input[8] = 0;
        input[9] = 0;
        input[10] = 0;
        input[11] = 0;
        input[12] = 0;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === '6.00x'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 0;
        input[5] = 0;
        input[6] = 1;
        input[7] = 0;
        input[8] = 0;
        input[9] = 0;
        input[10] = 0;
        input[11] = 0;
        input[12] = 0;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === '7.00x'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 0;
        input[5] = 0;
        input[6] = 0;
        input[7] = 1;
        input[8] = 0;
        input[9] = 0;
        input[10] = 0;
        input[11] = 0;
        input[12] = 0;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === '8.02x'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 0;
        input[5] = 0;
        input[6] = 0;
        input[7] = 0;
        input[8] = 1;
        input[9] = 0;
        input[10] = 0;
        input[11] = 0;
        input[12] = 0;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === '8.MReVx'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 0;
        input[5] = 0;
        input[6] = 0;
        input[7] = 0;
        input[8] = 0;
        input[9] = 1;
        input[10] = 0;
        input[11] = 0;
        input[12] = 0;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === 'CB22x'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 0;
        input[5] = 0;
        input[6] = 0;
        input[7] = 0;
        input[8] = 0;
        input[9] = 0;
        input[10] = 1;
        input[11] = 0;
        input[12] = 0;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === 'CS50x'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 0;
        input[5] = 0;
        input[6] = 0;
        input[7] = 0;
        input[8] = 0;
        input[9] = 0;
        input[10] = 0;
        input[11] = 1;
        input[12] = 0;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === 'ER22x'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 0;
        input[5] = 0;
        input[6] = 0;
        input[7] = 0;
        input[8] = 0;
        input[9] = 0;
        input[10] = 0;
        input[11] = 0;
        input[12] = 1;
        input[13] = 0;
        input[14] = 0;
    }
    if(req.body.course === 'PH207x'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 0;
        input[5] = 0;
        input[6] = 0;
        input[7] = 0;
        input[8] = 0;
        input[9] = 0;
        input[10] = 0;
        input[11] = 0;
        input[12] = 0;
        input[13] = 1;
        input[14] = 0;
    }
    if(req.body.course === 'PH278x'){
        input[2] = 0;
        input[3] = 0;
        input[4] = 0;
        input[5] = 0;
        input[6] = 0;
        input[7] = 0;
        input[8] = 0;
        input[9] = 0;
        input[10] = 0;
        input[11] = 0;
        input[12] = 0;
        input[13] = 0;
        input[14] = 1;
    }
    if(req.body.year === '2012'){
        input[15] = 1;
        input[16] = 0;  
    }
    if(req.body.year === '2013'){
        input[15] = 0;
        input[16] = 1;  
    }
    if(req.body.semester === 'Fall'){
        input[17] = 1;
        input[18] = 0;  
        input[19] = 0;  
    }
    if(req.body.semester === 'Spring'){
        input[17] = 0;
        input[18] = 1;  
        input[19] = 0;  
    }
    if(req.body.semester === 'Summer'){
        input[17] = 0;
        input[18] = 0;  
        input[19] = 1;  
    }
    if(req.body.viewed === 'Yes'){
        input[20] = 1;
    }
    if(req.body.viewed === 'No'){
        input[20] = 0;
    }
    if(req.body.country === 'United States'){
        input[21] = 1;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'India'){
        input[21] = 0;
        input[22] = 1;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Australia'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 1;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Bangladesh'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 1;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Brazil'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 1;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Canada'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 1;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'China'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 1;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Columbia'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 1;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Egypt'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 1;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'France'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 1;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Germany'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 1;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Greece'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 1;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Indonesia'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 1;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Japan'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 1;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Mexico'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 1;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Morocco'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 1;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Nigeria'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 1;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Other Africa'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 1;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Other East Asia'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 1;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Other Europe'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 1;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Other Middle East/Central Asia'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 1;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Other North/Central America'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 1;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Other Oceania'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 1;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Other South America'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 1;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Other South Asia'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 1;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Pakistan'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 1;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Philippines'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 1;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Poland'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 1;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Portugal'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 1;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Russia'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 1;
        input[51] = 0;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Spain'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 1;
        input[52] = 0;
        input[53] = 0;
    }
    if(req.body.country === 'Ukraine'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 1;
        input[53] = 0;
    }
    if(req.body.country === 'United Kingdom'){
        input[21] = 0;
        input[22] = 0;
        input[23] = 0;
        input[24] = 0;
        input[25] = 0;
        input[26] = 0;
        input[27] = 0;
        input[28] = 0;
        input[29] = 0;
        input[30] = 0;
        input[31] = 0;
        input[32] = 0;
        input[33] = 0;
        input[34] = 0;
        input[35] = 0;
        input[36] = 0;
        input[37] = 0;
        input[38] = 0;
        input[39] = 0;
        input[40] = 0;
        input[41] = 0;
        input[42] = 0;
        input[43] = 0;
        input[44] = 0;
        input[45] = 0;
        input[46] = 0;
        input[47] = 0;
        input[48] = 0;
        input[49] = 0;
        input[50] = 0;
        input[51] = 0;
        input[52] = 0;
        input[53] = 1;
    }
    if(req.body.loe === 'Below Secondary'){
        input[54] = 1;
        input[55] = 0;
        input[56] = 0;
        input[57] = 0;
        input[58] = 0;
    }
    if(req.body.loe === 'Secondary'){
        input[54] = 0;
        input[55] = 1;
        input[56] = 0;
        input[57] = 0;
        input[58] = 0;
    }
    if(req.body.loe === 'Bachelors'){
        input[54] = 0;
        input[55] = 0;
        input[56] = 1;
        input[57] = 0;
        input[58] = 0;
    }
    if(req.body.loe === 'Masters'){
        input[54] = 0;
        input[55] = 0;
        input[56] = 0;
        input[57] = 1;
        input[58] = 0;
    }
    if(req.body.loe === 'Doctorate'){
        input[54] = 0;
        input[55] = 0;
        input[56] = 0;
        input[57] = 0;
        input[58] = 1;
    }
    if(req.body.gender === 'Male'){
        input[59] = 1;
        input[60] = 0;
    }
    if(req.body.gender === 'Female'){
        input[59] = 0;
        input[60] = 1;
    }
    if(req.body.days === '0-10'){
        input[61] = 5;
    }
    if(req.body.days === '10-20'){
        input[61] = 15;
    }
    if(req.body.days === '20-30'){
        input[61] = 25;
    }
    if(req.body.days === '30-40'){
        input[61] = 35;
    }
    if(req.body.days === '40-50'){
        input[61] = 45;
    }
    if(req.body.days === 'Above 50'){
        input[61] = 75;
    }
    if(req.body.forum === '0'){
        input[62] = 0;
    }
    if(req.body.forum === '1'){
        input[62] = 1;
    }
    if(req.body.forum === '2-5'){
        input[62] = 3.5;
    }
    if(req.body.forum === '5-10'){
        input[62] = 7.5;
    }
    if(req.body.forum === '10-20'){
        input[62] = 15;
    }
    if(req.body.forum === 'Above 20'){
        input[62] = 35;
    }
    if(req.body.age === 'Unknown'){
        input[63] = 0;
    }
    if(req.body.age === 'Under 18'){
        input[63] = 15;
    }
    if(req.body.age === '18-25'){
        input[63] = 21.5;
    }
    if(req.body.age === '25-34'){
        input[63] = 29.5;
    }
    if(req.body.age === '35-44'){
        input[63] = 39.5;
    }
    if(req.body.age === '45-54'){
        input[63] = 49.5;
    }
    if(req.body.age === '55-64'){
        input[63] = 59.5;
    }
    if(req.body.age === 'Above 64'){
        input[63] = 75;
    }
    if(req.body.chapters === '0'){
        input[64] = 0;
    }
    if(req.body.chapters === '1'){
        input[64] = 1;
    }
    if(req.body.chapters === '2-5'){
        input[64] = 3.5;
    }
    if(req.body.chapters === '5-10'){
        input[64] = 7.5;
    }
    if(req.body.chapters === '10-20'){
        input[64] = 15;
    }
    if(req.body.chapters === 'Above 20'){
        input[64] = 35;
    }
    if(req.body.grade === '0-20%'){
        input[65] = 0.1;
    }
    if(req.body.grade === '20-40%'){
        input[65] = 0.3;
    }
    if(req.body.grade === '40-60%'){
        input[65] = 0.5;
    }
    if(req.body.grade === '60-80%'){
        input[65] = 0.7;
    }
    if(req.body.grade === '80-100%'){
        input[65] = 0.9;
    }
});


// Open Websocket, catch/send client messages
var wss = new webSocketServer({ port: 9100 });
var nn = require('./UI/ml_neural_net_use.js');

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        var result = nn.predict(input);
        ws.send(result);
    });
});


var server = app.listen(9001, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})