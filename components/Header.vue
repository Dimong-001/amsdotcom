<template>
    <header class="relative bg-black text-white border-b-4 border-gray-400">
      <!-- Gradient Bar -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9900] via-[#A50000] to-[#309E3A]"></div>
  
      <div class="container mx-auto flex items-center justify-between py-3 px-4">
        <!-- Logo Section -->
        <div class="logo mr-[25px]">
          <a href="#">
            <img 
              src="https://economy.ams.com.kh/wp-content/uploads/2022/09/AMS-COLOUR-FULL-H28.svg" 
              alt="AMS Logo" 
              class="w-[74.7px] h-[28px]"
            />
          </a>
        </div>
  
        <!-- Navigation Links -->
        <nav class="flex-1 ml-[25px]">
          <ul class="flex space-x-6 md:space-x-[24px] ml-[32px]">
            <li><a href="#" class="nav-link font-khmer">សង្គម</a></li>
            <li><a href="#" class="nav-link font-khmer">នយោបាយ</a></li>
            <li><a href="#" class="nav-link font-khmer">អប់រំ</a></li>
            <li><a href="#" class="nav-link font-khmer">កីឡា</a></li>
            <li><a href="#" class="nav-link font-khmer">កម្សាន្ត</a></li>
            <li><a href="#" class="nav-link font-khmer">កម្សាន្ត</a></li>
            <li><a href="#" class="nav-link font-khmer">អំពីក្រុមហ៊ុន</a></li>
          </ul>
        </nav>
  
        <!-- Right-Side Buttons -->
        <div class="flex items-center space-x-4">
          <button class="right-button">
            <TvIcon class="h-6 w-6" />
          </button>
  
          <button class="right-button">
            <RadioIcon class="h-6 w-6" />
          </button>
  
          <button class="right-button">
            <MagnifyingGlassIcon class="h-6 w-6" />
          </button>
  
          <button class="right-button">
            <SunIcon class="h-6 w-6" />
          </button>
  
          <button class="right-button">
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import { TvIcon, RadioIcon, MagnifyingGlassIcon, SunIcon, Bars3Icon } from '@heroicons/vue/24/outline'
  
  export default {
    components: {
      TvIcon,
      RadioIcon,
      MagnifyingGlassIcon,
      SunIcon,
      Bars3Icon,
    },
    name: 'Header',
  }
  </script>
  
  <style scoped>
  </style>
  