// 封装发送总数和总价的函数
import bus from '../EventBus/eventBus.js'
export default function getTotall(arr) {
  // 已选中的商品总价
  let totalCount = 0
  // 已选中的商品总和
  let sum = 0
  arr.filter(x => x.goods_state === true).forEach(x => (totalCount += x.goods_price * x.goods_count))
  arr.filter(x => x.goods_state === true).forEach(x => (sum += x.goods_count))
  // 发送商品总价
  bus.emit('getTotalCount', totalCount)
  // 发送商品总和
  bus.emit('getSum', sum)
}
