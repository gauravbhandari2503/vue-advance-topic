import { shallowRef } from 'vue';
import { produce } from 'immer'
const useImmer = <T>(initialState: T) => {
  const state = shallowRef(initialState);
  const setState = (updater: (draft: T) => void) => {
    state.value = produce(state.value, updater);
  };
  return { state, setState };
};

export default useImmer;