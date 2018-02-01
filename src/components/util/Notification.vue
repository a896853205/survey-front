<!-- Notification.vue
使用说明:
this.$store.commit('alert', {
  title: '保存问题',
  content: '成功'
})
 -->
<template>
  <div>
    {{ alert }}
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  computed: {
    alert () {
      if (this.$store.state.Notification.notify.content === '') {
        return ''
      } else {
        this.$notify({
          title: this.$store.state.Notification.notify.title,
          message: this.$store.state.Notification.notify.content,
          duration: this.$store.state.Notification.delay
        })
      }
      return ''
    }
  },
  methods: {}
}
</script>
<style>
div.el-notification {
  border-radius: 0;
}
</style>