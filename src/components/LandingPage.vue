<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-burnt-orange/20 to-purple/20"></div>
      <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-burnt-orange to-purple bg-clip-text text-transparent">
            Zap que Trabalha por Você
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-300">
            Agendamentos automáticos, respostas inteligentes, lembretes para clientes. 
            Deixe o WhatsApp trabalhar enquanto você vende mais.
          </p>
          <p class="text-lg md:text-xl mb-12 text-gray-400">
            Automação de WhatsApp e Instagram para pequenos negócios
          </p>
          <a href="#contato" class="inline-block bg-burnt-orange hover:bg-burnt-orange/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Quero Automatizar Agora
          </a>
        </div>
      </div>
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" class="text-burnt-orange">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-gradient-to-b from-black to-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-burnt-orange to-purple bg-clip-text text-transparent">
          Perfeito para Seu Negócio
        </h2>
        <p class="text-center text-gray-400 mb-16 text-lg">
          Soluções específicas para barbearias, salões e lojas
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- Feature 1 -->
          <div class="bg-gray-800 rounded-xl p-8 border border-purple/30 hover:border-burnt-orange/50 transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-burnt-orange mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white">Agendamento Automático</h3>
            <p class="text-gray-400">
              Clientes agendam direto pelo WhatsApp, sem você precisar atender cada mensagem. Sistema inteligente gerencia horários disponíveis.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-gray-800 rounded-xl p-8 border border-purple/30 hover:border-burnt-orange/50 transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-purple mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white">Lembretes Automáticos</h3>
            <p class="text-gray-400">
              Envie lembretes automáticos antes dos horários agendados. Reduza faltas e mantenha sua agenda sempre cheia.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-gray-800 rounded-xl p-8 border border-purple/30 hover:border-burnt-orange/50 transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-burnt-orange mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white">Respostas Inteligentes</h3>
            <p class="text-gray-400">
              Responda perguntas frequentes automaticamente. Preços, horários, serviços - tudo respondido na hora.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-gray-800 rounded-xl p-8 border border-purple/30 hover:border-burnt-orange/50 transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-purple mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white">Relatórios e Estatísticas</h3>
            <p class="text-gray-400">
              Acompanhe quantos agendamentos, cancelamentos e mensagens. Tome decisões baseadas em dados reais.
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="bg-gray-800 rounded-xl p-8 border border-purple/30 hover:border-burnt-orange/50 transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-burnt-orange mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white">Cadastro de Clientes</h3>
            <p class="text-gray-400">
              Mantenha histórico completo de cada cliente. Preferências, últimos serviços e muito mais, tudo organizado.
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="bg-gray-800 rounded-xl p-8 border border-purple/30 hover:border-burnt-orange/50 transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-purple mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white">Instagram Integrado</h3>
            <p class="text-gray-400">
              Conecte seu Instagram e gerencie mensagens em um só lugar. Não perca mais nenhum cliente nas DMs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contato" class="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-burnt-orange to-purple bg-clip-text text-transparent">
            Comece Agora
          </h2>
          <p class="text-center text-gray-400 mb-12 text-lg">
            Preencha o formulário e receba todas as informações no seu WhatsApp
          </p>
          
          <form @submit.prevent="handleSubmit" class="bg-gray-800 rounded-xl p-8 border border-purple/30">
            <div class="mb-6">
              <label for="nome" class="block text-gray-300 mb-2 font-semibold">Nome completo</label>
              <input 
                type="text" 
                id="nome" 
                v-model="form.nome" 
                required
                class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-burnt-orange text-white"
                placeholder="Seu nome"
              >
            </div>

            <div class="mb-6">
              <label for="telefone" class="block text-gray-300 mb-2 font-semibold">WhatsApp</label>
              <input 
                type="tel" 
                id="telefone" 
                v-model="form.telefone" 
                required
                class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-burnt-orange text-white"
                placeholder="(11) 99999-9999"
              >
            </div>

            <div class="mb-6">
              <label for="negocio" class="block text-gray-300 mb-2 font-semibold">Tipo de negócio</label>
              <select 
                id="negocio" 
                v-model="form.negocio" 
                required
                class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-burnt-orange text-white"
              >
                <option value="">Selecione...</option>
                <option value="Barbearia">Barbearia</option>
                <option value="Salão de Beleza">Salão de Beleza</option>
                <option value="Loja">Loja</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div class="mb-6">
              <label for="mensagem" class="block text-gray-300 mb-2 font-semibold">Mensagem (opcional)</label>
              <textarea 
                id="mensagem" 
                v-model="form.mensagem" 
                rows="4"
                class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-burnt-orange text-white"
                placeholder="Conte um pouco sobre seu negócio..."
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full bg-gradient-to-r from-burnt-orange to-purple hover:from-burnt-orange/90 hover:to-purple/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Enviar para WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black py-10 border-t border-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-burnt-orange to-purple bg-clip-text text-transparent">
            Zap que Trabalha por Você
          </h3>
          <p class="text-gray-400 mb-4">
            Automação inteligente para WhatsApp e Instagram
          </p>
          <p class="text-gray-500 text-sm">
            © 2025 Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nome: '',
  telefone: '',
  negocio: '',
  mensagem: ''
})

const handleSubmit = () => {
  // Validar campos obrigatórios
  if (!form.nome.trim() || !form.telefone.trim() || !form.negocio) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }
  
  // Validar formato básico do telefone (apenas números e alguns caracteres permitidos)
  const phoneRegex = /^[\d\s\(\)\-]+$/
  if (!phoneRegex.test(form.telefone)) {
    alert('Por favor, insira um número de telefone válido.')
    return
  }
  
  // Criar mensagem para WhatsApp
  const whatsappNumber = '5511997628274'
  let message = `*Nova solicitação de automação*\n\n`
  message += `*Nome:* ${form.nome.trim()}\n`
  message += `*WhatsApp:* ${form.telefone.trim()}\n`
  message += `*Tipo de negócio:* ${form.negocio}\n`
  
  if (form.mensagem.trim()) {
    message += `*Mensagem:* ${form.mensagem.trim()}\n`
  }

  // Codificar a mensagem para URL
  const encodedMessage = encodeURIComponent(message)
  
  // Abrir WhatsApp com a mensagem pré-preenchida
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  
  // Limpar formulário
  form.nome = ''
  form.telefone = ''
  form.negocio = ''
  form.mensagem = ''
}
</script>
