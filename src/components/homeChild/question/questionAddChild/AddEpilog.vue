<!-- AddEpilog.vue -->
<template>
  <div class="row">
    <HomeItem widType="2">
      <ItemHead>
        添加结语
      </ItemHead>
      <ItemBody class="add-epilog-form">
        <div class="add-epilog-form-left">
          <div class="epilog-item" 
               :key="index" 
               v-for="(epilog, index) in getEpilog">
            <div class="epilog-item-left">
              <InputPack @getValue="setMinScore"
                         :value="epilog.minScore"
                         :inputName="{index}"></InputPack>
              <span>~</span>
              <InputPack @getValue="setMaxScore"
                         :value="epilog.maxScore"
                         :inputName="{index}"></InputPack>
            </div>
            <div class="epilog-item-right">
              <InputPack placeholder="添加结语"
                         @getValue="setRemark"
                         :value="epilog.remark"
                         :inputName="{index}"></InputPack>
            </div>
          </div>
          <div class="epilog-item">
            <div class="epilog-item-left">
              <ButtonPack @click.native="saveEpilog">保存结语</ButtonPack>
            </div>
          </div>
        </div>
        <div class="add-epilog-form-right">
          <h5 class="form-right-title">总分数</h5>
          <span class="form-right-show">
            {{inquiryData.maxScore}}
          </span>
          <ButtonPack @click.native="addEpilog"
                      class="form-right-add-button">增加结语节点</ButtonPack>
        </div>
      </ItemBody>
    </HomeItem>
    <HomeItem widType="1" class="inquiry-info-show">
      <ItemHead>
        问卷信息一览表
      </ItemHead>
      <ItemBody>
        <span class="inquiry-info-show-item">
          <span class="info-show-item-left">问题数</span>
          <span class="info-show-item-right">
            {{getQuestionNum}}
          </span>
        </span>
        <span class="inquiry-info-show-item">
          <span class="info-show-item-left">选项数</span>
          <span class="info-show-item-right">
            {{getOpationNum}}
          </span>
        </span>
        <span class="inquiry-info-show-item">
          <span class="info-show-item-left">结语数</span>
          <span class="info-show-item-right">
            {{getEpilog.length}}
          </span>
        </span>
      </ItemBody>
    </HomeItem>
  </div>
</template>

<script>
// home单元组件
import HomeItem from '@/components/homeChild/HomeItem'
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
// input组件
import InputPack from '@/components/form/InputPack'
export default {
  name: 'addepilog',
  data () {
    return {
    }
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody,
    ButtonPack,
    InputPack
  },
  computed: {
    inquiryData () {
      return this.$store.state.inquiryEdit.inquiryData
    },
    /**
     * 获取问题数
     */
    getQuestionNum () {
      if (this.$store.state.inquiryEdit.inquiryData.questionData) {
        return this.$store.state.inquiryEdit.inquiryData.questionData.length
      } else {
        return 0
      }
    },
    /**
     * 获取选项数
     */
    getOpationNum () {
      if (this.$store.state.inquiryEdit.inquiryData.questionData) {
        let totalOpationNum = 0
        this.$store.state.inquiryEdit.inquiryData.questionData.forEach(item => {
          totalOpationNum += item.opationData.length
        })
        return totalOpationNum
      } else {
        return 0
      }
    },
    getEpilog () {
      return this.$store.state.inquiryEdit.inquiryEpilog
    }
  },
  methods: {
    /**
     * 设置最小分值
     * @param value 要设置的值
     * @param epilogIndex 结语的系数
     */
    setMinScore (value, {index}) {
      // 这里判断
      if (value < 0) {
        alert('分值最小等于0')
        value = 0
      } else if (value > this.getEpilog[index].maxScore) {
        alert('分值最大等于最大值')
        value = this.getEpilog[index].maxScore
      }
      this.$store.commit('setMinScore', {
        value,
        epilogIndex: index
      })
    },
    /**
     * 设置最大分值
     * @param value 要设置的值
     * @param index 结语的系数
     */
    setMaxScore (value, {index}) {
      // 这里判断
      if (value < this.getEpilog[index].minScore) {
        alert('分值最小等于最小值')
        value = this.getEpilog[index].minScore
      } else if (value > this.inquiryData.maxScore) {
        alert('分值最大等于问卷最大值')
        value = this.inquiryData.maxScore
      }
      this.$store.commit('setMaxScore', {
        value,
        epilogIndex: index
      })
    },
    /**
     * 设置最大分值
     * @param value 要设置的值
     * @param index 结语的系数
     */
    setRemark (value, {index}) {
      this.$store.commit('setRemark', {
        value,
        epilogIndex: index
      })
    },
    /**
     * 增加结语
     */
    addEpilog () {
      this.$store.commit('addEpilog')
    },
    saveEpilog () {
      this.$http.post('/home/manager/saveEpilog', {
        inquiryId: this.inquiryData.id,
        inquiryEpilog: this.getEpilog
      })
      .then(res => {
        let result = res.data
        if (result.statusObj.status === 1) {
          location.href = `/#/home/questionAdd/AddPublish/${this.inquiryData.id}`
        } else {
          alert('保存结语未成功')
        }
      })
    }
  },
  beforeMount () {
    // 这里判断url中是否有id,如果有查询,如果没有跳到选择类别
    // 查询问卷信息,
    this.$store.dispatch('getInquiry', this.$route.params.inquiryId)
    this.$store.commit('goProcess', 3)
  }
}
</script>
<style scoped>
.row {
  display: flex;
  justify-content: space-between;
}
.add-epilog-form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
/* 增加结语左开始 */
.add-epilog-form-left {
  width: 78%;
  margin-right: 2%;
}
.epilog-item {
  width: 100%; height: 40px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
}
.epilog-item-left {
  display: flex;
  width: 28%;
}
.epilog-item-left span {
  width: 10%;
  text-align: center;
  line-height: 40px;
}
.epilog-item-left input {
  width: 45%;
}
/* 增加结语左结束 */
/* 增加结语右结束 */
.epilog-item-right {
  display: flex;
  width: 70%;
}
.add-epilog-form-right {
  width: 20%; height: 140px;
  position: relative;
  background: #F5F5F6;
  color: #666;
}
.form-right-title {
  font-weight: 400;
  padding-left: 10px;
  padding-top: 8px;
}
.form-right-show {
  width: 100%;
  color: #9B9EA0;
  font-size: 26px;
  display: block;
  margin-top: 15px;
  text-align: center;
}
.form-right-add-button {
  width: 100%; height: 40px;
  border: 0;
  position: absolute;
  bottom: 0;
}
button.form-right-add-button {
  box-shadow: 0 0 0 #fff;
  font-weight: 400;
}
/* 增加结语右结束 */

/* 问卷基本信息展示开始 */
.inquiry-info-show {
  align-self: flex-start;
}
.inquiry-info-show-item {
  width: 100%; height: 40px;
  display: flex;
  line-height: 40px;
  margin-bottom: 8px;
  background: #F5F5F6;
}
.inquiry-info-show-item:last-child {
  margin-bottom: 0;
}
.info-show-item-left {
  width: 50%;
  margin-left: 30px;
  color: #666;
  font-size: 12px;
}
.info-show-item-right {
  width: 50%;
  font-size: 18px;
  color: #C6D0D4;
}
/* 问卷基本信息展示结束 */
</style>