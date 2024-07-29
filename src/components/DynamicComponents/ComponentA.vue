<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
    name?: string;
    title: string;
    content: string;
}>(), {
    name: 'Component A'
});

</script>

<template>
    <div class="component-a">
        <h2>{{ props.name }}</h2>
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
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
