<template>
  <nav id='navQ' class='nav'>
    <ul>
      <li v-for="li in navData" 
          @click="isShowChild(li)" 
          :style="{'max-height': li.maxHeight}" 
          :class="isShowChild ? 'active-li': ''"
          :key="li.liName">
        <a class="par-a">
          <!-- 这里是主图标 -->
          <!-- <i :class='li.faClass'></i> -->
          {{li.liName}}
          <!-- 这里是旋转90度的小角 -->
          <!-- <i v-if='li.children.length != 0' 
            :style="{'transform': arrRotate(li)}" 
            class='fa fa-angle-right'></i> -->
        </a>
        <ul class='child-ul'>
          <li class='child-li' 
              v-for='childLi in li.children'
              :key="childLi.name">
            <!-- 这里是子图标 -->
            <!-- <i class='fa fa-circle-thin'></i> -->
            <a @click.stop 
               :href='childLi.liHref'>
               {{childLi.liName}}
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
      navData: [
        {
          liName: '问卷基础服务',
          liHref: '',
          faClass: 'fa fa-search',
          children: [
            {
              liName: '问卷统览',
              liHref: ''
            },
            {
              liName: '增加问卷',
              liHref: '#/home/userShow'
            }
          ],
          isShowChild: false,
          maxHeight: maxHeight
        },
        {
          liName: '问卷回答与管理',
          liHref: '',
          faClass: 'fa fa-calendar',
          children: [
            {
              liName: '回答总览',
              liHref: '#/home/inGoodsShow'
            },
            {
              liName: '图形分析',
              liHref: '#/home/outGoodsShow'
            }
          ],
          isShowChild: false,
          maxHeight: maxHeight
        },
        {
          liName: '个人设置',
          liHref: '',
          faClass: 'fa fa-calendar',
          children: [
            {
              liName: '修改信息',
              liHref: '#/home/inGoodsShow'
            },
            {
              liName: '修改密码',
              liHref: '#/home/outGoodsShow'
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
    }
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
/* .nav li i {
  display: inline-block;
  width: 30px;
  font-size: 20px;
  text-align: center;
  transition: 0.3s;
} */
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
