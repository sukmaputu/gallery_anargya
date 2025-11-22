<script setup>
import { ref } from 'vue';

// Data Galeri Contoh
const anargyaProjects = [
    { 
        id: 1, 
        name: 'Website E-Commerce Fiktif', 
        category: 'Web Development', 
        imageUrl: 'https://via.placeholder.com/600x400?text=Project+1', 
        link: '#' 
    },
    { 
        id: 2, 
        name: 'Aplikasi Mobile Planner', 
        category: 'Mobile App', 
        imageUrl: 'https://via.placeholder.com/600x400?text=Project+2', 
        link: '#' 
    },
    // Tambahkan lebih banyak proyek di sini
];

const title = ref('Galeri Anargya');
const gallery = ref(anargyaProjects);
</script>

<template>
  <div class="p-4 md:p-10 min-h-screen bg-gray-100">
    <!-- HEADER -->
    <header class="text-center mb-10">
        <h1 class="text-4xl font-extrabold text-anargya-primary">{{ title }}</h1>
        <p class="text-lg text-gray-600 mt-2">Koleksi Proyek Terbaik Anargya</p>
    </header>

    <!-- GRID GALERI -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <!-- Looping data galeri menggunakan v-for -->
        <div 
          v-for="project in gallery" 
          :key="project.id" 
          class="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
        >
            <img :src="project.imageUrl" :alt="project.name" class="w-full h-48 object-cover">
            <div class="p-4">
                <h2 class="text-xl font-semibold text-gray-800 mb-1">{{ project.name }}</h2>
                <p class="text-sm text-gray-500">{{ project.category }}</p>
                <a :href="project.link" target="_blank" class="mt-3 inline-block text-anargya-primary hover:text-indigo-600 font-medium">
                    Lihat Proyek &rarr;
                </a>
            </div>
        </div>
    </div>

    <!-- Teks jika galeri kosong (contoh v-if) -->
    <div v-if="gallery.length === 0" class="text-center p-20 text-gray-500">
        <p>Belum ada proyek yang ditambahkan.</p>
    </div>
  </div>
</template>

<style scoped>
/* Anda bisa menambahkan CSS lokal di sini, tapi Tailwind sudah cukup */
</style>