    import { defineStore } from 'pinia'
    import { ref, computed } from 'vue'

    interface CounterState {
        count: number
    }

    export const useCounterStore = defineStore('counter', () => {
        const count = ref<CounterState['count']>(0);

        const increament = () => {
            count.value++
        }

        const decrement = () => {
            count.value--
        }

        const doubleCount = computed(() => {
            return count.value * 2
        })

        const halfCount = computed(() => {
            return count.value / 2
        })

        return {
            count,
            increament,
            decrement,
            doubleCount,
            halfCount
        }

    });
