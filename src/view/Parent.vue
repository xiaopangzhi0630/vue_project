<template>
  <div>

    111

    <Button @click='fn1'>按钮</Button>
    <Button @click='fn2'>按钮</Button>

    <!-- <Child1 />

    <Child2 /> -->

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
      },

      // 动态路由, 渲染同一个组件

      fn1: function () {
        this.$router.push({
          path: `/child/${1}`
        })
      },
      fn2: function () {
        this.$router.push({
          path: `/child/${2}`
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
