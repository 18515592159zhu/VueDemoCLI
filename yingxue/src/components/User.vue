<template>
  <div>
    <h1>{{ msg }} --{{ this.$store.state.counter }}--{{ $store.state.counter }}</h1>
    <button>添加</button>
    <table border="1" width="100%">
      <tr class="aa">
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>工资</th>
        <th>操作</th>
      </tr>
      <tr v-for="(user,index) in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td v-text="user.name"></td>
        <td v-html="user.age"></td>
        <td>{{ user.salary }}</td>
        <td><a href="">删除</a> <a href="" @click.prevent="detailUser(user.id)">修改</a></td>
      </tr>
    </table>

    <form action="">
      <div v-show="user.id">
        id: <input type="text" v-model="user.id"> <br>
      </div>
      姓名: <input type="text" v-model="user.name"> <br>
      年龄: <input type="text" v-model="user.age"> <br>
      工资: <input type="text" v-model="user.salary"> <br>
      <input type="submit" @click="saveOrUpdate" value="保存|编辑">
    </form>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      msg: "用户列表",
      users: [
        {id: 1, name: '张三', age: 21, salary: 2300.00},
        {id: 2, name: '张四', age: 22, salary: 2300.00},
        {id: 3, name: '张五', age: 23, salary: 2300.00},
      ],
      user: {}
    }
  },
  methods: {
    saveOrUpdate() {
      console.log(this.user);
      //发送axios请求完成添加
    },
    detailUser(id) {
      //发送axios请求查询表一个 返回之后 this.user = res.data;
    }
  },
  created() {
    //发送axios请求
    this.users = [{id: 1, name: '张三', age: 21, salary: 2300.00},
      {id: 2, name: '张四', age: 22, salary: 2300.00},
      {id: 3, name: '张五', age: 23, salary: 2300.00},
    ]
  }
}
</script>

<style scoped>

</style>
