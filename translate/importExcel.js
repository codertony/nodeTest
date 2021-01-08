var xlsx = require('node-xlsx');
let path = require('path');
let fs = require('fs')

let importPath = path.join(__dirname,'./excel/out.xls')

function importExcel(dataMapArray, excelPath = importPath) {
  let dataArray = [];
  dataArray[0] = Object.keys(dataMapArray[0])
  dataArray = dataArray.concat(dataMapArray.map(n => Object.values(n)))
  var data = [{
    name: 'sheet1',
    data: dataArray
    }
  ]
  var buffer = xlsx.build(data);

// 写入文件
  fs.writeFile(excelPath, buffer, function(err) {
    if (err) {
      console.log("Write failed: " + err);
      return;
    }
    console.log("Write completed.");
  });
}

module.exports = importExcel
