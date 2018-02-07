<!-- AnswerAnalyze.vue -->
<template>
  <div class="body">
    <section class="section-top">
      <div class="top-head-main"></div>
      <div class="top-head-sub"></div>
      <div class="inquiry-show">
        <h1 class="inquiry-title">{{myInquiry.title}}</h1>
        <p class="inquiry-describe">
          {{myInquiry.description}}
        </p>
      </div>
    </section>
    <section class="section-bottom">
      <!-- 饼形图 -->
      <PieChart class="pie-chart" :analyzeArr="analyzeArr"></PieChart>
      <div class="bottom-right">
        <div class="bottom-right-item">
          <img src="../assets/analyze-icon-one.png" alt="">
          <p>
            您的分值为:
          </p>
          <h5 class="left-item">
            {{ myAnswer.score }}
          </h5>
        </div>
        <div class="bottom-right-item">
          <img src="../assets/analyze-icon-two.png" alt="">
          <p>
            您的结语是:
          </p>
          <ul>
            <li :key="index" v-for="(item, index) in myEpilog">
              {{item.epilog}}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
// flow布局每块
import FlowItem from '@/components/layOut/flow/FlowItem'
// 回答总体分析饼形图
import PieChart from '@/components/analyzeChild/PieChart'
export default {
  name: 'answeranalyze',
  data () {
    return {
      myAnswer: {},
      myEpilog: [],
      myInquiry: {},
      analyzeArr: []
    }
  },
  components: {
    FlowContainer,
    FlowColumn,
    FlowItem,
    PieChart
  },
  computed: {},
  methods: {
  },
  beforeMount () {
    // 查询个人分析数据,
    this.$http.post('/getAnalyze', {
      answerId: this.$route.params.answerId
    })
    .then(res => {
      if (res.data.statusObj.status === 1) {
        // 展示所有数据
        this.myAnswer = res.data.myAnswer
        this.myEpilog = res.data.myEpilog
        this.myInquiry = res.data.myInquiry
        this.analyzeArr = res.data.analyzeArr
      }
    })
  }
}
</script>
<style scoped>
@media screen and (min-width: 1200px) {
  .body {
    width: 100%; height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #373D41;
  }
  /* 上半部分开始 */
  .section-top {
    height: 520px;
    background: url('../assets/analyze-background.jpg');
    background-color: #1f2325;
    background-size: 1400px;
    background-repeat: no-repeat;
    background-position: 50% 0;
  }
  .top-head-main {
    height: 40px;
    border-bottom: 1px solid hsla(0,0%,100%,.15);
  }
  .top-head-sub {
    height: 60px;
    border-bottom: 1px solid hsla(0,0%,100%,.15);
  }
  .inquiry-show {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .inquiry-title {
    color: #fff;
    font-size: 36px;
    font-weight: 400;
  }
  .inquiry-describe {
    width: 650px;
    margin-top: 12px;
    font-size: 14px;
    color: #fff;
    line-height: 24px;
  }
  /* 上半部分结束 */
  /* 下半部分开始 */
  .section-bottom {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .pie-chart {
    width: 400px; height: 400px;
    position: absolute;
    top: -200px;
    left: 0;
  }
  .bottom-right {
    display: flex;
    position: absolute;
    top: -75px;
    right: 0;
    box-shadow: 0 0 10px #000;
  }
  .bottom-right-item {
    width: 395px; height: 150px;
    padding-left: 120px;
    padding-top: 20px;
    font-size: 14px;
    color: #fff;
    background: #00AFC9;
    position: relative;
  }
  .bottom-right-item:first-child {
    background: #00A6C0;
  }
  .bottom-right-item img {
    width: 50px;
    position: absolute;
    top: 50px;
    left: 50px;
  }
  .left-item {
    font-size: 35px;
  }
  /* 下半部分结束 */  
}
@media screen and (max-width: 1200px) {
  .body {
    background: #293C55;
    color: #fff;
  }
  img {
    display: none;
  }
  .inquiry-title {
    height: 50px;
    padding-left: 10px;
    line-height: 50px;
    font-weight: 400;
    border-bottom: 1px solid #eee;
    box-shadow: 0 0 10px #000;
  }
  .inquiry-describe {
    padding: 10px;
  }
  .pie-chart {
    width: 100%; height: 300px;
    margin-top: 20px;
  }
  .bottom-right-item {
    padding: 10px;
  }
  .bottom-right-item h5,ul {
    font-size: 12px;
  }
}
</style>