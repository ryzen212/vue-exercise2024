<script setup>
// import jobData from '@/jobs.json';
import { RouterLink } from 'vue-router';
import JobListing from '@/components/JobListing.vue';
import { defineProps, reactive, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    },

})
const jobs = reactive({
    data: [],
    isLoading: true,
});
onMounted(async () => {
    try {
        // Using fetch api
        // const response = await fetch("http://localhost:5000/jobs")
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json(); // Parse the response JSON
        // jobs.value = data;


        // Using axios>
        const response = await axios.get("/api/jobs/")
        jobs.data = response.data;



    } catch (error) {
        console.error('Error Fetching job', error)
    } finally {
        jobs.isLoading = false;
    }

});




</script>
<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
        </div>
        <!-- Show Loading  -->
        <div v-if="jobs.isLoading" class="text-center text-gray-500 py-6">
            <PulseLoader />
        </div>
        <!-- Show Jobs after loading  -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobListing v-for="job in jobs.data.slice(0, limit || jobs.data.length)" :key="job.id" :job="job" />
        </div>
    </section>
    <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
            View
            All Jobs</RouterLink>
    </section>
</template>