<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <RouterLink
    to="/"
    class="text-white tracking-widest bg-green-500 hover:bg-green-600 hover:shadow-green-500/50 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 flex justify-center items-center font-medium rounded-lg text-base px-4 py-3 w-30 text-center transition-all duration-200 mb-10 fixed top-10 left-10 z-95"
  >
    <i class="pi pi-arrow-left mr-2"></i> Back
  </RouterLink>
</template>
