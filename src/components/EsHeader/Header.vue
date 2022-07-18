<template>
  <!-- 自定义标题格式 -->
  <div class="header-container" :style="{ color: fontColor, backgroundColor: bgColor, fontSize: fSize + 'px' }">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    title: {
      type: String,
      require: true,
      default: '购物车案例'
    },
    fontColor: {
      type: String,
      require: true,
      default: '#fff'
    },
    bgColor: {
      type: String,
      require: true,
      default: '#00f'
    },
    fSize: {
      type: Number,
      require: true,
      default: 16
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  z-index: 999;
}
</style>
