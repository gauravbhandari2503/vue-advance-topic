import { ref } from 'vue';

export default function useCounter(initialValue: number = 0) {
  const count = ref<number>(initialValue);

  function increment(): void {
    count.value++;
  }

  function decrement(): void {
    count.value--;
  }

  return {
    count,
    increment,
    decrement
  };
}
