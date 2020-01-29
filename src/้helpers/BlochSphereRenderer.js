import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'

import { UnitSphere, VectorFromOrigin, Ripple, ArcLine } from '../libs/3bloch/index'

class BlochSphereRenderer {
  render (canvasDom) {
    this.canvasDom = canvasDom

    this.setupRenderer()
    this.setupCamera()
    this.setupScene()
    this.animateScene()
  }

  setupRenderer () {
    this.renderer = new THREE.WebGLRenderer()

    this.renderer.setSize(this.canvasDom.offsetWidth, this.canvasDom.offsetHeight)
    this.canvasDom.appendChild(this.renderer.domElement)
  }

  setupCamera () {
    this.camera = new THREE.PerspectiveCamera(
      30,
      this.canvasDom.offsetWidth / this.canvasDom.offsetHeight,
      0.1,
      1000
    )

    this.camera.position.set(5, 5, 5)
    this.camera.lookAt(0, 0, 0)
  }

  setupScene () {
    this.scene = new THREE.Scene()

    const sphere = new UnitSphere({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3
    })

    const xAxisLine = new VectorFromOrigin(1.5, Math.PI / 2, Math.PI / 2, 0xff0000)
    const yAxisLine = new VectorFromOrigin(1.5, 0, Math.PI / 2, 0x00ff00)
    const zAxisLine = new VectorFromOrigin(1.5, Math.PI / 2, 0, 0x0000ff)
    const stateArrow = new VectorFromOrigin(1, Math.PI / 2, 0, 0xffffff)
    const ripple = new Ripple(1, { color: 0xffff00, transparent: true })
    const arcLine = new ArcLine({ color: 0x00ffff })

    this.scene
      .add(sphere)
      .add(xAxisLine)
      .add(yAxisLine)
      .add(zAxisLine)
      .add(stateArrow)
      .add(ripple)
      .add(arcLine)

    ripple.animateFromVector(stateArrow)
  }

  animateScene () {
    requestAnimationFrame(() => this.animateScene())
    TWEEN.update()
    this.renderer.render(this.scene, this.camera)
  }
  // rotateStateArrowBy (psi, theta) {
  //   const newSpericalCoords = {
  //     psi: stateArrow.state.psi + psi,
  //     theta: stateArrow.state.theta + theta
  //   }

  //   arcLine.expandTo(stateArrow.state, newSpericalCoords, 2000).then(() => {
  //     stateArrow.rotateToSphericalCoords(
  //       newSpericalCoords.psi,
  //       newSpericalCoords.theta,
  //       1000
  //     )
  //   })
  // }
}

export default BlochSphereRenderer
