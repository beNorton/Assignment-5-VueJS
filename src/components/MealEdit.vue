<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { meals } from '../services/MealData'

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

    const meal = meals.find((m) => m._id === id)
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

  const meal = meals.find((m) => m._id === id)
  if (!meal) {
    saveMessage.value = 'Meal not found.'
    return
  }

  meal.mealname = mealName.value.trim()
  meal.plateImageURL = imageUrl.value.trim()
  meal.description = description.value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
  meal.updatedAt = new Date().toISOString()

  router.push(`/meals/${meal._id}`)
}
</script>

<template>
  <div>
    <nav class="mb-3">
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

      <button type="submit" class="btn btn-primary">Save Meal</button>
    </form>
  </div>
</template>
