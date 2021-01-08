var xlsx = require('node-xlsx');
let path = require('path');

let filePath = path.join(__dirname,'./excel/input/朗诗熙华府项目1幢2单元102室（墙纸）.xlsx')

function getExcelDataTatal(excelPath = filePath, sheetNum = 0) {
  // 解析得到文档中的所有 sheet
  let tatalNum = 0;
  var sheets = xlsx.parse(excelPath);
  let sheet = sheets[sheetNum];
  let data = sheet['data'];
  let hasTatalArray = data.filter(n => {
    return n.indexOf('合计') !== -1
  })
  if (hasTatalArray.length === 2) {
    tatalNum = hasTatalArray[1][hasTatalArray[0].indexOf('合计')]
    tatalNum = typeof tatalNum === 'number' ? tatalNum : 0
  }
  return tatalNum
}

module.exports = getExcelDataTatal
