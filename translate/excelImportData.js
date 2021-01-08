var xlsx = require('node-xlsx');
let path = require('path');

let filePath = path.join(__dirname,'./excel/data.xls')

function getExcelData(excelPath = filePath, sheetNum = 0) {
  // 解析得到文档中的所有 sheet
  var sheets = xlsx.parse(excelPath);
  let sheet = sheets[sheetNum]
  let dataObjArray = [];
  let dataTitle = sheet['data'][0];
  
  for(var rowId in sheet['data']){
    if (rowId > 0) {
      let dataObj = {};
      dataTitle.forEach((n, index) => {
        dataObj[n] = sheet['data'][rowId][index]
      })
      dataObjArray.push(dataObj)
    }
  }
  return dataObjArray
}

module.exports = getExcelData
