<template>
  <div>
    home
    <br />

    <List :toChildVal='msg' />

    <button @click="handleChange">传值</button>
  </div>
</template>

<script>
  import List from './List'
  export default {
    name: 'Home',
    components: {
      List
    },
    data() {
      return {
        msg: '父组件数据'
      }
    },

    methods: {
      handleChange: function () {
      
        this.msg = '更新父组件的值'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


