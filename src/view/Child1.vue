<template>
  <div>
    Child1页面
    <br />

    <button @click="handleChange">按钮</button>
  </div>
</template>

<script>
  import vm from '../public/busEvent.js'

  export default {
    // name: "Child1",
    data() {
      return {
        msg: ' Child1的数据'
      }
    },
    methods: {
      handleChange: function () {
        //绑定事件
        vm.$emit('busEvent', 200)
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
