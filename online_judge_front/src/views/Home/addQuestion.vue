<template>
  <div class="container">
    <!--header-->
    <el-page-header @back="$router.back()" content="新增问卷" class="mb-20" />
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title" placeholder="标题" />
      </el-form-item>
      <div class="py-2">
        <el-divider />
      </div>
      <el-form-item label="新增" class="mt-3">
        <div class="flex justify-around">
          <el-button class="w-1/3">单选题</el-button>
          <el-button class="w-1/3">多选题</el-button>
          <el-button class="w-1/3">文本题</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  private form = {
    title: ""
  };
}
</script>
