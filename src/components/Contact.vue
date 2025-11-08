<script setup>
import { ref } from 'vue'

const formData = ref({
  nome: '',
  negocio: '',
  telefone: '',
  mensagem: '',
  optIn: false
})

const handleSubmit = () => {
  // Montar mensagem do WhatsApp
  const mensagemTexto = formData.value.mensagem.trim() || '—'
  const optInStatus = formData.value.optIn ? '(Com opt-in de novidades)' : '(Sem opt-in de novidades)'
  
  const mensagemCompleta = `Oi! Sou ${formData.value.nome} do negócio ${formData.value.negocio}. Meu telefone é ${formData.value.telefone}. Mensagem: ${mensagemTexto}. ${optInStatus}`
  
  // Encode e montar URL
  const mensagemEncoded = encodeURIComponent(mensagemCompleta)
  const whatsappUrl = `https://wa.me/5511997628274?text=${mensagemEncoded}`
  
  // Redirecionar
  window.location.href = whatsappUrl
}
</script>

<template>
  <section id="contato" class="py-20 sm:py-28 lg:py-36">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <!-- Título -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Vamos colocar seu WhatsApp 
          <span class="bg-brand-gradient bg-clip-text text-transparent">para trabalhar</span>.
        </h2>
        <p class="text-lg text-inkMuted">Preencha e te respondemos no próprio Whats.</p>
      </div>

      <!-- Formulário -->
      <div class="rounded-2xl border border-inkBorder/50 bg-white/5 backdrop-blur p-6 sm:p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Nome -->
          <div>
            <label for="nome" class="block text-sm font-medium mb-2">
              Nome <span class="text-brandGreen">*</span>
            </label>
            <input
              id="nome"
              v-model="formData.nome"
              type="text"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/5 border border-inkBorder/50 text-inkLight placeholder-inkMuted focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-transparent transition"
              placeholder="Seu nome completo"
            />
          </div>

          <!-- Negócio -->
          <div>
            <label for="negocio" class="block text-sm font-medium mb-2">
              Negócio <span class="text-brandGreen">*</span>
            </label>
            <input
              id="negocio"
              v-model="formData.negocio"
              type="text"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/5 border border-inkBorder/50 text-inkLight placeholder-inkMuted focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-transparent transition"
              placeholder="Ex: Barbearia do João"
            />
          </div>

          <!-- Telefone -->
          <div>
            <label for="telefone" class="block text-sm font-medium mb-2">
              Telefone <span class="text-brandGreen">*</span>
            </label>
            <input
              id="telefone"
              v-model="formData.telefone"
              type="tel"
              required
              pattern="^(\(?\d{2}\)?\s?)?9?\d{4}-?\d{4}$"
              class="w-full px-4 py-3 rounded-xl bg-white/5 border border-inkBorder/50 text-inkLight placeholder-inkMuted focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-transparent transition"
              placeholder="(11) 99999-9999"
            />
            <p class="mt-1 text-xs text-inkMuted">Formato: (11) 99999-9999 ou 11999999999</p>
          </div>

          <!-- Mensagem -->
          <div>
            <label for="mensagem" class="block text-sm font-medium mb-2">
              Mensagem (opcional)
            </label>
            <textarea
              id="mensagem"
              v-model="formData.mensagem"
              rows="4"
              class="w-full px-4 py-3 rounded-xl bg-white/5 border border-inkBorder/50 text-inkLight placeholder-inkMuted focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-transparent transition resize-none"
              placeholder="Conte um pouco sobre seu negócio e como podemos ajudar..."
            ></textarea>
          </div>

          <!-- Checkbox opt-in -->
          <div class="flex items-start gap-3">
            <input
              id="optin"
              v-model="formData.optIn"
              type="checkbox"
              class="mt-1 w-4 h-4 rounded border-inkBorder/50 bg-white/5 text-brandGreen focus:ring-2 focus:ring-brandGreen focus:ring-offset-0 focus:ring-offset-ink"
            />
            <label for="optin" class="text-sm text-inkMuted cursor-pointer select-none">
              Quero receber novidades por WhatsApp e e-mail.
            </label>
          </div>

          <!-- Botão Submit -->
          <button
            type="submit"
            class="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-ink bg-brand-gradient hover:-translate-y-px transition ring-1 ring-transparent hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
