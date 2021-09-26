<template>
  <div>
    <h1>员工列表页面</h1>
    <button @click="emp={}">添加员工信息</button>
    <table border="1" width="100%">
      <tr class="aa">
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>工资</th>
        <th>操作</th>
      </tr>
      <tr v-for="(emp,index) in emps" :key="emp.id">
        <td>{{ emp.id }}</td>
        <td>{{ emp.name }}</td>
        <td>{{ emp.age }}</td>
        <td>{{ emp.salary }}</td>
        <td><a href="javascript:;" @click="detailEmp(emp.id)">修改</a> <a href="javascript:;">删除</a></td>
      </tr>
    </table>
    <form>
      <div v-show="emp.id">
        编号：<input readonly type="text" v-model="emp.id"><br/>
      </div>
      姓名：<input type="text" v-model="emp.name"><br/>
      年龄：<input type="text" v-model="emp.age"><br/>
      工资：<input type="text" v-model="emp.salary"><br/>
      <input type="button" value="保存|修改" @click="saveOrUpdate">
    </form>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "Index",
  data() {
    return {
      emps: [],
      emp: {},//定义接收员工信息的对象
    }
  },
  methods: {
    saveOrUpdate() {
      //1.获取用户输入员工信息
      instance.post("/emp", this.emp).then(res => {
        this.emp = {};//清空添加数据
        this.findAll();
      })
    },
    findAll() {
      instance.get("/emps").then(res => {
        this.emps = res.data;
      });
    },
    detailEmp(id) {
      instance.get("/emp?id=" + id).then(res => this.emp = res.data);
    }
  },
  created() {
    //发送axios请求
    this.findAll();//员工列表
  }
}
</script>

<style scoped>
.aa {
  background: chartreuse;
}
</style>
