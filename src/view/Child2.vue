<template>
  <div>
    Child2页面----{{msg}}
    <br />
  </div>
</template>

<script>
  import vm from '../public/busEvent.js'

  export default {
    // name: "Child2",
    data() {
      return {
        msg: ' Child2的数据'
      }
    },

    created() {
      // 绑定事件获取值
      vm.$on('busEvent', (argv) => {
        console.log(argv);
        this.msg = argv
      })
    },

    mounted() {},
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
