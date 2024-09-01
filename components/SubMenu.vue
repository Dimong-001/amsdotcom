<template>
  <div v-if="isDropdownOpen" class="bg-[#f3f3f3] text-black shadow-lg w-full">
    <div class="container mx-auto py-2 px-8">
      <ul class="flex">
        <li v-for="item in items" :key="item.label">
          <a 
            :href="item.href" 
            class="block font-khmer text-[12px] pb-2 text-center mr-6 border-b-4 border-transparent hover:border-[#AC2232] transition-colors duration-300"
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

<!-- No need for a <style scoped> block anymore -->
