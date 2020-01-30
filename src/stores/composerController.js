import Vue from 'vue'

import gates from '../assets/configs/gates.json'
import { Qubit, BasicGate, getSphericalCoordinate } from '../libs/qsim/src'
import BlochSphereRenderer from '../้helpers/BlochSphereRenderer'

function getBasicGateObject (gate) {
  return BasicGate[gate.symbol]
}

const state = {
  composer: {
    qubit: new Qubit(),
    isDisplay: true,
    gateList: gates,
    availableGates: gates,
    focusedGate: undefined,
    allowMeasure: true,
    allowReset: true,
    blochSphere: new BlochSphereRenderer()
  }
}

const getters = {
  composerIsDisplayed: state => state.composer.isDisplay,
  focusedGate: state => state.composer.focusedGate,
  availableGates: state => state.composer.availableGates,
  appliedGates: state => state.composer.qubit.getAppliedGatesSymbol().map(ag => state.composer.gateList.find(gl => ag === gl.symbol)),
  qubitIsCollapsed: state => typeof state.composer.qubit.collapsed === 'object',
  measurementData: state => state.composer.qubit.measurement,
  composerIsAllowedMeasure: state => state.composer.allowMeasure,
  composerIsAllowedReset: state => state.composer.allowReset
}

const mutations = {
  updateComposerStates (state, newComposerState) {
    Vue.set(state, 'composer', Object.assign({}, state.composer, newComposerState))
  }
}

const actions = {
  async resetComposer ({ state, dispatch }) {
    state.composer.qubit.reset()
    dispatch('unfocusGate')
  },
  async previewGate ({ state, dispatch }, gate) {
    const forecastedState = state.composer.qubit.calculateOperation(getBasicGateObject(gate).operation)

    if (forecastedState) {
      dispatch('fireEvent', {
        trigger: 'composer-gate-preview',
        parameter: gate.symbol,
        result: forecastedState
      })

      state.composer.blochSphere.drawArcLineTo(getSphericalCoordinate(forecastedState))
    }
  },
  async pushGate ({ state, dispatch }, gate) {
    const res = state.composer.qubit.pushGates([getBasicGateObject(gate)])
    const newState = state.composer.qubit.getCurrentState()

    if (res) {
      dispatch('fireEvent', {
        trigger: 'composer-gate-push',
        parameter: gate.symbol,
        result: newState
      })

      state.composer.blochSphere.rotateStateArrowTo(getSphericalCoordinate(newState))
    }
  },
  async popGate ({ state }) {
    state.composer.qubit.popGates()
  },
  async measure ({ state, dispatch }, batchSize = 1) {
    const res = state.composer.qubit.measure(batchSize)

    if (res) {
      dispatch('fireEvent', {
        trigger: 'composer-measure',
        parameter: res.batchSize,
        result: res.result
      })
    }
  },
  async unmeasure ({ state }) {
    state.composer.qubit.unmeasure()
  },
  focusGate ({ commit }, gate) {
    commit('updateComposerStates', {
      focusedGate: gate
    })
  },
  unfocusGate ({ commit }) {
    commit('updateComposerStates', {
      focusedGate: undefined
    })
  },
  initBlochSphereRenderer ({ state }, canvasDom) {
    state.composer.blochSphere.render(canvasDom)
  },
  // TODO: ThreeJS animation
  addChallengeMarker ({ state }, q) {
    // Qapi.mark(state.global.apiServer, q)
  },
  checkChallenge ({ state }, { q1, q2 }) {
    // return new Promise(async (resolve, reject) => {
    //   const compareRes = await Qapi.compare(state.global.apiServer, q1, q2)

    //   if (compareRes.result) {
    //     Qapi.unmark(state.global.apiServer)
    //   }

    //   resolve(compareRes.result)
    // })
  },
  playCutscene ({ state }, sceneName) {
    console.log('PLAY ' + sceneName)
    // Qapi.playCutscene(state.global.apiServer, sceneName)
  },
  clearCutscene ({ state }) {
    console.log('CLEAR')
    // Qapi.clearCutscene(state.global.apiServer)
  }
}

export default { state, mutations, actions, getters }
