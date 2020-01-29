<template>
  <div id="render-canvas"></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'QuantumRenderer',
  methods: {
    ...mapActions([
      'initBlochSphereRenderer'
    ])
  },
  mounted () {
    this.initBlochSphereRenderer(document.querySelector('#render-canvas'))
  }
}
</script>

<style lang='scss' scoped>
#render-canvas {
  width: 100%;
  height: 100%;
}
</style>
