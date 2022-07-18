<template>
  <div>
    <button @click="countSub">-</button>
    <input type="text" v-model.lazy="myCount" />
    <button @click="countAdd">+</button>
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  props: {
    count: { type: Number, default: 0 },
    id: { type: Number, default: 0 }
  },
  //自定义事件
  emits: ['getNewCount'],
  data() {
    return { myCount: this.count, myId: this.id }
  },
  methods: {
    // 减少商品的数量
    countSub() {
      if (this.myCount <= 1) return 0
      this.myCount--
      // 获取最新的count和商品的id
      this.$emit('getNewCount', { newCount: this.myCount, goodsId: this.myId })
    },
    // 增加商品的数量
    countAdd() {
      this.myCount++
      this.$emit('getNewCount', { newCount: this.myCount, goodsId: this.myId })
    }
  },
  watch: {
    // 添加监听器监听输入myCount数值的变化
    myCount(newVal) {
      const parseResult = parseInt(newVal)
      // 当数值小于1或是个非数值时
      if (isNaN(newVal) || newVal < 1) {
        this.myCount = 1
      }
      // 当数值是小数时
      else if (String(newVal).indexOf('.') !== -1) {
        this.myCount = parseResult
      }
      this.$emit('getNewCount', { newCount: this.myCount, goodsId: this.myId })
    }
  }
}
</script>

<style lang="less" scoped>
input {
  width: 25px;
  height: 20px;
  text-align: center;
  line-height: 30px;
  outline: none;
  margin: 0 5px;
}
button {
  border: 0px;
}
</style>
