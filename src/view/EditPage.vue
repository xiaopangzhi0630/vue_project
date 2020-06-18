<template>
  <div>
    编辑页面---{{id}}
    <br />
    <br />
    <br />
    <button @click='fn'>按钮</button>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        id: ''
      }
    },
    created() {

      // console.log(this.$route.params);
      // this.id = this.$route.params.userId

      console.log(this.$route.query);
      this.id = this.$route.query.page
    },
    methods: {
      fn: function () {
        this.$router.push({
          // name: 'New'
           path: '/new'
        })
      }
    },
  }

</script>

<style scoped>

</style>
