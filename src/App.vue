<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import FooterNav from '@/components/common/FooterNav.vue'
import SideBar from '@/components/common/SideBar.vue'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen w-screen overflow-x-hidden bg-background text-text font-inter">
    <SideBar />
    <RouterView v-slot="{ Component }" :key="route.fullPath">
      <div class="sm:ml-64 p-4 min-h-screen bg-background text-text">
        <Transition name="slide">
          <component :is="Component" />
        </Transition>
      </div>
    </RouterView>
    <FooterNav class="p-4 sm:ml-64" />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: 600ms ease all;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: 400ms ease all;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>
