<script setup>
import { reactive, watchEffect } from "vue"

const state = reactive({
 count: 0,
 name: 'Leo'
})

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms));

watchEffect(async () => {
 console.log(`Count: ${state.count}`) // This will be tracked
 await sleep(200)
 console.log(`Name:  ${state.name}`)  // This will NOT be tracked
})

  
</script>


<template>
<input type="number" v-model="state.count" />
<br />
<input v-model="state.name" />
</template>