<script setup lang="ts">
import type { MealData } from '../services/MealData.ts'

const props = defineProps<{
  meal: MealData
}>()
</script>

<template>
  <div class="card col-md-4">
    <img
      :src="meal.plateImageURL"
      :alt="meal.mealname"
      class="card-img-top"
    />
    <div class="card-body">
      <h2 class="h5 card-title">{{ meal.mealname || 'No name found' }}</h2>
      <p class="card-text mb-2">{{ meal.description || 'No description given.' }}</p>
      <small class="text-body-secondary">Created: {{ meal.createdAt }} </small>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  max-height: 220px;
  object-fit: cover;
}
</style>