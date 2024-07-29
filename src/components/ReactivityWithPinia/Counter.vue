<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="increament">Increment</button>
        <button @click="counterStore.decrement">Decrement</button>
        <p>Half Count: {{ counterStore.halfCount }}</p>
        <p>Double Count: {{ counterStore.doubleCount }}</p>
    </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/store/counter';
import { computed } from 'vue';

const counterStore = useCounterStore();

const count = computed(() => counterStore.count);

const increament = () => {
    counterStore.increament();
};
</script>