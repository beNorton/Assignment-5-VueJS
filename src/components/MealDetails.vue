<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { meals, type MealData } from '../services/MealData'

  const route = useRoute()

  const meal = ref<MealData | undefined>(undefined)

  watch(
    () => route.params.id,
    (id) => {
      if (typeof id !== 'string') {
        meal.value = undefined
        return
      }
      meal.value = meals.find((m) => m._id === id)
    },
    { immediate: true },
  )
</script>

<template>
  <div v-if="meal">
    <nav class="mb-3 d-flex justify-content-between align-items-center">
      <RouterLink to="/" class="text-decoration-none">&larr; Back to meal history</RouterLink>
      <RouterLink
        :to="`/meals/${meal._id}/edit`"
        class="btn btn-primary"
      >
        Edit
      </RouterLink>
    </nav>
    <h1 class="h2">{{ meal.mealname || 'No meal name found'}}</h1>
    <img
      v-if="meal.plateImageURL"
      :src="meal.plateImageURL"
      :alt="meal.mealname"
      class="img-fluid rounded mb-3 meal-details-image"
    />
    <div v-if="meal.description?.length" class="mt-2 text-start mx-auto description-block">
      <h2 class="h5">Meal Description</h2>
      <ul>
        <li v-for="(line, i) in meal.description" :key="i">{{ line }}</li>
      </ul>
    </div>
    <p v-else class="text-body-secondary">No description.</p>
  </div>
  <p v-else class="text-body-secondary">Meal not found.</p>
</template>

<style scoped>
.meal-details-image {
  max-height: 400px;
  object-fit: cover;
  width: 100%;
}

.description-block {
  width: fit-content;
}
</style>
