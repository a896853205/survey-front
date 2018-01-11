<template>
  <input v-model="inputValue" :type="type" :placeholder="placeholder" class="input-pack">
</template>

<script>
export default {
  props: ['placeholder', 'type'],
  name: 'inputPack',
  data () {
    return {
      inputValue: ''
    }
  },
  watch: {
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
</style>