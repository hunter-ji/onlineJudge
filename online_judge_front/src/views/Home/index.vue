<template>
  <div class="container">
    <!--header-->
    <div class="flex justify-between mb-12">
      <div class="font-light text-3xl">Online Judge</div>
      <el-button type="primary" @click="$router.push('/add')">新建</el-button>
    </div>

    <!--表格-->
    <el-table :data="lists" class="w-full">
      <el-table-column prop="questionID" label="ID" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="status" label="状态" sortable>
        <template slot-scope="scope">
          <el-tag :type="scope.row.status ? 'info' : 'success'">
            {{ scope.row.status ? "未发布" : "已发布" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="创建时间" />
      <el-table-column prop="updatedAt" label="更新时间" />

      <!--操作-->
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            查看
          </el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">答卷</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  private lists = [
    {
      questionID: 0,
      title: "这是一份测试题",
      status: 0, // 0 未提交 1 已提交
      createdAt: "2020.01.01",
      updatedAt: "2020.01.01"
    },
    {
      questionID: 1,
      title: "这是一份测试题",
      status: 0, // 0 未提交 1 已提交
      createdAt: "2020.01.01",
      updatedAt: "2020.01.01"
    },
    {
      questionID: 2,
      title: "这是一份测试题",
      status: 1, // 0 未提交 1 已提交
      createdAt: "2020.01.01",
      updatedAt: "2020.01.01"
    }
  ];

  public handleClick(element: any): void {
    console.log(element);
  }
}
</script>
