<template>
  <div class="fx-col qubit-composer">
    <div v-if="composerIsAllowedReset"  class="nav-icon" style="right: 0;" @click="resetComposer">&#8634;</div>
    <!-- title row -->
    <div class="fx-row">
      <h3 class="title">Qubit Composer</h3>
    </div><!-- end of title row -->
    <!-- Qubit renderer -->
    <div class="fx-x1">
      <BlochSphereCanvas />
    </div>
    <!-- stage -->
    <div class="fx-row" style="padding: 0 4em">
      <GateStage class="fx-x1" :appliedGates="appliedGates" :onRemoveGate="popGate" :isCollapsed="qubitIsCollapsed"/>
      <div v-if="composerIsAllowedMeasure" class="fx-col options">
        <button v-if="!qubitIsCollapsed" @click="measure(1000)" :class="{'is-objective': currentObjective && currentObjective.trigger === 'composer-measure' }">
          {{ langSwitch(['Measure', 'ทำการวัด']) }}<br>x1000
        </button>
        <button v-else @click="unmeasure()">
          {{ langSwitch(['Revert', 'ย้อนกลับ']) }}
        </button>
      </div>
    </div><!-- end of stage -->
    <!-- under stage -->
    <div class="fx-row fx-justcent under-stage">
      <GateTray v-if="!qubitIsCollapsed" :onFocusGate="previewGate" :onSelectGate="pushGate" :availableGates="availableGates" />
      <MeasurementResult v-else :measurement="measurementData" />
    </div><!-- end of under stage -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import GateStage from '@/components/GateStage'
import GateTray from '@/components/GateTray'
import MeasurementResult from '@/components/MeasurementResult'
import BlochSphereCanvas from '@/components/BlochSphereCanvas'

export default {
  name: 'QubitComposer',
  components: {
    GateStage,
    GateTray,
    MeasurementResult,
    BlochSphereCanvas
  },
  computed: {
    ...mapGetters([
      'langSwitch',
      'currentObjective',
      'availableGates',
      'appliedGates',
      'qubitIsCollapsed',
      'measurementData',
      'composerIsAllowedMeasure',
      'composerIsAllowedReset'
    ])
  },
  methods: {
    ...mapActions([
      'previewGate',
      'pushGate',
      'popGate',
      'measure',
      'unmeasure',
      'resetComposer'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .qubit-composer {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(160deg, #160E29, #2E1A57);
    color: white;
    overflow: hidden;

    .title {
      text-align: center;
      margin: 10px auto;
    }

    .options {
      margin-left: 1em;

      button {
        width: 7em;
        height: 7em;
        background: none;
        color: #F3C4FF;
        border: 2px solid #F3C4FF;
        border-radius: 50%;
        margin: auto 0;
        font-weight: bold;
        text-align: center;

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>
