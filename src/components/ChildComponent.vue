<script setup lang="ts">
import { inject } from 'vue';
interface ParentInfo {
  childComponentMessage: string;
  injectCallback: () => void;
}
const {childComponentMessage, injectCallback} = inject('parentInfo') as ParentInfo;


function askParentToPassMessage() {
  // Function to request parent to pass the message
  injectCallback();
}
</script>

<template>
  <div class="child-container">
    <h3 class="child-title">I'm the child, wow.</h3>
    <button @click="askParentToPassMessage" class="send-button">Click me !</button>
    <div class="message-box">
      {{ childComponentMessage }}
    </div>
  </div>
</template>

<style scoped>
.child-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffe0b2;
  border: 1px solid #ffcc80;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.child-title {
  color: #e65100;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
}

.send-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #ff9800;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #e68900;
}

.message-box {
  margin-top: 20px;
  padding: 15px;
  width: 100%;
  max-width: 500px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #333;
}

/* Responsive Design */
@media (max-width: 600px) {
  .child-title {
    font-size: 16px;
  }

  .send-button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .message-box {
    padding: 10px;
  }
}
</style>
