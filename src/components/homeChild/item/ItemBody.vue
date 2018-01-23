<!-- ItemBody.vue -->
<template>
  <div class="item-body">
    <slot>// ItemBody.vue</slot>
  </div>
</template>

<script>
export default {
  name: 'itembody',
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
.item-body {
  padding: 16px;
}
</style>