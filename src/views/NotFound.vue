<template>
  <section class="text-center">
    <i class="pi pi-exclamation-triangle text-9xl text-red-500"></i>
    <h1 class="text-5xl font-bold">404</h1>
    <p class="text-2xl font-bold">Page Not Found</p>
    <RouterLink
      to="/"
      class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
    >
      Back to Home
    </RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
