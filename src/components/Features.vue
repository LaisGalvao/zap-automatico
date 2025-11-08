<template>
  <section id="features" class="py-20 sm:py-28 lg:py-36 bg-white/[0.02]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Título da seção -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Feita para a correria do 
          <span class="bg-brand-gradient bg-clip-text text-transparent">pequeno negócio</span>.
        </h2>
      </div>

      <!-- Grid de Features -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <!-- Feature 1: Respostas Rápidas -->
        <div class="rounded-2xl border border-inkBorder/50 bg-white/5 backdrop-blur p-6 hover:border-white/30 transition">
          <div class="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Respostas Rápidas</h3>
          <p class="text-inkMuted">Modelos prontos que agilizam seu atendimento diário.</p>
        </div>

        <!-- Feature 2: Funil no Whats -->
        <div class="rounded-2xl border border-inkBorder/50 bg-white/5 backdrop-blur p-6 hover:border-white/30 transition">
          <div class="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18M3 8h12M3 12h6M7 20l4-8 4 8" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Funil no Whats</h3>
          <p class="text-inkMuted">Visualize etapas: novo, em atendimento, pago, retorno.</p>
        </div>

        <!-- Feature 3: Lembretes Automáticos -->
        <div class="rounded-2xl border border-inkBorder/50 bg-white/5 backdrop-blur p-6 hover:border-white/30 transition">
          <div class="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Lembretes Automáticos</h3>
          <p class="text-inkMuted">Cobranças gentis e follow-ups no tempo certo.</p>
        </div>

        <!-- Feature 4: Tabela de Preços -->
        <div class="rounded-2xl border border-inkBorder/50 bg-white/5 backdrop-blur p-6 hover:border-white/30 transition">
          <div class="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Tabela de Preços</h3>
          <p class="text-inkMuted">Envie seus serviços e valores organizados em 1 clique.</p>
        </div>

        <!-- Feature 5: Orçamento Rápido -->
        <div class="rounded-2xl border border-inkBorder/50 bg-white/5 backdrop-blur p-6 hover:border-white/30 transition">
          <div class="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Orçamento Rápido</h3>
          <p class="text-inkMuted">Monte e envie orçamentos personalizados direto no chat.</p>
        </div>

        <!-- Feature 6: Agenda Integrada -->
        <div class="rounded-2xl border border-inkBorder/50 bg-white/5 backdrop-blur p-6 hover:border-white/30 transition">
          <div class="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Agenda Integrada</h3>
          <p class="text-inkMuted">Visualize seus horários e evite conflitos de agendamento.</p>
        </div>
      </div>
    </div>
  </section>
</template>
