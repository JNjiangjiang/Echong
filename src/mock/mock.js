// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-30': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'price|+1': 10,
    'img':"https://img1.epetbar.com/2016-12/07/16/d386cd506fb215691a281660110f11cd.jpg",
    'oldPrice|+2': 11,
    'name':"博纳天纯幼犬"
  }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))

/*var arr=[]
var index
for(var i=0;i<=34;i++){
    index= i
    arr[index]=Random.province(true)
}
console.log(JSON.stringify(arr, null, 4))*/


