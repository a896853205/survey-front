<template>
  <input v-model="inputValue" class="input-pack">
</template>

<script>
export default {
  name: 'inputPack',
  data () {
    return {
      inputValue: ''
    }
  },
  watch: {
    /**
     * 监听input值
     * @param {String} val 旧值
     * @param {String} oldVal 新值
     */
    inputValue (val, oldVal) {
      this.$emit('getValue', this.inputValue)
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style scoped>
.input-pack {
  width: 100%;
  padding: 0 10px;
  border: 1px solid #ccc;
  color: #595959;
  line-height: 40px;
  box-sizing: border-box;
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