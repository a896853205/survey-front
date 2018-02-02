<!-- AddPublishInquiryLink.vue
// addPublishInquiryLink 问卷链接组件
import AddPublishInquiryLink from '@/components/homeChild/question/questionAddChild/addPublishChild/AddPublishInquiryLink'
 -->
<template>
  <HomeItem class="inquiry-link-container" widType="1">
    <ItemBody class="inquiry-link">
      <div>
        <img class="QR-code-img" :src="QRUrl"/>
      </div>
      <div class="inquiry-link-right">
        <span class="inquiry-link-right-title">问卷链接:</span>
        <p class="inquiry-link-right-link">
          {{ inquiryUrl }}
        </p>
      </div>
    </ItemBody>
  </HomeItem>
</template>

<script>
// home单元组件
import HomeItem from '@/components/homeChild/HomeItem'
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
export default {
  props: ['inquiryId'],
  data () {
    return {
    }
  },
  components: {
    HomeItem,
    ItemBody
  },
  computed: {
    /**
     * 获取问卷的url
     */
    inquiryUrl () {
      // 这里的#是%23
      return `${location.origin}/%23/inquiry/${this.inquiryId}`
    },
    /**
     * 画出问卷的二维码的url
     */
    QRUrl () {
      return `http://qr.liantu.com/api.php?text=${this.inquiryUrl}`
    }
  },
  methods: {}
}
</script>
<style scoped>
.inquiry-link {
  display: flex;
  font-size: 14px;
  justify-content: space-around;
}
.inquiry-link-container {
  align-self: flex-start;
}
.QR-code-img {
  width: 110px;
}
.inquiry-link-right {
  margin-top: 5px;
  margin-left: 20px;
}
.inquiry-link-right-title {
  display: block;
  padding-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
}
.inquiry-link-right-link {
  font-size: 12px;
}
</style>