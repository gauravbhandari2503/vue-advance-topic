<script lang="ts" setup>
import NotificationService from './NotificationService';
import Notification from './Notification.vue'
const addNotification = (message: string, type: string) => {
    NotificationService.addNotification({
        id: NotificationService.getNotifications().length + 1,
        message: message,
        type: type
    });
};
</script>


<template>
    <h1>Observable Pattern</h1>
    <p>
        The Observable pattern is a behavioral software design pattern that allows objects to be notified of changes in the state of other objects.
    </p>
    <p>
        The Observable pattern is useful when you want to establish a one-to-many relationship between objects, where changes in one object can be observed by other objects.
    </p>
    <p>
        The Observable pattern is also useful when you want to establish a many-to-many relationship between objects, where changes in one object can be observed by other objects.
    </p>
    <p>
        In the Observable pattern, the subject (observable) object is responsible for notifying its observers of any changes in its state. The observers are usually other objects that are interested in the state changes of the subject.
    </p>
    <hr>
    <button @click="addNotification('This is notification','message')">Add Notification</button>
    <button @click="addNotification('this is test notification','test')">Add Test Notification</button>
    <Notification />
</template>

<style>
hr {
    border: 2px solid black;
    width: 100vh;
}
</style>