<template>
  <div>
    <form>
      用户名：<input type="text" v-model="admin.username"><br/>
      密码：<input type="text" v-model="admin.password"><br/>
      <input type="button" value="登录" @click="login">
    </form>
  </div>
</template>

<script>
import instance from "../utils/request";

export default {
  name: "Login",
  data() {
    return {
      admin: {}
    }
  },
  methods: {
    login() {
      //console.log(this.admin);
      //发送axios请求,登录成功
      //this.$router.push({name:'Index'});
      instance.post("/login", this.admin).then(res => {
        //console.log(res.data);
        const result = res.data;
        if (result.success) {
          //前端存储token信息  localStorage：本地缓存
          localStorage.setItem("token", result.token);
          //切换路由到主页
          this.$router.push({name: 'Index'});
        } else {
          alert(result.msg);
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
