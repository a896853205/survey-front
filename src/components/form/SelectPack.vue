<!-- SelectPack
// select组件
import SelectPack from '@/components/form/SelectPack'
 -->
<template>
  <select class="select-pack" name="" id="">
    <option class="opation-pack"
            :key="opationIndex" 
            v-for="(opation, opationIndex) in opationData" 
            :value="opation.value">{{ opation.name }}</option>
  </select>
</template>

<script>
export default {
  props: ['opationData'],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style scoped>
.select-pack {
  width: 100%; height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  color: #595959;
  line-height: 40px;
}
</style>