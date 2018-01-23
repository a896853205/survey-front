<!-- AddIssueForm.vue -->
<template>
  <HomeItem widType="2">
    <ItemHead>问卷编辑区</ItemHead>
    <ItemBody>
      <h2 class="issue-title">测试问卷1</h2>
      <p class="issue-describe">问卷描述</p>    
      <div class="issue-right-body">
        <div :key="questionIndex"
             class="issue-item"
             v-for="(question, questionIndex) in questionData">
          <span class="issue-number">{{questionIndex + 1}}</span>
          <h5>{{question.name}}</h5>
          <div class="issue-opation-body">
            <div @click="activeOpation(question, opation)"
                :key="index"
                v-for="(opation, index) in question.opationData" 
                class="issue-opation" 
                :class="{'active-opation': opation.isActive}">
              <i class="iconfont" :class="opation.isActive ? 'icon-yuanxingxuanzhongfill': 'icon-yuanxingweixuanzhong'"></i>
              <span class="opation-describe">{{opation.name}}</span>
            </div>
          </div>
          <div class="edit-menu">
            <span @click="editQuestion(question)" class="iconfont icon-edit edit-icon"></span>
            <span @click="deleteQuestion(questionIndex)" class="iconfont icon-delete"></span>
            <span ></span>
          </div>
          <div class="edit-outer-box" :class="{unedit: !question.isEdit}">
            <div class="edit-box">
              <div class="edit-first-row">
                <span class="first-title">
                  题目:
                </span>
                <div class="first-input">
                  <inputPack @getValue="getValue" 
                            type="text"
                            :value="question.name"
                            :inputName="question"></inputPack>
                </div>
                <div class="first-opation">
                  <span @click="questionUp(questionIndex)" class="iconfont icon-less" title="题目上移"></span>
                  <span @click="questionDown(questionIndex)" class="iconfont icon-moreunfold" title="题目下移"></span>
                  <span @click="addOpation(questionIndex)" class="iconfont icon-add" title="增加选项"></span>
                </div>
              </div>
              <hr class="edit-hr">
              <div class="edit-second-row">
                <span class="second-title">
                  选项:
                </span>
                <div class="second-opation-opation">
                  <div class="second-opation-row"
                       :key="index"
                       v-for="(opation, index) in question.opationData">
                    <div class="second-opation-input">
                      <InputPack  type="text"
                                @getValue="getValue"
                                :value="opation.name"
                                :inputName="opation"></InputPack>
                    </div>
                    <div class="second-opation-detail">
                      <span class="iconfont icon-delete"></span>
                      <span class="iconfont icon-refresh"></span>
                    </div>
                  </div>
                </div>
              </div>
              <ButtonPack>确定及保存</ButtonPack>
            </div>
          </div>
        </div>
      </div>
    </ItemBody>
  </HomeItem>
</template>

<script>
// home单元组件
import HomeItem from '@/components/homeChild/HomeItem'
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
// input组件
import InputPack from '@/components/form/InputPack'
// button组件
import ButtonPack from '@/components/form/ButtonPack'

export default {
  name: 'addissueform',
  data () {
    return {
      questionData: [{
        name: '问题1?',
        opationData: [{
          name: '选项1',
          value: '选项1',
          isActive: false
        }, {
          name: '选项2',
          value: '选项2',
          isActive: false
        }, {
          name: '选项3',
          value: '选项3',
          isActive: false
        }, {
          name: '选项4',
          value: '选项4',
          isActive: false
        }],
        isEdit: false
      }, {
        name: '问题1?',
        opationData: [{
          name: '选项1',
          value: '选项1',
          isActive: false
        }, {
          name: '选项2',
          value: '选项2',
          isActive: false
        }, {
          name: '选项3',
          value: '选项3',
          isActive: false
        }, {
          name: '选项4',
          value: '选项4',
          isActive: false
        }],
        isEdit: false
      }, {
        name: '问题1?',
        opationData: [{
          name: '选项1',
          value: '选项1',
          isActive: false
        }, {
          name: '选项2',
          value: '选项2',
          isActive: false
        }, {
          name: '选项3',
          value: '选项3',
          isActive: false
        }, {
          name: '选项4',
          value: '选项4',
          isActive: false
        }],
        isEdit: false
      }, {
        name: '问题1?',
        opationData: [{
          name: '选项1',
          value: '选项1',
          isActive: false
        }, {
          name: '选项2',
          value: '选项2',
          isActive: false
        }, {
          name: '选项3',
          value: '选项3',
          isActive: false
        }, {
          name: '选项4',
          value: '选项4',
          isActive: false
        }],
        isEdit: false
      }]
    }
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody,
    InputPack,
    ButtonPack
  },
  computed: {},
  methods: {
    /**
     * 点击选项事件
     * @param {Object} question 选中选项的题目
     * @param {Object} opation 选中的选项
     */
    activeOpation (question, opation) {
      question.opationData.forEach(value => {
        value.isActive = false
      })
      opation.isActive = true
    },
    /**
     * 开启编辑问题
     * @param {Object} question 开始编辑的题目
     */
    editQuestion (question) {
      question.isEdit = true
    },
    /**
     * 删除的当前问题
     * @param {number} questionIndex 问卷的系数
     */
    deleteQuestion (questionIndex) {
      console.log(questionIndex)
      this.questionData.splice(questionIndex, 1)
    },
    /**
     * 题目上移
     * @param {number} questionIndex 问卷的系数
     */
    questionUp (questionIndex) {
      if (questionIndex === 0) {
        alert('第一题不能上移啦')
      } else {
        // 与上题交换
        let temp = this.questionData[questionIndex]
        this.$set(this.questionData, questionIndex, this.questionData[questionIndex - 1])
        this.$set(this.questionData, questionIndex - 1, temp)
      }
    },
    /**
     * 题目下移
     * @param {number} questionIndex 问卷系数
     */
    questionDown (questionIndex) {
      if (questionIndex === this.questionData.length - 1) {
        alert('最后一题不能下移啦')
      } else {
        // 与下题交换
        let temp = this.questionData[questionIndex]
        this.$set(this.questionData, questionIndex, this.questionData[questionIndex + 1])
        this.$set(this.questionData, questionIndex + 1, temp)
      }
    },
    /**
     * 增加当前问题的选项
     * @param {number} questionIndex 问卷系数
     */
    addOpation (questionIndex) {
      this.questionData[questionIndex].opationData.push({
        name: '新建的选项',
        value: '新建的选项',
        isActive: false
      })
    },
    /**
     * input获取值
     */
    getValue (value, opation) {
      opation.name = value
    }
  }
}
</script>
<style scoped>

