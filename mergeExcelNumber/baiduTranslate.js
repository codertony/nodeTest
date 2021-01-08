let BaiduTranslate = require('node-baidu-translate')
const bdt = new BaiduTranslate('20200908000561314', 'qhfymwbf9BETELCgkJfY')


function translateRecursion(list, minLength, dataList) {
  let listStr = ''
  let start = dataList.length
  listStr = list[start];
  for (let n = start+1; n < list.length; n ++ ) {
    listStr += ('__' + list[n])
    if (listStr.length > minLength) {
      n = list.length
    }
  }
  return new Promise((resolve, reject) => {
    bdt.translate(listStr, 'en').then(res => {
      let str = res.trans_result[0].dst
      dataList = dataList.concat(str.split('__').map(n => n.replace(/(^\s*)|(\s*$)/g, "")))
      console.log(`翻译进度: ${dataList.length}/${list.length}
    
${str}
    `)
      if (dataList.length < list.length) {
        setTimeout(function () {
          return resolve(translateRecursion(list, minLength, dataList))
        }, 110)
      } else {
        resolve(dataList)
      }
    }).catch(err => {
      reject({
        dataList,
        err
      })
    })
  })
}

function translateList(list, minLength = 2000) {
  let dataList = []
  let start = 0;
  return translateRecursion(list, minLength, [])
}

module.exports = translateList
