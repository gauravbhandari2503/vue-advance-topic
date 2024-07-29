import { createWebHistory, createRouter } from 'vue-router'
import ParentComponent from '../components/ParentComponent.vue'
import ComposablePractise from '../components/ComposablePractise.vue'
import PractiseReactivity from '../components/PractiseReactivity.vue'
import DesignPattern from '../components/DesignPattern/DesignPattern.vue'
import ObservablePattern from '../components/DesignPattern/components/Observable/ObservablePattern.vue'
import ReactivityWithPinia from '../components/ReactivityWithPinia/ReactivityWithPinia.vue'
import IssueWithWatcher from '../components/IssueWithWatcher.vue'
import DynamicComponent from '../components/DynamicComponents/DynamicComponent.vue'

const routes = [
  { path: '/', component: ParentComponent, name: 'home' },
  { path: '/composable-practise', component: ComposablePractise, name: 'composable-practise' },
  { path: '/issue-with-watcher', component: IssueWithWatcher, name: 'issue-with-watcher' },
  { path: '/practise-reactivity', component: PractiseReactivity, name: 'practise-reactivity' },
  { path: '/design-pattern', component: DesignPattern, name: 'design-pattern' },
  { path: '/observable-pattern', component: ObservablePattern, name: 'observable-pattern' },
  { path: '/reactivity-with-pinia', component: ReactivityWithPinia, name: 'reactivity-with-pinia' },
  { path: '/dynamic-component', component: DynamicComponent, name: 'dynamic-component' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;