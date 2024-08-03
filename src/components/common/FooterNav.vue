<template>
  <footer class="mt-10 flex">
    <p class="text-xs">
      {{ siteName }} |
      <a class="text-primary" :href="githubLink" target="_blank">Github Repo</a>
    </p>
    <div class="text-xs ml-auto">
      <p class="font-bold">Visit my other sites:</p>
      <a class="text-primary" :href="`https://${site}`" v-for="site in sites" :key="site"
        >{{ site }}<br
      /></a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const sites = (import.meta.env.VITE_FOOTER_SITES as string).split(',')
const siteName = import.meta.env.VITE_SITE_NAME
const githubLink = import.meta.env.VITE_FOOTER_GITHUB_LINK
</script>
