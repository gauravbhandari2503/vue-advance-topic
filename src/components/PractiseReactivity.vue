<script lang="ts" setup>
import { ref, shallowRef, triggerRef, watchEffect, customRef } from 'vue'


// Trigger REF
// const shallow = shallowRef({
//     greet: 'hello, world! From shallowRef'
// })

// const refObj = ref({
//     greet: 'hello, world! from ref'
// })


// watchEffect(() => {
//     console.log(shallow.value.greet)
// })
    
// shallow.value.greet = 'hello, galaxy! from shallowRef'
// refObj.value.greet = 'hello, galaxy! from ref'

// triggerRef(shallow); 


// CUSTOM Ref
import { useDebouncedRef } from '../composables/useDebouncedRef'
const text = useDebouncedRef('hello, world!', 2000);

watchEffect(() => {
    console.log(text.value) // This will be tracked after 2 seconds when you stop typing
})

// using custom ref without composable.
function setValue(newValue: string) {
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return newValue;
            },
            set(newValueFromSetter) {
                newValue = newValueFromSetter;
                trigger();
            }
        }
    })
}

const textCustom = setValue('hello, galaxy!');

</script>
<template>
<div>
    <h1>Practise Reactivity</h1>
    <span>Custom Ref: {{ textCustom }}</span><br>
    <input type="text" v-model="text" />
</div>
</template>
<style scoped>
h1 {
    color: blue;
}
</style>