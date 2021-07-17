<template>
  <div id="body">
      <leftbody-component></leftbody-component>
      <rightbody-component></rightbody-component>
  </div>
</template>

<script>
import LeftbodyComponent from './LeftbodyComponent.vue'
import RightbodyComponent from './RightbodyComponent.vue'
export default {
  components: { LeftbodyComponent, RightbodyComponent },

}
</script>

<style>

</style>