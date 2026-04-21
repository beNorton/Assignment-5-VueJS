<script setup lang="ts">
import { meals } from '../services/MealData'
import MealCard from './MealCard.vue'
//import { ref } from 'vue'

function handleRanking(mealId: string) {
      console.log('Ranked meal ID', mealId);
      
  }   
</script>

<template>
  <div class="container">
    <h1>Your Meal History</h1>
    <div class="row">
      <MealCard
        v-for="meal in meals"
        :key="meal._id"
        :meal="meal"
        @healthRank="handleRanking"
      />
    </div>
  </div>
</template>