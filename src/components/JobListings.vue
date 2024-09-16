<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Recent Jobs
      </h2>
      <div v-if="state.loading" class="flex justify-center text-center py-6">
        <PulseLoader color="#36d7b7" />
      </div>
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length) " :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <section v-if="showBtn" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink>
    </section>
</template>

<script setup>
// import jobData from "../jobs.json";

import JobListing from "./JobListing.vue";
import { ref,defineProps, onMounted,reactive } from "vue";
import { RouterLink } from "vue-router";
import axios  from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";





const state = reactive({
  jobs: [],
  loading: true,
})

defineProps({
    limit: {
        type: Number,
        default: 3
    },
    showBtn: {
        type: Boolean,
        default: true
    }
})

onMounted(async () => {
  try {
    const res = await axios.get("/api/jobs");
    const data = await res.data;
    state.jobs = data
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false
  }
})
</script>
