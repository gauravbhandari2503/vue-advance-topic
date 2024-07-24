<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';
</script>

<template>
  <div class="parent-container">
    <h1 class="title">Communication both ways from root to child and child to root (Prodivider Pattern)</h1>
    <h2 class="parent-title">I'm from Parent component</h2>
    <ChildComponent class="child-component"/>
  </div>
</template>

<style scoped>
.parent-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #e0f7fa;
  border: 1px solid #b2ebf2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.parent-title {
  color: #00796b;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
}

.child-component {
  width: 100%;
  max-width: 600px;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 600px) {
  .parent-title {
    font-size: 18px;
  }

  .child-component {
    padding: 10px;
  }
}
</style>