<template>
  <div id="app">
    <VirtualSelect
      v-model="selectValue"
      :options="[
        {
          label: 'teste 1',
          value: 'teste-1',
        },
        {
          label: 'teste 2',
          value: 'teste-2',
        },
      ]"
      placeholder="teste"
    />
    <VirtualSelect
      disabled
      v-model="selectValue"
      :options="[
        {
          label: 'teste 1',
          value: 'teste-1',
        },
        {
          label: 'teste 2',
          value: 'teste-2',
        },
      ]"
      placeholder="teste"
    />
    <VirtualSelect
      invert
      v-model="selectValue2"
      :options="[
        {
          label: 'teste 1',
          value: 'teste-1',
        },
        {
          label: 'teste 2',
          value: 'teste-2',
        },
      ]"
      placeholder="teste"
    />
  </div>
</template>

<script>
import VirtualSelect from './components/VirtualSelect.vue';
export default {
  name: 'App',
  components: {VirtualSelect},
  data() {
    return {
      selectValue: '',
      selectValue2: '',
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
}
</style>