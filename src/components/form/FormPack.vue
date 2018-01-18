<!-- FormPack.vue -->
<template>
  <div>
    <div :key="index" 
         v-for="(item, index) in formData" 
         class="form-row">
      <div class="form-left">
        <span>
          <strong v-if="item.isImport" 
                  class="must-symbol">
                  *
          </strong>
          {{ item.title ? `${item.title}:` : '' }}
        </span>
      </div>
      <div class="form-right">
        <InputPack v-if="item.type === 'input'"
                   :disabled="item.isDisable"
                   :placeholder="item.placeholder"
                   :value="item.value"></InputPack>
        <ButtonPack v-else-if="item.type === 'button'">
          {{ item.value }}
        </ButtonPack>
      </div>
    </div>
  </div>
</template>

<script>
// home单元组件
import HomeItem from '@/components/homeChild/HomeItem'
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
// input组件
import InputPack from '@/components/form/InputPack'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  props: ['formData'],
  name: 'formpack',
  data () {
    return {
    }
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody,
    InputPack,
    ButtonPack
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
.form-row {
  display: flex;
}
.form-left {
  width: 150px; height: 32px;
  text-align: right;
  font-size: 12px;
  line-height: 32px;
}
.form-right {
  width: 400px;
  margin-left: 10px;
}
.form-right input{
  height: 32px;
}
.form-right button {
  width: auto; height: auto;
  font-size: 12px;
  padding: 8px 16px;
}
.form-row {
  margin-bottom: 10px;
}
.form-row:last-child {
  margin-bottom: 0;
}
.must-symbol {
  color: red;
}
</style>