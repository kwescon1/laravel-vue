<template>
<!-- interconnecting other components to this vue component -->

    <!-- mcontainer.. where our css for the class is defined -->
  <div class="mcontainer">
      <!-- this body component is going to be used as registration key for each component in the app.js file -->
      <body-component></body-component>
  </div>
</template>

<script>
import BodyComponent from './BodyComponent.vue'

export default {
    components: {
        BodyComponent
        
    }
}
</script>

<style>

</style>