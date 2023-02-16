import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cat from '../pages/Cat.vue'
import RandomFacts from '../pages/RandomFacts.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cat', name: 'Cat', component: Cat },
  { path: '/random', name: 'RandomFacts', component: RandomFacts },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
