<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
const props = withDefaults(defineProps<{
    name?: string;
    cardId: string;
    bankId: string;
    deptName: string;
    title?: string;
}>(), {
    name: 'Component B',
    title: 'Component B Title',
});
</script>

<template>
    <div class="component-a">Component B 
        <p>{{ props.name }}</p>
        <p>{{ props.cardId }}</p>
        <p>{{ props.bankId }}</p>
        <p>{{ props.bankId }}</p>
        <p>{{ props.deptName }}</p>
    </div>
</template>

<style scoped>
.component-a {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
    max-width: 400px;
    margin: 16px auto;
    text-align: center;
}

.component-a h2 {
    margin: 0;
    font-size: 24px;
    color: #333;
}

.component-a h3 {
    margin: 8px 0;
    font-size: 20px;
    color: #666;
}

.component-a p {
    margin: 8px 0;
    font-size: 16px;
    color: #444;
}
</style>