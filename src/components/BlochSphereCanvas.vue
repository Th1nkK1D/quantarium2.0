<template>
  <div id="render-canvas"></div>
</template>

<script>
import BloachSphereRenderer from '../้helpers/BlochSphereRenderer'

export default {
  name: 'QuantumRenderer',
  mounted () {
    const blochSphere = new BloachSphereRenderer()

    blochSphere.render(document.querySelector('#render-canvas'))
  }
}
</script>

<style lang='scss' scoped>
#render-canvas {
  width: 100%;
  height: 100%;
}
</style>
