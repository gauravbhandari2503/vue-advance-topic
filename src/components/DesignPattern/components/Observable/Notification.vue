<template>
    <div>
        <h2>Notifications</h2>
        <ul>
            <li v-for="notification in notifications" :key="notification.id">{{ notification.message }}</li>
        </ul>

        <h2>Test</h2>
        <ul>
            <li v-for="notification in test" :key="notification.id">{{ notification.message }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Observer from '../../../../Interface/observerInterface';
import NotificationService, { Notification } from './NotificationService';

const notifications = ref<Notification[]>([]);

const test = ref<Notification[]>([]);

const observer: Observer<Notification> = {
    update(notification: Notification) {
        if (notification.type === 'message') {
            notifications.value.push(notification);
        } 
        if (notification.type === 'test') {
            test.value.push(notification);
        }
    }
};

onMounted(() => {
    NotificationService.subscribe(observer);
});

onBeforeUnmount(() => {
    NotificationService.unsubscribe(observer);
});
</script>