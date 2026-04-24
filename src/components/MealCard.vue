<script setup lang="ts">
import type { MealData } from '../services/MealData.ts'

const emit = defineEmits<{ healthRank: [id: string] }>()

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
      <h2 class="h5 card-title">
        <RouterLink
          :to="`/meals/${meal._id}`"
          class="text-reset text-decoration-none"
        >
          {{ meal.mealname || 'No name found' }}
        </RouterLink>
      </h2>
      <p class="card-text mb-2">{{ meal.description?.join(', ') || 'No description given.' }}</p>
      <small class="text-body-secondary">Created: {{ meal.createdAt }} </small>
      <button v-on:click="emit('healthRank', meal._id)">Health Ranking</button>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  max-height: 220px;
  object-fit: cover;
}
</style>