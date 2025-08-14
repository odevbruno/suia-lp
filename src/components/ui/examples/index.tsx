'use client';

export default function Examples() {
  return (
    <section id="exemplos" className="py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Soluções reais
          </span>
          <h2 className="text-4xl font-bold mb-4">
            O que podemos criar para você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exemplos de micro serviços que já desenvolvemos com IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl shadow-md border border-muted-foreground/5 card-hover group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bot text-primary"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">🤖 Chatbot inteligente</h3>
            <p className="text-muted-foreground">
              Responde dúvidas internas sobre RH, férias, processos e políticas
              da empresa com conhecimento específico.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md border border-muted-foreground/5 card-hover group">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text text-accent"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">📄 Gerador de documentos</h3>
            <p className="text-muted-foreground">
              Cria contratos, propostas e relatórios em PDF automaticamente com
              base nos dados da empresa e templates personalizados.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md border border-muted-foreground/5 card-hover group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mic-2 text-primary"
              >
                <path d="m12 8-9.04 9.06a2.4 2.4 0 1 0 3.4 3.4L16 12" />
                <path d="M17.64 15a2.4 2.4 0 0 0 3.4-3.4l-2-2" />
                <path d="m8 12 2 2" />
                <path d="M2 2l20 20" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">🎙️ Resumo de reuniões</h3>
            <p className="text-muted-foreground">
              Transcreve, resume e estrutura atas de reuniões a partir de
              gravações, identificando ações e decisões importantes.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md border border-muted-foreground/5 card-hover group">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bar-chart-3 text-accent"
              >
                <path d="M3 3v18h18" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">📊 Análise de dados</h3>
            <p className="text-muted-foreground">
              Processa planilhas e bancos de dados para extrair insights,
              tendências e relatórios automáticos.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md border border-muted-foreground/5 card-hover group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail text-primary"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">
              ✉️ Atendimento automático
            </h3>
            <p className="text-muted-foreground">
              Classifica e responde e-mails automaticamente com base no conteúdo
              e intenção do remetente.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md border border-muted-foreground/5 card-hover group">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-codesandbox text-accent"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="m7.5 4.21 4.5 2.6 4.5-2.6" />
                <path d="m7.5 19.79V14.6L3 12" />
                <path d="m21 12-4.5 2.6v5.19" />
                <path d="M3.27 6.96 12 12.01l8.73-5.05" />
                <path d="M12 22.08V12" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">
              🛠️ Integrações customizadas
            </h3>
            <p className="text-muted-foreground">
              Conecta sistemas diferentes (ERP, CRM, WhatsApp, etc) para
              automatizar fluxos de trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
