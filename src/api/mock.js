import Mock from 'mockjs'
const appData = require('./data.json')
console.log(appData)
Mock.mock(/getSeller/, options => {
  return {
    errno: 0,
    seller: appData.seller
  }
})
Mock.mock(/getGoods/, options => {
  return {
    errno: 0,
    goods: appData.goods
  }
})
Mock.mock(/getRatings/, options => {
  return {
    errno: 0,
    ratings: appData.ratings
  }
})
