<template>
  <div>
    我是子组件的数据
    <br />
    <br />
    <br />


    <!-- <button @click="handleChange">传值到父组件</button> -->
  </div>
</template>

<script>
  export default {
    name: 'Child',
  
    data() {
      return {
        msg: ' 子组件100'
      }
    },
    methods: {
      handleChange: function () {
        //绑定事件
        this.$emit('getChildVal', this.msg)
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