/* 问卷头开始 */
.issue-title {
  margin-bottom: 10px;
  text-align: center;
  color: #28B5D6;
  font-weight: 400;
}
.issue-describe {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}
/* 问卷头结束 */
/* 问卷体开始 */
.issue-right-body {
  width: 80%;
  margin: 0 auto;
  padding: 20px 60px;
  background: #EAEDF1;
  font-size: 14px;
}
.issue-right-body h5 {
  width: 100%;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 400;
  flex-shrink: 0;
}
.issue-opation-body {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: space-between;
}
.issue-item {
  margin-top: 40px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.issue-item:first-child {
  margin-top: 0;
}
.issue-opation {
  width: 48%;
  margin-top: 14px;
  padding: 8px 15px;
  background: #fff;
  flex-shrink: 0;
  border: 1px solid rgb(209, 210, 212);
  cursor: pointer;
  transition: .2s;
}
.issue-opation:hover {
  box-shadow: 0 1px 2px #888;
}
.issue-opation:nth-child(2),
.issue-opation:nth-child(1) {
  margin-top: 0;
}
.issue-opation input {
  display: none;
}
.opation-describe {
  margin-left: 8px;
}
.issue-number {
  width: 25px; height: 25px;
  background: #fff;
  border-radius: 50%;
  font-weight: 800;
  text-align: center;
  line-height: 25px;
  position: absolute;
  left: -40px;
  color: #333;
}
.iconfont {
  font-size: 13.5px;
}
/* 点击之后的类 */
.active-opation {
  color: #fff;
  background: #61C9E5;
  border: 1px solid #61C9E5;
}
.edit-outer-box {
  margin-left: -60px;
  margin-right: -60px;
  margin-top: 10px;
  max-height: 500px;
  overflow: hidden;
  transition: .2s;
  border-left: 2px dotted #fff;
  border-right: 2px dotted #fff;
  z-index: 2;
}
.edit-box {
  padding: 10px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
}
.unedit {
  max-height: 0;
}

.issue-item:hover .edit-menu {
  opacity: 1;
}
.edit-menu {
  width: 30px; height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  right: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .1s;
  z-index: 1;
}
.edit-menu .edit-icon {
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;
}
  /* 编辑框内部结构开始 */
  .edit-first-row {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
  }
  .edit-hr {
    width: 100%;
    border: 1px solid rgb(209, 210, 212);
    border-top: 0;
  }
  .edit-second-row {
    width: 100%;
    margin-top: 10px;
    display: flex;
  }
  /* 第一行开始 */
  .first-title {
    width: 25%;
    flex-shrink: 0;
    text-align: center;
    line-height: 40px;
  }
  .first-input{
    width: 25%;
    flex-shrink: 0;
  }
  .first-opation {
    width: 50%;
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    line-height: 40px;
  }
  /* 第一行结束 */
  /* 第二行开始 */
  .second-title {
    width: 25%;
    flex-shrink: 0;
    text-align: center;
    line-height: 40px;
  }
  .second-opation-row {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
  }
  .second-opation-opation {
    width: 75%;
    flex-shrink: 0;
    flex-wrap: wrap;
    display: flex;
  }
  .second-opation-input {
    width: 33.333333333333333333333333%;
    flex-shrink: 0;
  }
  .second-opation-detail {
    width: 66.666666666666666666666666%;
    display: flex;
    justify-content: space-around;
  }
  .second-opation-detail span {
    line-height: 40px;
  }
  /* 第二行结束 */
  span.iconfont {
    font-size: 20px;
    cursor: pointer;
  }
  span.iconfont:hover {
    color: #61C9E5;
  }
  span.icon-delete:hover {
    color: red;
  }
  /* 编辑框内部结构结束 */
/* 问卷体结束 */
/* 编辑盒子 */

</style>