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

    this.objects = {
      sphere: new UnitSphere({ color: 0xffffff, transparent: true, opacity: 0.3 }),
      yAxisLine: new VectorFromOrigin(1.5, Math.PI / 2, Math.PI / 2, 0xff0000),
      zAxisLine: new VectorFromOrigin(1.5, 0, Math.PI / 2, 0x00ff00),
      xAxisLine: new VectorFromOrigin(1.5, Math.PI / 2, 0, 0x0000ff),
      stateArrow: new VectorFromOrigin(1, 0, 0, 0xffffff),
      ripple: new Ripple(1, { color: 0xffff00, transparent: true }),
      arcLine: new ArcLine({ color: 0x00ffff })
    }

    this.scene.add(...Object.values(this.objects))

    this.objects.ripple.animateFromVector(this.objects.stateArrow)
  }

  animateScene () {
    requestAnimationFrame(() => this.animateScene())
    TWEEN.update()
    this.renderer.render(this.scene, this.camera)
  }

  drawArcLineTo ([psi, theta]) {
    this.objects.arcLine.expandTo(this.objects.stateArrow.state, { theta, psi }, 2000)
  }

  rotateStateArrowTo ([psi, theta]) {
    this.objects.stateArrow.rotateToSphericalCoords(psi, theta, 1000)
  }
}

export default BlochSphereRenderer
