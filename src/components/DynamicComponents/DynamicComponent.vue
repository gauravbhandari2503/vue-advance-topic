<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
// this is not a good practice, but it's just for demo
// import ComponentA from './ComponentA.vue';
// import ComponentB from './ComponentB.vue';
// import ComponentC from './ComponentC.vue';


// better way

const ComponentA = defineAsyncComponent(() => import('./ComponentA.vue'));
const ComponentB = defineAsyncComponent(() => import('./ComponentB.vue'));
const ComponentC = defineAsyncComponent(() => import('./ComponentC.vue'));

const components = {
    ComponentA,
    ComponentB,
    ComponentC
}

const defaultPropsForComponentA = {
  title: 'Primary Information',
  content: 'It\'s a beautiful day',
}

const defaultPropsForComponentB = {
  age: 23,
  uniqueId: '123456',
  title: 'Secondary Information',
}

const defaultPropsForComponentC = {
  title: 'Personal Information',
  cardId: 'UI12010B09',
  bankId: '00000021239218392',
  deptName: 'MCA',
}

const dynamicProps = ref<Record<string, any>>({ ...defaultPropsForComponentA });

function switchComponent(componentName: keyof typeof components, props: Record<string, any>) {
  currentComponent.value = componentName;
  dynamicProps.value = props;
}

const currentComponent = ref<keyof typeof components>('ComponentA');
</script>

<template>
    <div class="dynamic-component">
      <div class="button-group">
        <button @click="switchComponent('ComponentA', defaultPropsForComponentA)">Component A</button>
        <button @click="switchComponent('ComponentB', defaultPropsForComponentB)">Component B</button>
        <button @click="switchComponent('ComponentC', defaultPropsForComponentC)">Component C</button>
      </div>
      <transition name="fade" mode="out-in">
        <component :is="components[currentComponent]" v-bind="dynamicProps"></component>
      </transition>
    </div>
  </template>
  <style scoped>
  .dynamic-component {
    text-align: center;
    margin: 20px;
  }
  
  .button-group {
    margin-bottom: 20px;
  }
  
  .button-group button {
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button-group button:hover {
    background-color: #0056b3;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  