<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Main Content Area -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Left Content -->
      <div class="col-span-9">
        <!-- Featured News Section -->
        <div class="mb-6">
          <h2 class="text-xl font-bold mb-4 font-battambang">ព័ត៍មានអន្តរជាតិ</h2>
          <div class="flex">
            <img
              src="https://economy.ams.com.kh/wp-content/uploads/2025/01/photo_2025-01-24_12-02-49.jpg"
              alt="Featured News"
              class="w-1/3 h-40 object-cover rounded-lg mr-4"
            />
            <div>
              <h3 class="text-lg font-semibold font-battambang">
                រូបភាពប្រធានព័ត៌មានលំអិតស្តីអំពីកិច្ចប្រជុំ
              </h3>
              <p class="text-sm text-gray-600 font-battambang">
                ការពិភាក្សាអំពី AIBD សំខាន់បំផុត
              </p>
            </div>
          </div>
        </div>

        <!-- News List Section -->
        <div class="grid grid-cols-1 gap-4">
          <div
            v-for="news in newsList"
            :key="news.id"
            class="flex items-center border-b pb-4"
          >
            <img
              src="https://economy.ams.com.kh/wp-content/uploads/2025/01/photo_2025-01-24_12-02-49.jpg"
              alt="News Thumbnail"
              class="w-20 h-20 object-cover rounded-lg mr-4"
            />
            <div>
              <h4 class="text-sm font-semibold font-battambang">{{ news.title }}</h4>
              <p class="text-xs text-gray-500 font-battambang">{{ news.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="col-span-3">
        <!-- Video Section -->
        <div class="mb-6">
          <h2 class="text-xl font-bold mb-4 font-battambang">វីដេអូ</h2>
          <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/example"
              frameborder="0"
              class="w-full h-full rounded-lg"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Advertisement Section -->
        <div class="bg-gray-300 text-center py-10 mb-6">
          <p>ADS 323 X 540</p>
        </div>

        <!-- Market Stats Section -->
        <div class="bg-white shadow p-4 rounded-lg">
          <h2 class="text-xl font-bold mb-4">Market Stats</h2>
          <ul class="text-sm">
            <li v-for="stat in marketStats" :key="stat.id" class="flex justify-between">
              <span>{{ stat.name }}</span>
              <span :class="stat.change > 0 ? 'text-green-500' : 'text-red-500'">
                {{ stat.value }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          id: 1,
          image: "/path/to/news1.jpg",
          title: "ព័ត៌មានសំខាន់ប្រចាំថ្ងៃ",
          description: "លម្អិតព័ត៍មានថ្មីប្រចាំថ្ងៃ",
        },
        {
          id: 2,
          image: "https://economy.ams.com.kh/wp-content/uploads/2025/01/photo_2025-01-24_12-02-49.jpg",
          title: "ស្តីអំពីកិច្ចប្រជុំសំខាន់",
          description: "ព័ត៌មានសង្ខេបពីកិច្ចប្រជុំ",
        },
        // Add more news as needed
      ],
      marketStats: [
        { id: 1, name: "SPXUSD", value: "+2.45%", change: 2.45 },
        { id: 2, name: "NKXUSD", value: "-1.23%", change: -1.23 },
        { id: 3, name: "DJI", value: "+0.67%", change: 0.67 },
        // Add more stats as needed
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1280px;
}
</style>
