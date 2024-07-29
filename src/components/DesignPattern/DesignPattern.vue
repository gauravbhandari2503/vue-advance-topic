<template>
    <h1>Design Pattern</h1>
    <p>
        Creational, Structural, and Behavioral patterns are used to solve common problems in software design.
    </p>
    <ul>
        <li>
            Creational includes patterns like Singleton, Factory Method, Abstract Factory, Builder, Provider pattern etc.<br>
        </li>
        <li>
            Structural includes patterns like Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy, and many more<br>
        </li>
        <li>
            Behavioral includes patterns like Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, and Observer.<br>
        </li>
    </ul>
    <hr>
    <BuilderPattern />
    <hr>
    <AdapterPattern />
    <hr>
    <div>
        We have covered composable pattern which is a behavioral pattern. 
        The composable pattern is a behavioral design pattern that promotes creating small, functional, reusable, and interchangeable building blocks, often referred to as composables.

        We have also covered the Provider pattern in which we provide the implementation of Provide/Inject.

    </div>
    <hr>
    <RouterLink :to="{path: '/observable-pattern'}">Go to Observalble pattern example</RouterLink>
</template>
<script lang="ts" setup>
import BuilderPattern from './components/BuilderPattern.vue'
import AdapterPattern from './components/AdapterPattern.vue'
</script>

<style>
hr {
    border: 2px solid black;
    width: 100vh;
}
</style>