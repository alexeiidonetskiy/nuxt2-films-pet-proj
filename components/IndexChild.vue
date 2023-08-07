<template>
  <div>
    <button @click="propsClick">Props Change</button>
    <button @click="emitClick">Emit Change</button>
  </div>
</template>

<script>
export default {
  props: ['propsChange'],
  methods: {
    propsClick () {
      this.propsChange('123')
    },
    emitClick() {
      this.$emit('emitChange', 'NEW VALUE')
    }
  }
}
</script>

<style>

</style>
