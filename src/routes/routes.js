import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cat from '../pages/Cat.vue'
import RandomFacts from '../pages/RandomFacts.vue'
import Category from '../pages/Category.vue'
import Add from '../pages/Add.vue'; 

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cat', name: 'Cat', component: Cat },
  { path: '/randomFacts', name: 'RandomFacts', component: RandomFacts },
  { path: '/category', name: 'Category', component: Category },
  { path: '/add', name: 'Add', component: Add}, 
]


const router = createRouter({ history: createWebHistory(), routes })
export default router
