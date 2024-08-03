<template>
  <div class="relative">
    <Transition>
      <div
        v-if="props.isOpen"
        class="fixed inset-0 flex items-center justify-center z-10 overflow-auto"
      >
        <!-- Modal overlay -->
        <div
          @click="changeModalState(false)"
          class="fixed inset-0 bg-black opacity-50 cursor-pointer"
        ></div>

        <!-- Modal content -->
        <main></main>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['onVisibilityChanged'])
const props = defineProps({ isOpen: { type: Boolean, required: true } })

// Function to open the modal
function changeModalState(visible: boolean) {
  emit('onVisibilityChanged', visible)
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
