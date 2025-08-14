// import { sdk } from 'fire-sdk/client';
import { IFormDemand, PropsForm } from '@/interfaces';

export default function FormDemand(props: PropsForm<IFormDemand>) {
  return (
    <section id="form" className="py-28 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Pronto para começar?
          </span>
          <h2 className="text-4xl font-bold mb-4">Descreva sua demanda</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para
            discutir sua solução personalizada.
          </p>
        </div>

        <form
          onSubmit={props?.form.handleSubmit(props.handleSubmit)}
          className="bg-card py-8 px-5 rounded-2xl shadow-xl border border-muted-foreground/5 space-y-6"
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Nome da Empresa <b className="text-red-500">*</b>
            </label>
            <input
              {...props?.form?.register('companyName')}
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-background border border-muted-foreground/20 text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
              placeholder="Ex: TecnoDigital Inc."
            />
            <span className="text-red-400">
              {props?.form?.formState?.errors?.companyName?.message}
            </span>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Whatsapp <b className="text-red-500">*</b>
            </label>
            <input
              {...props?.form?.register('whatsapp')}
              onChange={(txt) => {
                props?.form?.setValue(
                  'whatsapp',
                  txt.currentTarget.value,
                  // sdk.utils.maskPhone(txt.currentTarget.value),
                );
              }}
              value={props?.form?.watch('whatsapp')}
              className={`${!!props?.form?.formState?.errors?.whatsapp?.message && 'border-red-400'}  w-full px-4 py-3 rounded-lg bg-background border border-muted-foreground/20 text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200`}
              placeholder="Seu número de whatsapp"
            />
            <span className="text-red-400">
              {props?.form?.formState?.errors?.whatsapp?.message}
            </span>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Descreva sua necessidade <b className="text-red-500">*</b>
            </label>
            <textarea
              {...props?.form?.register('demand')}
              className={`
                 ${props?.form?.formState?.errors?.demand?.message && 'border-red-400'} h-56 w-full px-4 py-3 rounded-lg bg-background border border-muted-foreground/20 text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200`}
              placeholder="Ex: Preciso automatizar o processo de atendimento ao cliente via WhatsApp, incluindo respostas automáticas para perguntas frequentes e encaminhamento para atendente humano quando necessário..."
            ></textarea>
            <span className="text-red-400">
              {props?.form?.formState?.errors?.demand?.message}
            </span>
          </div>

          <div className="pt-4">
            <button
              disabled={props?.loading}
              type="submit"
              className="cursor-pointer w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
            >
              <span>
                {props?.loading ? 'Enviando...' : 'Enviar solicitação'}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Ao enviar este formulário, você concorda com nossos Termos de
            Serviço e Política de Privacidade.
          </p>
        </form>
      </div>
    </section>
  );
}
