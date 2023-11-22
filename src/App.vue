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
  </div>
</template>

<script>
import VirtualSelect from './components/VirtualSelect.vue';
export default {
  name: 'App',
  components: {VirtualSelect},
  data() {
    return {
      selectValue: ''
    }
  }
}
</script>

<style>
</style>