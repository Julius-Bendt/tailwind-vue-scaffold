import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExampleStore = defineStore('exampleStore', () => {

  const formattedExamples = ref<string>("example")


  return { formattedExamples }
})
