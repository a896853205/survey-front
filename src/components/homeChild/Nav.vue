<template>
  <nav id='navQ' class='nav'>
    <button @click="changeWidth" type="button" class="change-button">| | |</button>
    <ul>
      <li v-for="li in navData" 
          @click="isShowChild(li)" 
          :style="{'max-height': li.maxHeight}" 
          :class="isShowChild ? 'active-li': ''"
          :key="li.liName">
        <a class="par-a">
          <!-- 
            主图标
            想旋转加v-if='li.children.length != 0' 
            :style="{'transform': arrRotate(li)}" 
            不想旋转就去掉
          -->
          <i v-if='li.children.length != 0' 
            :style="{'transform': arrRotate(li)}" 
            class='iconfont icon-more'></i>
          <span :style="{'display': navUnflod ? 'inline' : 'none'}">{{li.liName}}</span>
        </a>
        <ul class='child-ul'>
          <li class='child-li' 
              v-for='childLi in li.children'
              :key="childLi.name">
            <a @click.stop 
               :href='childLi.liHref'>
              <!-- 这里是子图标 -->
              <i class="iconfont" :class="childLi.iconClass"></i>
              <span :style="{'display': navUnflod ? 'inline' : 'none'}">{{childLi.liName}}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
// max为a的line-height + padding
const maxHeight = '40px'
export default {
  name: 'navQ',
  data () {
    return {
      navUnflod: 'true',
      navData: [
        {
          liName: '问卷基础服务',
          liHref: '',
          iconClass: '',
          children: [
            {
              liName: '问卷统览',
              liHref: '/#/home/questionShow',
              iconClass: 'icon-viewlist'
            },
            {
              liName: '增加问卷',
              liHref: '/#/home/questionAdd',
              iconClass: 'icon-edit'
            }
          ],
          isShowChild: false,
          maxHeight: maxHeight
        },
        {
          liName: '问卷回答与管理',
          liHref: '',
          iconClass: '',
          children: [
            {
              liName: '回答总览',
              liHref: '/#/home/answerShow',
              iconClass: 'icon-text'
            },
            {
              liName: '图形分析',
              liHref: '/#/home/answerAnalyze',
              iconClass: 'icon-data'
            }
          ],
          isShowChild: false,
          maxHeight: maxHeight
        },
        {
          liName: '个人设置',
          liHref: '',
          iconClass: '',
          children: [
            {
              liName: '修改信息',
              liHref: '/#/home/configInfo',
              iconClass: 'icon-set'
            },
            {
              liName: '修改密码',
              liHref: '/#/home/configPassWord',
              iconClass: 'icon-trade-assurance'
            }
          ],
          isShowChild: false,
          maxHeight: maxHeight
        }
      ]
    }
  },
  methods: {
    /**
     * 展示子菜单,使用max-height的方法
     *
     * @param activeLi
     */
    isShowChild (activeLi) {
      if (activeLi.isShowChild) {
        activeLi.isShowChild = !activeLi.isShowChild
        activeLi.maxHeight = maxHeight
      } else {
        if (activeLi.children.length === 0) {
          // 跳转
        } else {
          this.navData.forEach(item => {
            item.isShowChild = false
            item.maxHeight = maxHeight
          })
          // 一个是21px
          activeLi.maxHeight = `${(activeLi.children.length + 1) * 42}px`
          activeLi.isShowChild = !activeLi.isShowChild
        }
      }
    },
    /**
     * 箭头旋转角度
     * @param {object} activeLi 选中的li标签
     * @returns {string} 旋转的角度rotate(90deg)|rotate(0deg)
     */
    arrRotate (activeLi) {
      if (activeLi.isShowChild) {
        return 'rotate(90deg)'
      } else {
        return 'rotate(0deg)'
      }
    },
    /**
     * 改变宽度
     */
    changeWidth () {
      if (!this.navUnflod) {
        setTimeout(() => {
          this.navUnflod = !this.navUnflod
        }, 200)
      } else {
        this.navUnflod = !this.navUnflod
      }
      this.$emit('change')
    }
  },
  // 创建时查询nav数据
  created () {
    // 使用vuex中的数据查询
  }
}
</script>

<style scoped>
.nav {
  height: 100%; width: 100%;
  background: #333744;
  float: left;
  box-sizing: border-box;
  color: #eee;
  font-size: 12px;
  line-height: 12px;
}
.change-button {
  height: 30px;  width: 100%;
  border: 0;
  background: #4A5064;
  color: #aeb9c2;
  text-align: center;
  line-height: 30px;
  transition: .2s;
  cursor: pointer;
}
.change-button:hover {
  color: #fff;
}
.nav li {
  transition: 0.3s;
  overflow: hidden;
  cursor: pointer;
  -moz-user-select: none;
  -webkit-user-select: none;
}
.par-a:hover {
  background: rgb(0,193,222);
}
/* .nav li:hover {
  background: #232a2f;
} */
.nav a:link,
.nav a:valid,
.nav a:hover,
.nav a:active,
.nav a {
  display: block;
  padding: 14px 0 14px 10px;
}
.nav li i {
  display: inline-block;
  width: 30px;
  text-align: center;
  transition: 0.3s;
}
.child-ul li {
  position: relative;
}
/* .child-ul li .fa-circle-thin {
  position: absolute;
  font-size: 16px;
  line-height: 36px;
  top: 0;
  left: -16px;
} */
/* 列表主选项的颜色,样式开始 */
.active-li > a {
  background: #42485B;
}
.active-li a,
.active-li .fa {
  color: #fff;
}
.active-li a {
  position: relative;
  z-index: 20;
  transition: 0.2s;
  left: 0;
}
/* 列表主选项的颜色,样式结束 */
.child-li {
  position: relative;
  transition: 0.2s;
  left: 0;
}
.child-li:hover {
  background: rgb(74, 80,100);
}
.child-li:hover a{
  left: 15px;
}
</style>
