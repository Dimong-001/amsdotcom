<template>
  <li class="relative group">
    <!-- Main Menu Item with Underline Effect -->
    <a href="#" class="nav-link font-khmer flex items-center space-x-1 pb-2 border-b-4 border-transparent group-hover:border-red-600 transition duration-300">
      <span>{{ title }}</span>
    </a>
    <!-- Dropdown Content -->
    <ul class="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-[#f3f3f3] text-black shadow-lg w-[150%] border-t border-gray-200 z-20">
      <li v-for="item in items" :key="item.label" class="hover:bg-gray-100">
        <a :href="item.href" class="block px-4 py-2 font-khmer text-center transition duration-300">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
.nav-link {
  transition: all 0.3s ease;
}

.group:hover .nav-link {
  border-color: red;
}

.group:hover .nav-link span {
  color: red;
}
</style>
