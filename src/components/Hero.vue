<script setup>
const scrollToContact = () => {
  document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' })
}

const openWhatsApp = () => {
  window.open('https://wa.me/5511997628274', '_blank')
}
</script>

<template>
  <section id="hero" class="relative overflow-hidden py-20 sm:py-28 lg:py-36">
    <!-- Background decorativo -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 right-0 w-96 h-96 bg-brandPurple/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-brandGreen/10 rounded-full blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Conteúdo -->
        <div class="text-center lg:text-left">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-inkBorder/50 text-xs sm:text-sm text-inkMuted mb-6">
            <span class="w-2 h-2 rounded-full bg-brand-gradient"></span>
            Para quem vive de atendimentos: barbearias · salões · manicures · tatuadores · terapeutas · personal trainers · esteticistas
          </div>

          <!-- Headline -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Automação que fecha venda no seu 
            <span class="bg-brand-gradient bg-clip-text text-transparent">WhatsApp</span>.
          </h1>

          <!-- Subheadline -->
          <p class="text-lg sm:text-xl text-inkMuted mb-8 max-w-2xl mx-auto lg:mx-0">
            Organize atendimentos, responda rápido e transforme conversas em vendas — sem perder tempo.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              @click="openWhatsApp"
              class="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-ink bg-brand-gradient hover:-translate-y-px transition ring-1 ring-transparent hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </button>

            <button
              @click="scrollToContact"
              class="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-inkLight bg-white/5 border border-inkBorder/50 hover:-translate-y-px transition ring-1 ring-transparent hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen"
            >
              Ver como funciona
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Ilustração -->
        <div class="flex items-center justify-center lg:justify-end">
          <div class="relative w-full max-w-md aspect-square">
            <svg viewBox="0 0 400 400" class="w-full h-full">
              <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#7C3AED;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#22C55E;stop-opacity:1" />
                </linearGradient>
              </defs>
              
              <!-- Círculos decorativos -->
              <circle cx="200" cy="200" r="150" fill="url(#heroGradient)" opacity="0.1" />
              <circle cx="200" cy="200" r="120" fill="url(#heroGradient)" opacity="0.15" />
              <circle cx="200" cy="200" r="90" fill="url(#heroGradient)" opacity="0.2" />
              
              <!-- Formas geométricas -->
              <rect x="150" y="150" width="100" height="100" rx="20" fill="url(#heroGradient)" opacity="0.3" />
              <circle cx="280" cy="150" r="30" fill="url(#heroGradient)" opacity="0.4" />
              <polygon points="120,280 170,280 145,230" fill="url(#heroGradient)" opacity="0.35" />
              
              <!-- Ícone WhatsApp estilizado -->
              <path d="M200,100 C144.77,100 100,144.77 100,200 C100,218.5 104.5,236 112.5,251.5 L105,295 L150,287.5 C165,295 182,300 200,300 C255.23,300 300,255.23 300,200 C300,144.77 255.23,100 200,100 Z" fill="url(#heroGradient)" opacity="0.5" />
              <circle cx="200" cy="200" r="60" fill="none" stroke="url(#heroGradient)" stroke-width="4" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
