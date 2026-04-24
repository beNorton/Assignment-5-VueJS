<script setup lang="ts">
import { meals } from '../services/MealData'
import { onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MealCard from './MealCard.vue'

const route = useRoute()
const router = useRouter()
const showDeleteMessage = ref(false)
let deleteMessageTimer: number | undefined

function clearDeletedQuery() {
  const query = { ...route.query }
  delete query.deleted
  router.replace({ query })
}

function dismissDeleteMessage() {
  showDeleteMessage.value = false
  if (deleteMessageTimer) {
    window.clearTimeout(deleteMessageTimer)
    deleteMessageTimer = undefined
  }
  clearDeletedQuery()
}

watch(
  () => route.query.deleted,
  (deleted) => {
    if (deleted !== '1') {
      return
    }
    showDeleteMessage.value = true
    if (deleteMessageTimer) {
      window.clearTimeout(deleteMessageTimer)
    }
    deleteMessageTimer = window.setTimeout(() => {
      dismissDeleteMessage()
    }, 5000)
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (deleteMessageTimer) {
    window.clearTimeout(deleteMessageTimer)
  }
})

function handleRanking(mealId: string) {
      console.log('Ranked meal ID', mealId);
      
  }   
</script>

<template>
  <div class="container">
    <h1>Your Meal History</h1>
    <div
      v-if="showDeleteMessage"
      class="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      Meal deleted successfully.
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="dismissDeleteMessage"
      />
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