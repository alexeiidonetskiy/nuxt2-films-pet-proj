<template>
  <div>

    <h1>Films site</h1>
    <IndexChild :propsChange="change" @emitChange="change"/>
    <CounterComponent>
      <template v-slot:title>TITLE</template>
      <template v-slot:desk>DESK</template>
    </CounterComponent>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: 'Really strict rules here'
    }
  },
  methods: {
    change (val) {
      console.log('From child', val); 
    }
  },
  provide () {
    return {
      info: this.info
    }
  }
}
</script>
