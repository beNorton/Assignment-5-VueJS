<script setup lang="ts">
import { meals } from '../services/MealData'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MealCard from './MealCard.vue'

const route = useRoute()

const showDeleteMessage = computed(() => route.query.deleted === '1')

function handleRanking(mealId: string) {
      console.log('Ranked meal ID', mealId);
      
  }   
</script>

<template>
  <div class="container">
    <h1>Your Meal History</h1>
    <div v-if="showDeleteMessage" class="alert alert-success" role="alert">
      Meal deleted successfully.
    </div>
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