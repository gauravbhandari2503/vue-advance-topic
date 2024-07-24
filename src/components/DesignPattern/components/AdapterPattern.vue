<template>  
    <h2>Adapter Pattern (Structural Pattern)</h2>
    <pre>{{ userData }}</pre>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useFetch } from '../../../composables/useFetch';
import UserAdapter from '../../../utils/userAdapter';
let userData = ref(null);
onMounted(async () => {
    let { data: response, error } = await useFetch('https://dummyjson.com/users/1');
    if (error) {
        console.log(error);
    }
    userData.value = new UserAdapter(response).adapt();
});
</script>

