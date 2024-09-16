<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img
              class="h-10 w-auto"
              v-bind:src="logo"
              width="50"
              height="50"
              alt="Vue Jobs"
            />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Vue Jobs</span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-green-900'
                    : 'hover:bg-green-900 hover:text-white',
                  'text-white  hover:text-white rounded-md px-3 py-2',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/jobs"
                :class="[
                  isActiveLink('/jobs')
                    ? 'bg-green-900'
                    : 'hover:bg-green-900 hover:text-white',
                  'text-white  hover:text-white rounded-md px-3 py-2',
                ]"
                >Jobs</RouterLink
              >
              <RouterLink
                to="/add-job"
                :class="[
                  isActiveLink('/add-job')
                    ? 'bg-green-900'
                    : 'hover:bg-green-900 hover:text-white',
                  'text-white  hover:text-white rounded-md px-3 py-2',
                ]"
                >Add Job</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from "@/assets/logo.png";
import { RouterLink, useRoute } from "vue-router";
const route = useRoute();

const isActiveLink = (link) => {
  return link === route.path;
};
</script>
