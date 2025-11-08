<script setup>
import { ref } from 'vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-lg border-b border-inkBorder/50">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <a 
            href="#hero" 
            class="text-lg sm:text-xl font-bold bg-brand-gradient bg-clip-text text-transparent"
            @click="closeMenu"
          >
            Zap que Trabalha por Você
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-6">
            <a 
              href="#hero" 
              class="text-sm font-medium text-inkMuted hover:text-inkLight transition"
            >
              Início
            </a>
            <a 
              href="#features" 
              class="text-sm font-medium text-inkMuted hover:text-inkLight transition"
            >
              Recursos
            </a>
            <a 
              href="#contato" 
              class="text-sm font-medium text-inkMuted hover:text-inkLight transition"
            >
              Contato
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="md:hidden p-2 rounded-lg text-inkLight hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen"
            aria-label="Menu de navegação"
          >
            <svg 
              v-if="!mobileMenuOpen"
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          v-if="mobileMenuOpen"
          class="md:hidden py-4 border-t border-inkBorder/50"
        >
          <div class="flex flex-col gap-3">
            <a 
              href="#hero" 
              @click="closeMenu"
              class="px-3 py-2 text-sm font-medium text-inkMuted hover:text-inkLight hover:bg-white/5 rounded-lg transition"
            >
              Início
            </a>
            <a 
              href="#features" 
              @click="closeMenu"
              class="px-3 py-2 text-sm font-medium text-inkMuted hover:text-inkLight hover:bg-white/5 rounded-lg transition"
            >
              Recursos
            </a>
            <a 
              href="#contato" 
              @click="closeMenu"
              class="px-3 py-2 text-sm font-medium text-inkMuted hover:text-inkLight hover:bg-white/5 rounded-lg transition"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="pt-16">
      <Hero />
      <Features />
      <Contact />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
