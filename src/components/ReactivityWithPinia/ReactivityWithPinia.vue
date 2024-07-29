<template>
    <div>
        <h1>Reactivity with Pinia</h1>
        <p>
            Pinia is a state management library for Vue.js applications. It provides a simple and flexible way to manage
            the state of your application.
        </p>
        <p>
            Pinia is a lightweight and flexible state management library for Vue.js applications. It provides a simple
            and flexible way to manage the state of your application.
        </p>
        <p>
            Pinia is a lightweight and flexible state management library for Vue.js applications. It provides a simple
            and flexible way to manage the state of your application.
        </p>
    </div>
    <hr>
    <div>
        <CounterDisplay />
        <hr>
        <Counter />
    </div>
</template>

<script lang="ts" setup>
import CounterDisplay from './CounterDisplay.vue'
import Counter from './Counter.vue'
</script>

<style>
hr {
    border: 2px solid black;
    width: 100vh;
}
</style>