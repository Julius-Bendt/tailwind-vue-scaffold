<template>
  <div>
    <aside
      :class="{ '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }"
      class="fixed top-0 left-0 z-40 w-64 h-screen overflow-y-auto bg-backgroundSecondary"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 flex flex-col">
        <h1 class="text-lg font-bold">{{ siteName }}</h1>
        <hr class="border-primary my-4" />
        <ul class="flex flex-col gap-4 flex-1 font-medium">
          <li>
            <router-link
              class="flex items-center p-2 rounded-lg text-white group transition duration-75"
              :class="{
                'hover:bg-gray-700': !isSiteActive('/dashboard'),
                'bg-primary': isSiteActive('/dashboard')
              }"
              to="/dashboard"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-500 transition duration-75"
                :class="{
                  'group-hover:text-white': !isSiteActive('/dashboard'),
                  'text-white': isSiteActive('/dashboard')
                }"
                aria-hidden="true"
              >
                <path d="M3 3H10V14H3V3Z" fill="currentColor" />
                <path d="M14 3H21V10H14V3Z" fill="currentColor" />
                <path d="M14 14H21V21H14V14Z" fill="currentColor" />
                <path d="M3 17H10V21H3V17Z" fill="currentColor" />
              </svg>

              <span class="ms-3">Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link
              class="flex items-center p-2 rounded-lg text-white group transition duration-75"
              :class="{
                'hover:bg-gray-700': !isSiteActive('/storage'),
                'bg-primary': isSiteActive('/storage')
              }"
              to="/storage"
            >
              <svg
                class="w-5 h-5 text-gray-500 transition duration-75"
                :class="{
                  'group-hover:text-white': !isSiteActive('/storage'),
                  'text-white': isSiteActive('/storage')
                }"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM7.5 11.5l2.5 3.01L15.5 10 19 15H5l2.5-3.5zM5 6h14v2H5z"
                />
              </svg>

              <span class="ms-3">Storage</span>
            </router-link>
          </li>
          <li>
            <button
              @click="toggleDropdown"
              type="button"
              class="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group text-white hover:bg-gray-700"
            >
              <svg
                class="w-5 h-5 text-gray-500 transition duration-75"
                :class="{
                  'group-hover:text-white': !isSiteActive('/sites'),
                  'text-white': isSiteActive('/sites')
                }"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM4 4H20V10H4V4ZM4 12H14V20H4V12ZM16 12H20V14H16V12ZM20 16H16V18H20V16ZM16 20H20V22H16V20Z"
                />
              </svg>
              <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Sites</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="dropdown-example"
              :class="{ hidden: !isDropdownOpen, block: isDropdownOpen }"
              class="py-2 space-y-2"
            >
              <li>
                <button
                  class="flex items-center w-full p-2 transition duration-75 pl-11 bg-transparent hover:bg-primary text-blue-dark font-semibold my-4 py-2 px-4 border border-primary hover:border-transparent rounded"
                >
                  Add new site
                </button>
              </li>
              <li>
                <router-link
                  :to="{ name: 'site', params: { siteId: '1' } }"
                  class="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group text-white"
                  :class="{
                    'hover:bg-gray-700': !isSiteActive(`/site/1`),
                    'bg-primary': isSiteActive(`/site/'1'`)
                  }"
                  >Site 1</router-link
                >
              </li>
            </ul>
          </li>

          <li class="mt-auto">
            <router-link
              class="flex items-center p-2 rounded-lg text-white group transition duration-75"
              :class="{
                'hover:bg-gray-700': !isSiteActive('/settings'),
                'bg-primary': isSiteActive('/settings')
              }"
              to="/settings"
            >
              <svg
                class="w-5 h-5 text-gray-500 transition duration-75"
                :class="{
                  'group-hover:text-white': !isSiteActive('/settings'),
                  'text-white': isSiteActive('/settings')
                }"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM7.5 11.5l2.5 3.01L15.5 10 19 15H5l2.5-3.5zM5 6h14v2H5z"
                />
              </svg>
              <span class="ms-3">Settings</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const siteName = import.meta.env.VITE_SITE_NAME
const route = useRoute()

const isSidebarOpen = ref(true)
const isDropdownOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

function isSiteActive(sitePath: string) {
  return sitePath == route.path
}
</script>
