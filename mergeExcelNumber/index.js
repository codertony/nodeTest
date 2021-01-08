let getExcelDataTatal = require('./getExcelDataTatal')
let importExcel = require('./importExcel')



var path = require("path");
var fs = require("fs");
var tatalList = [];
var pathName = "./excel/input";
fs.readdir(pathName, function(err, files){
  tatalList = files.map(n => {
    return {
      '项目名称': n.replace('.xlsx', ''),
      '金额' : getExcelDataTatal(path.join(pathName, n))
    }
  })
  // console.log(tatalList)
  importExcel(tatalList)
});
