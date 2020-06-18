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
