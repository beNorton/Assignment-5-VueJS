import { createRouter, createWebHistory } from 'vue-router'
import MealGallery from '../components/MealGallery.vue'
import MealDetails from '../components/MealDetails.vue'
import MealEdit from '../components/MealEdit.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MealGallery },
    { path: '/meals/:id', component: MealDetails },
    { path: '/meals/:id/edit', component: MealEdit },
  ],
})

export default router
