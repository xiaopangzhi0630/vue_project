<template>
  <div>
    我是子组件 ------ {{toChildVal}}
  </div>
</template>

<script>
  export default {
    name: 'List',
    // 对象类型
    props: {
      type: String,
      toChildVal: ''
    },
    // 数组类型
    // props: ['toChildVal'],
    data() {
      return {

      }
    }
  }

</script>

<style scoped>

</style>
