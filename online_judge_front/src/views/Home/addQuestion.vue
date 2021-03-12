<template>
  <div class="container">
    <!--header-->
    <el-page-header @back="$router.back()" content="新增问卷" class="mb-20" />
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title" placeholder="标题" />
      </el-form-item>

      <!--分割线-->
      <div class="py-2">
        <el-divider />
      </div>

      <!--题目-->
      <el-form-item
        v-for="(item, index) in form.questions"
        :key="index"
        :label="(index + 1).toString()"
        ref="form"
        class="mt-12"
      >
        <div class="flex flex-row justify-between">
          <el-input v-model="item.title" class="mb-6" />
          <div
            class="w-1/12 text-red-500 flex justify-center items-center cursor-pointer"
            style="height: 40px;"
            v-show="form.questions.length > 1"
          >
            <i class="el-icon-delete" @click="delFormItem(index)" />
          </div>
        </div>
        <!--单选 status = 0-->
        <div v-if="item.status === 0" class="flex flex-row justify-between">
          <el-radio-group v-model="item.answer">
            <el-radio
              v-for="(optionItem, optionIndex) in item.options"
              :key="optionIndex"
              v-model="optionItem.value"
              :label="optionItem.value"
            >
              <el-input v-model="optionItem.label" />
            </el-radio>
          </el-radio-group>
        </div>
        <!--多选 status = 1-->
        <div
          v-else-if="item.status === 1"
          class="flex flex-row justify-between"
        >
          <el-checkbox-group v-model="item.answer">
            <el-checkbox
              v-for="(optionsItem, optionsIndex) in item.options"
              :key="optionsIndex"
              :label="optionsItem.label"
            >
              <el-input v-model="optionsItem.label" />
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <!--文本 status = 2-->
        <div v-else-if="item.status === 2">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="item.answer"
          />
        </div>
      </el-form-item>

      <!--新增题目-->
      <el-form-item label="新增" class="mt-20">
        <div class="flex justify-around">
          <el-button class="w-1/3" @click="addNewQuestion(0)">单选题</el-button>
          <el-button class="w-1/3" @click="addNewQuestion(1)">多选题</el-button>
          <el-button class="w-1/3" @click="addNewQuestion(2)">文本题</el-button>
        </div>
      </el-form-item>

      <!--提交-->
      <el-form-item class="mt-20">
        <div class="flex justify-around">
          <el-button class="w-1/3" @click="resetForm">取消</el-button>
          <el-button class="w-1/3" type="primary" @click="handleSave">
            保存
          </el-button>
          <el-button class="w-1/3" type="success" @click="handleSubmit">
            发布
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  private questionTemplate = {
    question0: {
      title: "",
      status: 0, // 0 单选 1 多选 2 文本
      answer: "",
      options: [
        {
          label: "",
          value: "0"
        },
        {
          label: "",
          value: "1"
        },
        {
          label: "",
          value: "2"
        },
        {
          label: "",
          value: "3"
        }
      ]
    },
    question1: {
      title: "",
      status: 1, // 0 单选 1 多选 2 文本
      answer: [],
      options: [
        {
          label: "",
          value: "0"
        },
        {
          label: "",
          value: "1"
        },
        {
          label: "",
          value: "2"
        },
        {
          label: "",
          value: "3"
        }
      ]
    },
    question2: {
      title: "",
      status: 2, // 0 单选 1 多选 2 文本
      answer: "",
      options: ""
    },
    emptyQuestion: {
      title: "",
      questions: [
        {
          title: "",
          status: 0,
          answer: "",
          options: [
            {
              label: "",
              value: "0"
            },
            {
              label: "",
              value: "1"
            },
            {
              label: "",
              value: "2"
            },
            {
              label: "",
              value: "3"
            }
          ]
        }
      ]
    }
  };

  private form = {
    title: "",
    questions: [
      {
        title: "",
        status: 0,
        answer: "",
        options: [
          {
            label: "",
            value: "0"
          },
          {
            label: "",
            value: "1"
          },
          {
            label: "",
            value: "2"
          },
          {
            label: "",
            value: "3"
          }
        ]
      }
    ]
  };

  public addNewQuestion(status: number): void {
    if (status === 0) {
      this.form.questions.push(
        JSON.parse(JSON.stringify(this.questionTemplate.question0))
      );
    } else if (status === 1) {
      this.form.questions.push(
        JSON.parse(JSON.stringify(this.questionTemplate.question1))
      );
    } else {
      this.form.questions.push(
        JSON.parse(JSON.stringify(this.questionTemplate.question2))
      );
    }
  }

  public delFormItem(questionIndex: number) {
    this.form.questions.splice(questionIndex, 1);
  }

  public resetForm(): void {
    this.$router.back();
    setTimeout(() => {
      this.form = JSON.parse(
        JSON.stringify(this.questionTemplate.emptyQuestion)
      );
    }, 300);
  }

  public handleSave() {
    this.$message({
      message: "保存成功",
      type: "info"
    });
  }

  public handleSubmit() {
    this.$message({
      message: "发布成功",
      type: "success"
    });
  }
}
</script>
