<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HealthRank from './HealthRank.vue'
import {
  getMeal,
  getMealHealthRank,
  setMealHealthRank,
  type MealData,
} from '../services/MealData'

const route = useRoute()
const router = useRouter()

const meal = ref<MealData | undefined>(undefined)
const currentRank = ref(0)

// Keep the details view in sync when the user navigates between meal routes.
watch(
  () => route.params.id,
  (id) => {
    if (typeof id !== 'string') {
      meal.value = undefined
      return
    }
    meal.value = getMeal(id)
    if (!meal.value) {
      router.replace('/')
      return
    }
    currentRank.value = getMealHealthRank(id) ?? 0
  },
  { immediate: true },
)

// Update the health rank for the UI.
function handleHealthRank(rank: number) {
  if (!meal.value) {
    return
  }
  const updated = setMealHealthRank(meal.value._id, rank)
  if (!updated) {
    return
  }
  meal.value = updated
  currentRank.value = updated.healthRank ?? 0
}
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
    <div class="mb-3 d-flex align-items-center gap-2">
      <p class="mb-0">Healthiness scale:</p>
      <HealthRank
        :rank="currentRank"
        aria-prefix="Set health rank for this meal to"
        @rate="handleHealthRank"
      />
    </div>
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
