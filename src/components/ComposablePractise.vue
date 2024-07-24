<script setup lang="ts">
import useCounter from '../composables/useCounter';
import useMouse  from '../composables/useMouse';
import { useFetch } from '../composables/useFetch';
import useImmer from '../composables/useImmer';
import { onMounted, ref } from 'vue';
const counter = useCounter();
const mouse = useMouse();
const products = ref(null);
onMounted(async () => {
    const {data: productsData, error} = await useFetch('https://dummyjson.com/products/1');
    products.value = productsData;
    if (error) {
        console.log(error);
    }
});
let { state: user, setState: setUser } = useImmer({name: 'gaurav', age: 30});   
</script>

<template>
    <div>
        <h1>Here we will check the composables</h1>
        <div>
            <h3>Counter Composable</h3>
            <p>Count: {{ counter.count }}</p>
            <button @click="counter.increment">Increment</button>
            <button @click="counter.decrement">Decrement</button>
        </div>
        <div>
            <h3>Mouse Composable</h3>
            <p>Count: {{ mouse.x }}, {{ mouse.y }}</p>
        </div>
        <div>
            <h3>API Composable</h3>
            <pre v-if="products">{{ products }}</pre>
            <pre v-else>{{ error }}</pre>
        </div>
        <div>
            <h3>Immer composable</h3>
            <pre>{{ user }}</pre>
            <button @click="setUser(draft => { draft.age += 1 })">Increase Age</button>
        </div>
    </div>
</template>