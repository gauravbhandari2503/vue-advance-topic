import { ref } from 'vue'
import { useEventListener } from './../utils/event'

export default function useMouse() {
  const x = ref<number>(0)
  const y = ref<number>(0)

  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  })

  return { x, y }
}