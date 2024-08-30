<template>
    <div v-if="isDropdownOpen" class="bg-[#f3f3f3] text-black shadow-lg w-full">
      <div class="container mx-auto py-2 px-8">
        <ul class="flex">
          <li v-for="item in items" :key="item.label">
            <a 
              :href="item.href" 
              class="block font-khmer text-[12px] pb-2 text-center hover:border-b-4 hover:border-[#AC2232]"
              style="margin-right: 24px; border-bottom: 4px solid transparent; transition: border-color 0.3s ease;"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isDropdownOpen: {
        type: Boolean,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  a:hover {
    border-color: #AC2232 !important; /* Ensure the border color changes on hover */
  }
  </style>
  