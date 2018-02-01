<!-- Footer.vue
// 底部组件
import Foot from '@/components/foot/Footer'
 -->
<template>
  <div id="buttom">
    <div class="container" :class="type">
      <UlPack class="foot-base" :listClass="footBaseOpation.style" :linkList="footBaseOpation.data"></UlPack>
      <UlPack :listClass="footOtherOpation.style" :linkList="footOtherOpation.data"></UlPack>
      <p class="copyright">© 2009-2018 版权所有 ICP证：XXXX-200XXXXX </p>
      <p class="copyright"> XX网安备 xxxxxxx000099号 </p>
    </div>
  </div>
</template>

<script>
// 列表组件
import UlPack from '@/components/form/UlPack'
export default {
  props: ['type'],
  name: 'buttom',
  data () {
    return {
      footBaseOpation: {
        data: [{
          name: '关于我们',
          href: ''
        }, {
          name: '法律声明及隐私权政策',
          href: ''
        }, {
          name: '廉正举报',
          href: ''
        }, {
          name: '友情链接',
          href: ''
        }],
        style: 'login-base-list'
      },
      footOtherOpation: {
        data: [{
          name: '阿里巴巴集团',
          href: ''
        }, {
          name: '淘宝网',
          href: ''
        }, {
          name: '天猫',
          href: ''
        }, {
          name: '聚划算',
          href: ''
        }, {
          name: '全球速卖通',
          href: ''
        }, {
          name: '阿里巴巴国际交易市场',
          href: ''
        }, {
          name: '1688',
          href: ''
        }, {
          name: '阿里妈妈',
          href: ''
        }, {
          name: 'YunOs',
          href: ''
        }, {
          name: '阿里通信',
          href: ''
        }, {
          name: '万网',
          href: ''
        }, {
          name: '高德',
          href: ''
        }, {
          name: 'UC',
          href: ''
        }, {
          name: '友盟',
          href: ''
        }, {
          name: '虾米',
          href: ''
        }, {
          name: '阿里星球',
          href: ''
        }, {
          name: '来往',
          href: ''
        }, {
          name: '钉钉',
          href: ''
        }, {
          name: '支付宝',
          href: ''
        }],
        style: 'login-foot-other-list'
      }
    }
  },
  components: {
    UlPack
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
#buttom {
  padding: 20px;
  background:rgba(0,0,0,0);
  box-sizing: border-box;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.foot-base {
  margin-top: 10px;
  margin-bottom: 35px;
}
.copyright {
  color: #73777A;
}
/* 注册脚部不同处开始 */
.register-foot {
  border-top: 1px solid rgb(207, 208, 209);
}
/* 注册脚部不同处结束 */
</style>