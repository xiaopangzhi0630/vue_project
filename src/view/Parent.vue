<template>
  <div>
 

    <Child1 />

    <Child2 />

  </div>
</template>

<script>
  import Child1 from './Child1'
  import Child2 from './Child2'
  
  export default {


    data() {
      return {
        msg: '父组件data数据'
      }
    },
    components: {
      Child1,
      Child2
    },
    methods: {
      // 获取子组件传的值 
      childVal: function (val) {

        this.msg = val
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
