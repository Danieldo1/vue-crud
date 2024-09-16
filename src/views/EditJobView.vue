<template>
  <section v-if="!state.loading" class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="updateJob">
          <h2 class="text-3xl text-center font-semibold mb-6">Edit Job</h2>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2"
              >Job Type</label
            >
            <select
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
              v-model="form.type"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"
              >Job Listing Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Beautiful Apartment In Miami"
              required
              v-model="form.title"
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              v-model="form.description"
              id="description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2"
              >Salary</label
            >
            <select
              id="salary"
              name="salary"
              class="border rounded w-full py-2 px-3"
              required
              v-model="form.salary"
            >
              <option value="Under $50K">under $50K</option>
              <option value="$50K - $60K">$50 - $60K</option>
              <option value="$60K - $70K">$60 - $70K</option>
              <option value="$70K - $80K">$70 - $80K</option>
              <option value="$80K - $90K">$80 - $90K</option>
              <option value="$90K - $100K">$90 - $100K</option>
              <option value="$100K - $125K">$100 - $125K</option>
              <option value="$125K - $150K">$125 - $150K</option>
              <option value="$150K - $175K">$150 - $175K</option>
              <option value="$175K - $200K">$175 - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"> Location </label>
            <input
              type="text"
              id="location"
              name="location"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Company Location"
              required
              v-model="form.location"
            />
          </div>

          <h3 class="text-2xl mb-5">Company Info</h3>

          <div class="mb-4">
            <label for="company" class="block text-gray-700 font-bold mb-2"
              >Company Name</label
            >
            <input
              type="text"
              id="company"
              name="company"
              class="border rounded w-full py-2 px-3"
              placeholder="Company Name"
              required
              v-model="form.company.name"
            />
          </div>

          <div class="mb-4">
            <label
              for="company_description"
              class="block text-gray-700 font-bold mb-2"
              >Company Description</label
            >
            <textarea
              id="company_description"
              name="company_description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="What does your company do?"
              v-model="form.company.description"
            ></textarea>
          </div>

          <div class="mb-4">
            <label
              for="contact_email"
              class="block text-gray-700 font-bold mb-2"
              >Contact Email</label
            >
            <input
              type="email"
              id="contact_email"
              name="contact_email"
              class="border rounded w-full py-2 px-3"
              placeholder="Email address for applicants"
              required
              v-model="form.company.contactEmail"
            />
          </div>
          <div class="mb-4">
            <label
              for="contact_phone"
              class="block text-gray-700 font-bold mb-2"
              >Contact Phone</label
            >
            <input
              type="tel"
              id="contact_phone"
              name="contact_phone"
              class="border rounded w-full py-2 px-3"
              placeholder="Optional phone for applicants"
              v-model="form.company.contactPhone"
            />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <div  v-else class="flex justify-center text-center py-6">
    <PulseLoader
      class="m-auto my-10"
      color="#36d7b7"
    />
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRoute, RouterLink, useRouter } from "vue-router";
import axios from "axios";
import { useToast } from "vue-toastification";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";


const route = useRoute();
const router = useRouter();
const jobID = route.params.id;
const toast = useToast();

const form = reactive({
  type: "Full-Time",
  title: "",
  description: "",
  location: "",
  salary: "",
  company: {
    name: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
  },
});

const state = reactive({
  job: {},
  loading: true,
});



onMounted(async () => {
  try {
    const res = await axios.get(`/api/jobs/${jobID}`);
    const data = await res.data;
    state.job = data
    form.type = data.type;
    form.title = data.title;
    form.description = data.description;
    form.location = data.location;
    form.salary = data.salary;
    form.company.name = data.company.name;
    form.company.description = data.company.description;
    form.company.contactEmail = data.company.contactEmail;
    form.company.contactPhone = data.company.contactPhone;
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false
  }
})


const updateJob = async () => {
  const updatedJob = {
    type: form.type,
    title: form.title,
    description: form.description,
    location: form.location,
    salary: form.salary,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone
    }  
   }
  try {
   const res = await axios.put(`/api/jobs/${jobID}`, updatedJob);
    toast.success('Job updated successfully')
    router.push(`/jobs/${res.data.id}`)
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message)
  }
};
</script>
