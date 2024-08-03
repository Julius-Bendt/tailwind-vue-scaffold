<template>
  <div class="relative w-full h-1 bg-backgroundSecondary overflow-hidden">
    <div class="absolute top-0 h-full bg-primary loader"></div>
  </div>
</template>

<style scoped>
.loader {
  width: 100%;
  animation: slide 1s linear infinite;
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
