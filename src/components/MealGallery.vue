<script setup lang="ts">
import { meals } from '../services/MealData'
</script>

<template>
  <div class="container">
    <h1>Meal Gallery</h1>
    <div class="row">
      <div v-for="meal in meals" :key="meal._id" class="col-md-4">
        {{ meal.mealname }}
      </div>
    </div>
  </div>
</template>