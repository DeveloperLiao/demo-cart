<template>
  <div class="footer-container">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="fullSelect" v-model="isFull" @change="isFullSelect" />
      <label class="custom-control-label" for="fullSelect">全选</label>
    </div>
    <div>
      合计<span class="totalNum">￥{{ totalPrice }}</span>
    </div>
    <div class="btn">
      <button :disabled="totalNum > 0 ? false : true">结算（{{ totalNum }}）</button>
    </div>
  </div>
</template>

<script>
import bus from '../../EventBus/eventBus.js'
export default {
  name: 'MyFooter',
  props: {
    goodsList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // 合计
      totalPrice: 0,
      // 结算
      totalNum: 0,
      // 控制全选的状态
      isFull: false
    }
  },
  // 自定义事件
  emits: ['getFullSelect'],
  methods: {
    // 全选
    isFullSelect(e) {
      this.goodsList.forEach(x => (x.goods_state = e.target.checked))
      this.$emit('getFullSelect', this.goodsList)
      this.$getTotall(this.goodsList)
    }
  },
  created() {
    // 接受来自EventBus的自定义事件
    bus.on('isfull', val => (this.isFull = val))
    bus.on('getTotalCount', val => (this.totalPrice = val))
    bus.on('getSum', val => (this.totalNum = val))
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  width: 100%;
  height: 60px;
  padding: 10px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  border-top: 1px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .totalNum {
    color: #f00;
  }
  button {
    background-color: #00f;
    color: #fff;
    width: 120px;
    height: 40px;
    border-radius: 40px;
    border: 0px;
  }
}
</style>
