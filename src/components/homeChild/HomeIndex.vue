<!-- HomeIndex.vue -->
<template>
  <div class="home-index">
    <HomeItem widType="2"></HomeItem>
    <HomeItem widType="1"></HomeItem>
    <HomeItem widType="1"></HomeItem>
    <HomeItem widType="2"></HomeItem>
    <HomeItem widType="2"></HomeItem>
    <HomeItem widType="3"></HomeItem>
    <HomeItem widType="1"></HomeItem>
  </div>
</template>

<script>
import HomeItem from './HomeItem'
export default {
  name: 'homeindex',
  data () {
    return {
    }
  },
  components: {
    HomeItem
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
.home-index {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>