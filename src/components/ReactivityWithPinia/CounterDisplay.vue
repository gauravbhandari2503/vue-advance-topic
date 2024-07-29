<template>
    <div>
      <p>Counter Display: {{ count }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useCounterStore } from '@/store/counter';
  import { computed } from 'vue';
  
  const counterStore = useCounterStore();
  const count = computed(() => counterStore.count);
  </script>
  