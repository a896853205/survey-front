<!-- Input.vue
// input组件
import InputPack from '@/components/form/InputPack'
 -->
<template>
  <input :value="value" 
         @input="getValue"
         class="input-pack">
</template>

<script>
export default {
  props: ['inputName', 'value'],
  name: 'inputPack',
  data () {
    return {
    }
  },
  watch: {},
  components: {},
  computed: {},
  methods: {
    /**
     * 向父级发送值
     * @param {Object} event 发生事件
     */
    getValue (event) {
      this.$emit('getValue', event.target.value, this.inputName)
    }
  }
}
</script>
<style scoped>
.input-pack {
  width: 100%;
  padding: 0 10px;
  border: 1px solid #ccc;
  color: #595959;
  line-height: 40px;
}
.input-pack:hover {
  border-color: #00C1DE;
}
.input-pack:focus {
  box-shadow: 0 0 3px #ddd;
}
.input-pack[disabled] {
  cursor: not-allowed;
}
.input-pack[disabled]:hover {
  box-shadow: 0;
  border:1px solid rgb(204, 204, 204);
}
</style>