<template>
  <header class="relative bg-black text-white">
    <!-- Gradient Bar -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9900] via-[#A50000] to-[#309E3A]"></div>

    <div class="container mx-auto flex items-center justify-between py-3 px-8">
      <!-- Logo Section -->
      <div class="logo mr-8">
        <a href="#">
          <img 
            src="https://economy.ams.com.kh/wp-content/uploads/2022/09/AMS-COLOUR-FULL-H28.svg" 
            alt="AMS Logo" 
            class="w-[74.7px] h-[28px]"
          />
        </a>
      </div>

      <!-- Mobile Menu Toggle (Hamburger Icon) -->
      <button @click="toggleMenu" class="md:hidden">
        <Bars3Icon class="h-6 w-6" />
      </button>

      <!-- Main Navigation Links -->
      <nav class="flex-1 ml-8 hidden md:flex">
        <ul class="flex space-x-6 md:space-x-6">
          <!-- "សង្គម" Menu Item with Click-to-Show Submenu -->
          <li class="relative">
            <a 
              href="javascript:void(0)" 
              @click="toggleSubMenu('society')"
              class="nav-link font-khmer pb-2 border-b-4 border-transparent"
            >
              សង្គម
            </a>
          </li>
          <!-- "នយោបាយ" Menu Item with Click-to-Show Submenu -->
          <li class="relative">
            <a 
              href="javascript:void(0)" 
              @click="toggleSubMenu('politic')"
              class="nav-link font-khmer pb-2 border-b-4 border-transparent"
            >
              នយោបាយ
            </a>
          </li>
          <!-- "អប់រំ" Menu Item with Click-to-Show Submenu -->
          <li class="relative">
            <a 
              href="javascript:void(0)" 
              @click="toggleSubMenu('education')"
              class="nav-link font-khmer pb-2 border-b-4 border-transparent"
            >
              អប់រំ
            </a>
          </li>
          <!-- Additional Menu Items -->
          <li><a href="#" class="nav-link font-khmer pb-2 border-b-4 border-transparent">កីឡា</a></li>
          <li><a href="#" class="nav-link font-khmer pb-2 border-b-4 border-transparent">កម្សាន្ត</a></li>
          <li><a href="#" class="nav-link font-khmer pb-2 border-b-4 border-transparent">អរិយធម៌ខ្មែរ</a></li>
          <li><a href="#" class="nav-link font-khmer pb-2 border-b-4 border-transparent">អំពីក្រុមហ៊ុន</a></li>
        </ul>
      </nav>

      <!-- Right-Side Buttons (shown on all screen sizes) -->
      <div class="flex items-center space-x-6">
        <button class="flex items-center justify-center bg-white text-black rounded-lg w-[72px] h-[31px]">
          <TvIcon class="h-4 w-4 mr-2" />
          <span class="text-xs font-medium">TV</span>
        </button>

        <button class="flex items-center justify-center bg-black text-white rounded-lg border border-white w-[72px] h-[31px]">
          <RadioIcon class="h-4 w-4 mr-2" />
          <span class="text-xs font-bold">RADIO</span>
        </button>

        <button class="right-button">
          <MagnifyingGlassIcon class="h-6 w-6" />
        </button>

        <button class="right-button relative">
          <SunIcon class="h-6 w-6" />
          <!-- Vertical line after SunIcon -->
          <span class="absolute right-[-12px] top-1/2 transform -translate-y-1/2 h-6 border-l border-gray-500"></span>
        </button>

        <button class="right-button">
          <Bars3Icon class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- SubMenus -->
    <SubMenu 
      :isDropdownOpen="isSocietyOpen"
      :items="MSociety"
    />
    <SubMenu 
      :isDropdownOpen="isPoliticOpen"
      :items="MPolitic"
    />
    <SubMenu 
      :isDropdownOpen="isEducationOpen"
      :items="MEducation"
    />

    <!-- Mobile Full-Screen Navigation Overlay -->
    <div v-if="menuOpen" class="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 p-6">
      <!-- Search Box -->
      <input
        type="text"
        placeholder="ស្វែងរក..."
        class="w-full max-w-md p-2 bg-gray-800 text-white rounded-lg outline-none"
      />

      <!-- Navigation Links -->
      <ul class="flex flex-col space-y-4 text-center">
        <li><a href="#" class="text-white text-lg font-khmer whitespace-nowrap">សង្គម</a></li>
        <li><a href="#" class="text-white text-lg font-khmer whitespace-nowrap">នយោបាយ</a></li>
        <li><a href="#" class="text-white text-lg font-khmer whitespace-nowrap">អប់រំ</a></li>
        <li><a href="#" class="text-white text-lg font-khmer whitespace-nowrap">កីឡា</a></li>
        <li><a href="#" class="text-white text-lg font-khmer whitespace-nowrap">កម្សាន្ត</a></li>
        <li><a href="#" class="text-white text-lg font-khmer whitespace-nowrap">អំពីក្រុមហ៊ុន</a></li>
      </ul>

      <!-- Close Menu Button (only visible in mobile overlay) -->
      <button @click="toggleMenu" class="absolute top-4 right-4 text-white">
        <XMarkIcon class="h-8 w-8" />
      </button>
    </div>
  </header>
</template>

<script>
import SubMenu from './SubMenu.vue';
import { TvIcon, RadioIcon, MagnifyingGlassIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

export default {
  components: {
    SubMenu,
    TvIcon,
    RadioIcon,
    MagnifyingGlassIcon,
    SunIcon,
    Bars3Icon,
    XMarkIcon,
  },
  data() {
    return {
      menuOpen: false,
      isSocietyOpen: false,  // Control submenu visibility for "សង្គម"
      isPoliticOpen: false,  // Control submenu visibility for "នយោបាយ"
      isEducationOpen: false,  // Control submenu visibility for "អប់រំ"
      MSociety: [
        { label: 'ព័ត៌មានជាតិ', href: '#' },
        { label: 'ព័ត៌មានអន្តរជាតិ', href: '#' },
        { label: 'ព័ត៌មានសេដ្ឋកិច្ច', href: '#' },
        { label: 'ព័ត៌មានកីឡាជាតិ', href: '#' },
        { label: 'ព័ត៌មានកីឡាអន្តរជាតិ', href: '#' },
        { label: 'ព័ត៌មានកម្សាន្ត', href: '#' }
      ],
      MPolitic: [
        { label: 'ព័ត៌មានជាតិ', href: '#' },
        { label: 'ព័ត៌មានអន្តរជាតិ', href: '#' },
        { label: 'ព័ត៌មានសេដ្ឋកិច្ច', href: '#' },
        { label: 'ព័ត៌មានកីឡាជាតិ', href: '#' },
        { label: 'ព័ត៌មានកីឡាអន្តរជាតិ', href: '#' },
        { label: 'ព័ត៌មានកម្សាន្ត', href: '#' }
      ],
      MEducation: [
        { label: 'ព័ត៌មានជាតិ', href: '#' },
        { label: 'ព័ត៌មានអន្តរជាតិ', href: '#' },
        { label: 'ព័ត៌មានសេដ្ឋកិច្ច', href: '#' },
        { label: 'ព័ត៌មានកីឡាជាតិ', href: '#' },
        { label: 'ព័ត៌មានកីឡាអន្តរជាតិ', href: '#' },
        { label: 'ព័ត៌មានកម្សាន្ត', href: '#' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleSubMenu(menu) {
      this.isSocietyOpen = menu === 'society' ? !this.isSocietyOpen : false;
      this.isPoliticOpen = menu === 'politic' ? !this.isPoliticOpen : false;
      this.isEducationOpen = menu === 'education' ? !this.isEducationOpen : false;
    }
  }
}
</script>

<style scoped>
.nav-link {
  transition: all 0.3s ease;
}
</style>
