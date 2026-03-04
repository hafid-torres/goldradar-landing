'use client';
import { ChevronDown, CheckCircle2, Lock, Shield, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [alertCarouselIdx, setAlertCarouselIdx] = useState(1); // Start at center (main alert)

  const faqs = [
    {
      question: "O que é a Next Market Points?",
      answer: "A Next Market Points é uma plataforma de inteligência de mercado em tempo real. Trabalhamos com relatórios e monitoramento contínuo do mercado, trazendo informação de forma rápida e consistente para você tomar suas decisões com base em dados reais e contexto."
    },
    {
      question: "O que é o Gold Radar?",
      answer: "O primeiro módulo da Next Market Points. Uma ferramenta de monitoramento e curadoria focada no mercado de Ouro (XAUUSD). Entregamos contexto, alertas e agenda econômica filtrada para ajudar traders a tomar decisões mais informadas."
    },
    {
      question: "Vocês dão sinais de compra e venda?",
      answer: "Não. Nossa entrega é exclusivamente informativa. A decisão final é sempre sua. Somos um filtro de informação, não um gerador de sinais."
    },
    {
      question: "Como funciona o acesso após o pagamento?",
      answer: "Após confirmação do PIX via Mercado Pago, nosso bot libera automaticamente seu acesso à sala premium no Telegram. Você recebe um link e entra imediatamente."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim. Basta entrar em contato via WhatsApp ou email. Cancelamentos são processados conforme o Código de Defesa do Consumidor. Também aceitamos outras formas de pagamento — entre em contato conosco."
    },
    {
      question: "Por que perco dinheiro operando sozinho?",
      answer: "Porque você está operando sem contexto. Notícias importantes chegam atrasadas, você não sabe quando é evento macro relevante, perde pontos críticos do dia e fica sobrecarregado com informação. O Gold Radar resolve isso: filtramos o ruído e entregamos o que importa, na hora certa."
    }
  ];

  const pricingPlans = [
    { period: "MENSAL", price: "39,90", duration: "/mês", perMonth: null, badge: null },
    { period: "TRIMESTRAL", price: "99,90", duration: "/3 meses", perMonth: "R$33,30/mês", badge: "⭐ MAIS POPULAR" },
    { period: "SEMESTRAL", price: "179,90", duration: "/6 meses", perMonth: "R$29,98/mês", badge: null },
    { period: "ANUAL", price: "329,90", duration: "/ano", perMonth: "R$27,49/mês", badge: "💰 MELHOR CUSTO-BENEFÍCIO" }
  ];

  const alerts = [
    {
      type: "RELATÓRIO DIÁRIO",
      title: "Relatório de Abertura",
      time: "08:00h",
      content: "Bom dia! Confira os pontos de atenção para hoje, análise técnica e cenários esperados.",
      icon: "📄"
    },
    {
      type: "ALERTA ATÍPICO",
      title: "Movimento Detectado",
      time: "08:47h",
      content: "Volume acima da média nos últimos 25 minutos. Indicadores apontam grande movimento comprador.\n\nCaso rompimento de 4.892,48 seja confirmado:\n→ Estatisticamente há maior probabilidade (Análise indica 76% de probabilidade) de continuidade até 4.918,17.\n\nCaso não confirme:\n→ Atenção para possível consolidação conforme níveis do relatório diário.",
      icon: "⚡"
    },
    {
      type: "AGENDA ECONÔMICA",
      title: "Eventos do Dia",
      time: "Contínuo",
      content: "⚡⚡⚡ PRONUNCIAMENTO DO FED - 14:00h\n\n📅 CPI - 12:30h\n📅 PAYROLL - 13:30h\n\nAcompanhe o relatório diário para possíveis movimentos de acordo com as notícias previstas.",
      icon: "📅"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#2a2a3e] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 bg-[#00ff88] rounded-full flex items-center justify-center text-[#0a0a0f] font-bold text-xs">NMP</div>
            <span className="text-sm sm:text-lg font-bold text-white hidden sm:inline">THE NEXT MARKET POINTS</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm">
              <a href="#inicio" className="hover:text-[#00ff88] transition">INÍCIO</a>
              <a href="#sobre" className="hover:text-[#00ff88] transition">SOBRE</a>
              <a href="#gold-radar" className="hover:text-[#00ff88] transition">GOLD RADAR</a>
              <a href="#precos" className="hover:text-[#00ff88] transition">PREÇOS</a>
            </div>
            <button className="btn-neon-green text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3">ENTRAR GRÁTIS</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ff88] rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00c8ff] rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="heading-lg mb-6">
              O mercado não é <span className="neon-glow text-[#00ff88]">IMPREVISÍVEL.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Imprevisível é operar sem contexto.
            </p>
            <p className="text-base text-gray-400 mb-8 leading-relaxed">
              Enquanto você tenta acompanhar notícias, calendário econômico e gráficos ao mesmo tempo, o mercado já se moveu. Nós filtramos o que realmente importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
              <button className="btn-neon-green flex items-center justify-center gap-2 flex-1">
                <span>✈️</span> ENTRAR NA SALA GRATUITA
              </button>
              <button className="btn-neon-gold flex items-center justify-center gap-2 flex-1">
                <span>🔐</span> ASSINAR GOLD RADAR PREMIUM
              </button>
            </div>
          </div>
          
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-[#00c8ff]/10 rounded-2xl border border-[#2a2a3e] neon-border flex items-center justify-center overflow-hidden">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/7y1TZBdmqJvcBWzCjlTGIw/sandbox/StfIDPD71B51TLj5lZsGw1-img-1_1772100215000_na1fn_eGF1dXNkLW5lb24tY2hhcnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN3kxVFpCZG1xSnZjQld6Q2psVEdJdy9zYW5kYm94L1N0ZklEUEQ3MUI1MVRMajVsWnNHdzEtaW1nLTFfMTc3MjEwMDIxNTAwMF9uYTFmbl9lR0YxZFhOa0xXNWxiMjR0WTJoaGNuUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D25niyuEXdrr0wE0PhcODA41EodSm8HVKSXhtZJDIhs-4cbnebjc6eRQkmCFs7laNwdyqeFHdHGMDBJYaKrpqLULueE7SPNNZxQY8qJ6d1rhPhsHU28K6XAOlbGkst8IqsPjShzMgp5LO3md6Vwz3U1XoMicTYRv91s~APGgytRAQ2y4ajeeHfDxQ74MrOKBV6UkQpilnomZCgyknA6JEqZqooeKi312fN0oAlfalIHdnjwmk8i2jr8QisemG1Km6aXumTvFeYvh0tnXLvRQvfjNoIe~WZhPxa4D8HwmkU69~YfrHnXLvsePfaAOwToK7B7F6bHmulMPs0HLfyjGDQ__"
                alt="XAUUSD Chart"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                <p className="text-xl font-bold text-[#00ff88] mb-2">Monitoramento 24/7</p>
                <p className="text-sm text-[#00c8ff]">Informação gera decisão certa!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#1a1a2e]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              <span className="text-white">Filtramos o </span>
              <span className="neon-glow text-[#d4af37]">RUÍDO.</span>
              <br />
              <span className="text-white">ENTREGAMOS o que </span>
              <span className="neon-glow text-[#00ff88]">IMPORTA!</span>
            </h2>
            <p className="text-lg text-[#00c8ff] font-semibold mt-8">Inteligência de mercado, em tempo real</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {[
              { icon: "⚡", text: "Excesso de informação" },
              { icon: "📱", text: "Ruído nas redes sociais" },
              { icon: "🎯", text: "Gurus prometendo lucro fácil" },
              { icon: "📅", text: "Sem preparo para eventos macro" },
              { icon: "🎲", text: "Operações no impulso" }
            ].map((item, idx) => (
              <div key={idx} className="relative neon-border rounded-xl bg-[#1a1a2e]/50 p-6 flex flex-col items-center justify-center text-center hover:bg-[#1a1a2e] transition">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✕</span>
                </div>
                <span className="text-4xl mb-3">{item.icon}</span>
                <p className="text-sm text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Radar Section */}
      <section id="gold-radar" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-[#d4af37] tracking-wider">
              PRIMEIRO MÓDULO OFICIAL
            </h2>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
              Monitoramento Estratégico do Ouro (XAUUSD)
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="neon-border rounded-2xl bg-[#1a1a2e]/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🎯</span>
                <h3 className="text-2xl font-bold text-[#00ff88]">SALA GRATUITA</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Agenda econômica resumida",
                  "Atualizações pontuais",
                  "Conteúdo educacional",
                  "Exemplos de relatórios",
                  "1 alerta básico diário ou conforme volatilidade"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-xl mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full btn-neon-green mt-8">✈️ ENTRAR GRATUITAMENTE</button>
              <p className="text-center text-xs text-gray-500 mt-4">t.me/goldradar_preview</p>
            </div>

            <div className="neon-border-gold rounded-2xl bg-[#1a1a2e]/50 p-8 border-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">👑</span>
                <h3 className="text-2xl font-bold text-[#ffd700]">GOLD RADAR PREMIUM</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Relatório Semanal - Segunda 00:30h",
                  "Relatório Diário de Abertura - 08:00h",
                  "Relatório de Fechamento - 18:00-19:00h",
                  "Alertas Macro Filtrados - FED, CPI, Payroll",
                  "Alertas Atípicos - 3 a 5 por dia",
                  "Agenda Econômica Global Filtrada"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-xl mt-1">⚡</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full btn-neon-gold mt-8">🔐 ASSINAR GOLD RADAR PREMIUM</button>
              <p className="text-center text-xs text-gray-500 mt-4">Não realizamos recomendações de compra ou venda. Ferramenta informativa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alerts Carousel Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#1a1a2e]/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-md text-center mb-12">EXEMPLOS DE ENTREGAS</h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alerts.map((alert, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl p-6 transition-all duration-300 ${
                    idx === alertCarouselIdx
                      ? "neon-border border-2 bg-[#1a1a2e] scale-105 md:scale-110"
                      : "neon-border bg-[#1a1a2e]/50 opacity-60 md:opacity-100"
                  }`}
                >
                  <div className="text-center">
                    <p className="text-xs text-[#00c8ff] font-bold mb-2">{alert.type}</p>
                    <p className="text-2xl mb-3">{alert.icon}</p>
                    <h3 className="text-lg font-bold text-white mb-2">{alert.title}</h3>
                    <p className="text-xs text-gray-500 mb-4">{alert.time}</p>
                    <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">{alert.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setAlertCarouselIdx((prev) => (prev - 1 + alerts.length) % alerts.length)}
                className="p-2 rounded-full border border-[#00ff88] hover:bg-[#00ff88] hover:text-[#0a0a0f] transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setAlertCarouselIdx((prev) => (prev + 1) % alerts.length)}
                className="p-2 rounded-full border border-[#00ff88] hover:bg-[#00ff88] hover:text-[#0a0a0f] transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="text-center text-gray-400 italic mt-12">Relatórios, alertas e agenda. Tudo mastigado. Você decide.</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">ESCOLHA SEU PLANO</h2>
            <p className="text-gray-400">Acesso completo ao Gold Radar Premium</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, idx) => {
              const costPerDay = (parseFloat(plan.price) / (plan.period.includes("30") ? 30 : plan.period.includes("3") ? 90 : plan.period.includes("6") ? 180 : 365)).toFixed(2);
              return (
                <div
                  key={idx}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    plan.badge?.includes("MAIS POPULAR")
                      ? "neon-border border-2 bg-[#1a1a2e] scale-105"
                      : plan.badge?.includes("MELHOR")
                      ? "neon-border-gold border-2 bg-[#1a1a2e]"
                      : "neon-border bg-[#1a1a2e]/50 hover:bg-[#1a1a2e]"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                        plan.badge.includes("MAIS")
                          ? "bg-[#00ff88] text-[#0a0a0f]"
                          : "bg-[#ffd700] text-[#0a0a0f]"
                      }`}>
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-4 mt-2">{plan.period}</h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${
                      plan.badge?.includes("MAIS")
                        ? "text-[#00ff88]"
                        : plan.badge?.includes("MELHOR")
                        ? "text-[#ffd700]"
                        : "text-white"
                    }`}>
                      R${plan.price}
                    </span>
                    <span className="text-gray-400 text-sm">{plan.duration}</span>
                  </div>
                  
                  <p className={`text-xs mb-6 font-semibold ${
                    plan.badge?.includes("MAIS")
                      ? "text-[#00ff88]"
                      : plan.badge?.includes("MELHOR")
                      ? "text-[#ffd700]"
                      : "text-[#00c8ff]"
                  }`}>
                    R${costPerDay} P/ DIA
                  </p>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.badge?.includes("MAIS")
                      ? "btn-neon-green"
                      : plan.badge?.includes("MELHOR")
                      ? "btn-neon-gold"
                      : "btn-neon-green"
                  }`}>
                    ASSINAR
                  </button>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
            {[
              { icon: "💳", text: "Pagamento Seguro PIX" },
              { icon: "🛡️", text: "Monitoramento 24/7" },
              { icon: "🔓", text: "Acesso Imediato" },
              { icon: "💬", text: "Suporte via WhatsApp" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-xs text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#1a1a2e]/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-md text-center mb-12">PERGUNTAS FREQUENTES</h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="neon-border rounded-xl bg-[#1a1a2e]/50 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-[#1a1a2e] transition"
                >
                  <span className="text-lg font-bold text-left">
                    <span className="text-[#00ff88] mr-3">Q{idx + 1}</span>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#00ff88] transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-[#2a2a3e]">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-[#d4af37] font-bold mr-2">A{idx + 1}</span>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-[#2a2a3e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center">
            <div>
              <p className="text-sm text-gray-400 mb-2">CNPJ: 64.454.327/0001-16</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">François Torres</p>
              <p className="text-xs text-gray-500">Fundador & Idealizador | Trader e investidor com 17 anos de experiência</p>
            </div>
            <div className="flex justify-center gap-4">
              <a href="https://instagram.com/nextmarketpoints" className="text-[#00ff88] hover:text-[#00c8ff] transition">📱 Instagram</a>
              <a href="https://t.me/goldradar_preview" className="text-[#00c8ff] hover:text-[#00ff88] transition">💬 Telegram</a>
            </div>
          </div>

          <div className="text-center border-t border-[#2a2a3e] pt-8">
            <p className="text-xs text-gray-500">© 2026 The Next Market Points — Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
