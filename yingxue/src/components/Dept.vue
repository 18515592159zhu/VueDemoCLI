<template>
  <div>
    <h1>{{ msg }} -- {{ this.$store.state.counter }} -- {{ this.$store.state.counter }} --{{ this.$store.getters.countSqrt }}</h1>
    <button @click="incr">修改共享数据counter++</button>
    <button @click="decr">修改共享数据counter--</button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      msg: "部门列表"
    }
  },
  methods: {
    incr() {
      this.$store.commit('incrCounter', {count: 10, name: '小朱'})//调用vuex mutations中方法
    },
    decr() {
      this.$store.commit('decrCounter'); //调用vuex mutations中方法counte
    }
  }
}
</script>

<style scoped>

</style>
