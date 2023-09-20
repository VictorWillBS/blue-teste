<template lang="">
  <div class="w-full">
    <Topbar/>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Topbar from './Topbar.vue';

export default {
  components: {
    Topbar
  }
}
</script>
<style lang="">
  
</style>