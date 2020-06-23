<template>
  <div>
    new
    <br />
    <br />
    <br />
    <button @click='fn'>按钮</button>
  </div>
</template>

<script>
  export default {

    data() {
      return {}
    },


    beforeCreate() {
      console.log('beforeCreate------')
    },
    created() {
      console.log('created------')
    },
    beforeMount() {
      console.log('beforeMount------')
    },
    mounted() {
      console.log('mounted------')
    },
    beforeUpdate() {
      console.log('beforeUpdate------')
    },
    updated() {
      console.log('updated------')
    },
    beforeDestroy() {
      console.log('beforeDestroy------')
    },
    destroyed() {
      console.log('destroyed------')
    },










    methods: {
      fn: function () {
        this.$router.push({
          // path: '/editpage',
          name: 'Editpage',
          // params: {
          //   userId: 12
          // }
          query: {
            page: 1
          }
        })
      }
    },
  }

</script>

<style scoped>

</style>
