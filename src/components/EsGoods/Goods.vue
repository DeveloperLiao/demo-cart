<template>
  <div class="goods-container" v-for="item in goodsList" :key="item.goods_id">
    <div class="container-left">
      <div class="img">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" :id="item.goods_id" v-model="item.goods_state" @change="checkSelect" />
          <label class="custom-control-label" :for="item.goods_id"><img :src="item.goods_img" alt="!" /></label>
        </div>
      </div>
    </div>
    <div class="container-right">
      <div class="title right-top">
        <h5>{{ item.goods_name }}</h5>
      </div>
      <div class="right-bottom">
        <div class="price">￥{{ item.goods_price }}</div>
        <div class="count">
          <count :count="item.goods_count" :id="item.goods_id" @getNewCount="getCount"></count>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import count from '../EsCount/Count.vue'
import bus from '../../EventBus/eventBus.js'
export default {
  name: 'MyGoods',
  props: { goodsList: { type: Array, default: [] } },
  emits: ['getNewCount'],
  components: {
    count
  },
  methods: {
    // 控制全选
    checkSelect() {
      this.$getTotall(this.goodsList)
      if (this.goodsList.every(x => x.goods_state === true)) {
        bus.emit('isfull', true)
      } else {
        bus.emit('isfull', false)
      }
    },
    getCount(val) {
      // 向App组件发送最新的count值
      this.$emit('getNewCount', val)
    }
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #efefef;
  img {
    display: block;
    width: 100px;
    height: 100px;
  }
  .container-left {
    margin-right: 10px;
  }

  .container-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
  .right-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price {
      color: #f00;
    }
  }
  .custom-control-label::before,
  .custom-control-label::after {
    top: 3.25rem;
  }
}
</style>
