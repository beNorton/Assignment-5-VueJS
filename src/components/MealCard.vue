<script setup lang="ts">
import type { MealData } from '../services/MealData.ts'
import HealthRank from './HealthRank.vue'

// Updates to the card are handled in the gallery not here.
const emit = defineEmits<{ healthRank: [id: string, rank: number] }>()

const props = defineProps<{
  meal: MealData
}>()
</script>

<template>
  <div class="card col-md-4">
    <RouterLink :to="`/meals/${meal._id}`" class="meal-image-link">
      <img
        :src="meal.plateImageURL"
        :alt="meal.mealname"
        class="card-img-top"
      />
    </RouterLink>
    <div class="card-body">
      <h2 class="h5 card-title">
        <RouterLink
          :to="`/meals/${meal._id}`"
          class="meal-title-link"
        >
          {{ meal.mealname || 'No name found' }}
        </RouterLink>
      </h2>
      <p class="card-text mb-2">{{ meal.description?.join(', ') || 'No description given.' }}</p>
      <small class="text-body-secondary">Created: {{ meal.createdAt }} </small>
      <div class="mt-2 text-center">
        <p>Healthiness scale:</p>
        <div class="d-flex justify-content-center">
          <HealthRank
            :rank="meal.healthRank ?? 0"
            aria-prefix="Set health rank for this meal to"
            @rate="(rank) => emit('healthRank', meal._id, rank)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  max-height: 220px;
  object-fit: cover;
}

.meal-image-link {
  display: block;
}

.meal-title-link {
  color: #000;
  text-decoration: underline;
  text-underline-offset: 0.15em;
  font-weight: 600;
}

.meal-title-link:hover {
  color: var(--bs-primary);
}
</style>
