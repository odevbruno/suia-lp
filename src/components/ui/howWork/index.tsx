'use client';

export default function HowWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28 bg-gradient-to-b from-muted to-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Processo simples
          </span>
          <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transformamos sua necessidade em solução em apenas 3 passos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-2xl shadow-lg card-hover border border-muted-foreground/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Envie sua demanda</h3>
            <p className="text-muted-foreground">
              Descreva o que você precisa: automações, scripts, bots,
              integrações ou soluções personalizadas.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg card-hover border border-muted-foreground/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-accent">2</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Criamos com IA</h3>
            <p className="text-muted-foreground">
              Nossa inteligência artificial desenvolve uma solução eficiente e
              personalizada para seu problema.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg card-hover border border-muted-foreground/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Entrega rápida</h3>
            <p className="text-muted-foreground">
              Você recebe seu micro serviço pronto para usar, com suporte e
              ajustes inclusos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
