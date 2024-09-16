<template>
   <JobListings :limit="10000" :showBtn="false" />
</template>

<script setup>
import JobListings from '@/components/JobListings.vue';
</script>