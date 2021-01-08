let excelImportData = require('./excelImportData')
let importExcel = require('./importExcel')
let baiduTranslate = require('./baiduTranslate')



let excelData = excelImportData()


excelData.forEach(n => {
  n['sqlUpdate'] = `UPDATE Gba_District SET DISNAMEEN="${n.DISNAMEEN}" WHERE DISNAME="${n.DISNAME}";`
})

importExcel(excelData)

// let strList = excelData.map(n => n['DISNAME'])
// baiduTranslate(strList, 2000).then((list) => {
//   console.log(list)
//   excelData.forEach((n, index) => {
//     n['DISNAMEEN'] = list[index]
//   })
//   importExcel(excelData)
// })
