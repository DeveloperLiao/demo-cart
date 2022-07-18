<template>
  <div class="app-container">
    <Header title="我的购物车案例"></Header>
    <Goods :goodsList="goodsList" @getNewCount="getNewCount"></Goods>
    <Footer :goodsList="goodsList" @getFullSelect="fullSelect"></Footer>
  </div>
</template>

<script>
import Header from './components/EsHeader/Header.vue'
import Footer from './components/EsFooter/Footer.vue'
import Goods from './components/EsGoods/Goods.vue'

export default {
  name: 'App',
  data() {
    return { goodsList: [] }
  },
  created() {
    //  在创建阶段调用getGoodsList方法获取后台数据
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      // 使用全局挂载的属性$http发送ajax请求
      // 解构出data并赋值给res
      const { data: res } = await this.$http.get('api/cart')
      // 判断请求是否成功,并赋值给goodList
      if (res.status == 200) {
        console.log(res.message)
        this.goodsList = res.list
        // 初始化商品总价和商品总数
        this.$getTotall(this.goodsList)
      } else return console.log('获取购物车的数据失败!')
    },
    //控制全选
    fullSelect(list) {
      this.goodsList = list
    },
    //根据商品Id更新商品总价和总数
    getNewCount(e) {
      const findResult = this.goodsList.find(x => x.goods_id === e.goodsId)
      if (findResult) {
        findResult.goods_count = e.newCount
        this.$getTotall(this.goodsList)
      }
    }
  },
  components: {
    Header,
    Footer,
    Goods
  }
}
</script>
<style lang="less" scoped>
.app-container {
  margin-top: 50px;
}
</style>
