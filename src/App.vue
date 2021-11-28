<template>
  <div class="flex space-x-4 bg-indigo-600">
   <router-link class="text-white" to="/">Home</router-link> 
   <router-link class="text-white" to="/about">About</router-link> 
  </div>
  <div class="max-w-4xl mx-auto py-10 px-6 sm:px-6 lg:px-8">
    <router-view></router-view>
  </div>
</template>