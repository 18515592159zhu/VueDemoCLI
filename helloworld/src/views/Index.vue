<template>
  <div>
    <!--使用组件-->
    <Header></Header>

    <router-view></router-view>
  </div>
</template>

<script>
import instance from "../utils/request";
import Header from "../components/Header";

export default {
  name: "Index",
  components: {Header}
}
</script>

<style scoped>

</style>
