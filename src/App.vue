<script setup lang="ts">
import { provide, ref } from 'vue';
import { RouterView } from 'vue-router';

let childComponentMessage = ref<string | null>('');
provide('parentInfo', {
  childComponentMessage,
  injectCallback
});
function injectCallback(): void {
  childComponentMessage.value = prompt();
}
</script>

<template>
  <div class="root-container">
    <RouterView/>
  </div>
</template>

<style scoped>
.root-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

.title {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.parent-component {
  width: 100%;
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 600px) {
  .title {
    font-size: 20px;
  }

  .parent-component {
    padding: 15px;
  }
}
</style>
