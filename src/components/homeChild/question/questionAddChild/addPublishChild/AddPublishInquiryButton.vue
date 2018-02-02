<!-- AddPublishInquiryButton.vue
// addPublishInquiryButton 问卷按钮组件
import AddPublishInquiryButton from '@/components/homeChild/question/questionAddChild/addPublishChild/AddPublishInquiryButton'
 -->
<template>
  <HomeItem widType="1">
    <ItemHead>
      问卷发布状态
    </ItemHead>
    <ItemBody>
      <div v-if="getInquiryData.toggle === '0'" class="unpublish-publish-container">
        <ButtonPack class="un-publish-button">未发布</ButtonPack>
        <ButtonPack @click.native="publish">点击发布</ButtonPack>
      </div>
      <div v-if="getInquiryData.toggle === '1'" class="unpublish-publish-container">
        <ButtonPack @click.native="disPublish">点击取消发布</ButtonPack>
        <ButtonPack class="un-publish-button">已发布</ButtonPack>
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
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  name: 'addPublishInquiryButton',
  data () {
    return {
    }
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody,
    ButtonPack
  },
  computed: {
    /**
     * 获取问卷信息
     */
    getInquiryData () {
      return this.$store.state.inquiryEdit.inquiryData
    }
  },
  methods: {
    /**
     * 问卷发布事件
     */
    publish () {
      this.$http.post('/home/manager/toggle', {
        inquiryId: this.getInquiryData.id,
        inquriySwitch: '1'
      })
      .then(res => {
        let result = res.data
        if (result.statusObj.status === 1) {
          this.$store.commit('toggleInquiry', '1')
          this.$store.commit('goProcess', 5)
        } else {
          alert('发布未成功')
        }
      })
    },
    /**
     * 问卷取消发布事件
     */
    disPublish () {
      this.$http.post('/home/manager/toggle', {
        inquiryId: this.getInquiryData.id,
        inquriySwitch: '0'
      })
      .then(res => {
        let result = res.data
        if (result.statusObj.status === 1) {
          this.$store.commit('toggleInquiry', '0')
          this.$store.commit('goProcess', 4)
        } else {
          alert('取消发布未成功')
        }
      })
    }
  }
}
</script>
<style scoped>
/* 发布按钮开始 */
.unpublish-publish-container {
  display: flex;
}
button.un-publish-button{
  background: #F5F5F6;
  font-weight: 400;
  color: #666;
  box-shadow: 0 0 0 #fff;
}
button.un-publish-button:hover {
  background: #F5F5F6;
  cursor: not-allowed;
}
/* 发布按钮结束 */
</style>