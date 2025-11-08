<template>
  <footer class="border-t border-inkBorder/50 bg-white/[0.02] py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo e Copyright -->
        <div class="text-center md:text-left">
          <div class="text-lg font-bold bg-brand-gradient bg-clip-text text-transparent mb-2">
            Zap que Trabalha por Você
          </div>
          <p class="text-sm text-inkMuted">© 2025 Zap que Trabalha por Você.</p>
        </div>

        <!-- Links -->
        <nav class="flex items-center gap-6">
          <a 
            href="#hero" 
            class="text-sm text-inkMuted hover:text-inkLight transition"
          >
            Início
          </a>
          <a 
            href="#features" 
            class="text-sm text-inkMuted hover:text-inkLight transition"
          >
            Recursos
          </a>
          <a 
            href="#contato" 
            class="text-sm text-inkMuted hover:text-inkLight transition"
          >
            Contato
          </a>
        </nav>
      </div>

      <!-- Nota de privacidade -->
      <div class="mt-8 pt-8 border-t border-inkBorder/30 text-center">
        <p class="text-xs text-inkMuted">
          Usamos seus dados apenas para contato comercial.
        </p>
      </div>
    </div>
  </footer>
</template>
