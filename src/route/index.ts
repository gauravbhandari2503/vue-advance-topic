import { createWebHistory, createRouter } from 'vue-router'
import ParentComponent from '../components/ParentComponent.vue'
import ComposablePractise from '../components/ComposablePractise.vue'
import IssueWithWatcher from '../components/IssueWithWatcher.vue'
import PractiseReactivity from '../components/PractiseReactivity.vue'
import DesignPattern from '../components/DesignPattern/DesignPattern.vue'

const routes = [
  { path: '/', component: ParentComponent, name: 'home' },
  { path: '/composable-practise', component: ComposablePractise, name: 'composable-practise' },
  { path: '/issue-with-watcher', component: IssueWithWatcher, name: 'issue-with-watcher' },
  { path: '/practise-reactivity', component: PractiseReactivity, name: 'practise-reactivity' },
  { path: '/design-pattern', component: DesignPattern, name: 'design-pattern' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;