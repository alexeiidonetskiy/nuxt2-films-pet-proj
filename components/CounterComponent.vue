<template>
  <div>
    <!-- Info: {{ info }}
    Counter is {{  counter  }}
    <button @click="increment"> Increment </button> -->
ETO KARTA
    <slot name="title"></slot>
    <slot name="desk"></slot>
  </div>
</template>

<script>
import CountMixin from '../mixins/counter';

export default {
  mixins: [CountMixin],
  inject: ['info']
}
</script>

<style>

</style>
