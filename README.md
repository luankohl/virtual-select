# This is a personal vue2 select component with virtual list

```
<VirtualSelect
  :disabled="false"
  :invert="false"
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
```

```
<VirtualSelect
  :disabled="false"
  :invert="false"
  :value="selectValue"
  @input="(value) => selectValue = value"
  @blur="(value) => selectValue = value"
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
```