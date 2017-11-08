import Mock from 'mockjs'
import data from './data.json'
import city from './city.json'

Mock.mock('/api/goods', {
  code:0,
  data:data.goods
})

Mock.mock('/api/city', {
  code:0,
  data:city.info
})

