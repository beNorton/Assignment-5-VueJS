<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { deleteMeal, getMeal, updateMeal } from '../services/MealData'

const route = useRoute()
const router = useRouter()

const mealName = ref('')
const description = ref('')
const imageUrl = ref('')
const saveMessage = ref('')

watch(
  () => route.params.id,
  (id) => {
    if (typeof id !== 'string') {
      mealName.value = ''
      description.value = ''
      imageUrl.value = ''
      saveMessage.value = ''
      return
    }

    const meal = getMeal(id)
    mealName.value = meal?.mealname ?? ''
    description.value = meal?.description?.join('\n') ?? ''
    imageUrl.value = meal?.plateImageURL ?? ''
    saveMessage.value = ''
  },
  { immediate: true },
)

function handleSubmit() {
  const id = route.params.id
  if (typeof id !== 'string') {
    return
  }

  const meal = getMeal(id)
  if (!meal) {
    saveMessage.value = 'Meal not found.'
    return
  }

  const updatedMeal = updateMeal(id, {
    mealname: mealName.value.trim(),
    plateImageURL: imageUrl.value.trim(),
    description: description.value
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean),
  })

  if (!updatedMeal) {
    saveMessage.value = 'Meal not found.'
    return
  }

  router.push(`/meals/${updatedMeal._id}`)
}

function handleDelete() {
  const id = route.params.id
  if (typeof id !== 'string') {
    return
  }

  const shouldDeleteMeal = window.confirm('Are you sure you want to delete this meal?')
  if (!shouldDeleteMeal) {
    return
  }

  const deleted = deleteMeal(id)
  if (!deleted) {
    saveMessage.value = 'Meal not found.'
    return
  }

  router.push('/')
}
</script>

<template>
  <div>
    <nav class="mb-3 d-flex justify-content-start align-items-center">
      <RouterLink
        :to="`/meals/${route.params.id}`"
        class="text-decoration-none"
      >
        &larr; Back to details
      </RouterLink>
    </nav>
    <h1 class="h2">Edit meal</h1>
    <p class="text-body-secondary">
      Editing meal ID: <code>{{ route.params.id }}</code>
    </p>
    <img
      v-if="imageUrl"
      :src="imageUrl"
      :alt="mealName || 'Meal image preview'"
      class="img-fluid rounded mb-3 meal-edit-image"
    />
    <form @submit.prevent="handleSubmit" class="mt-3">
      <div class="mb-3">
        <label for="mealName" class="form-label">Meal name</label>
        <input
          id="mealName"
          v-model="mealName"
          type="text"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          id="description"
          v-model="description"
          class="form-control"
          rows="4"
          placeholder="One line per description item"
        />
      </div>

      <div class="mb-3">
        <label for="imageUrl" class="form-label">Image URL</label>
        <input
          id="imageUrl"
          v-model="imageUrl"
          type="url"
          class="form-control"
        />
      </div>

      <div class="d-flex gap-2">
        <button type="submit" class="btn btn-primary">Save Meal</button>
        <button type="button" class="btn btn-danger" @click="handleDelete">
          Delete Meal
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.meal-edit-image {
  max-height: 400px;
  object-fit: cover;
  width: 100%;
}
</style>
