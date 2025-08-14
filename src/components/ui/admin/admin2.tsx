// 'use client';

// import Card from '../card';

// export default function AdminDemandDetail() {
//   return (
//     <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
//       <div className="mb-6">
//         <a
//           href="#"
//           className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-chevron-left w-4 h-4 mr-1"
//           >
//             <path d="m15 18-6-6 6-6" />
//           </svg>
//           Voltar para o painel de gestão
//         </a>
//       </div>

//       <Card
//         type="demand-detail"
//         onClick={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//         title={'Chatbot para atendimento ao cliente'}
//         subtitle={
//           'Preciso de um chatbot para responder perguntas frequentes no WhatsApp.'
//         }
//         status={'inProgress'}
//         datetime={'15/10/2023, 14:30'}
//         content={{
//           title: 'Detalhes da Demanda',
//           subtitle: `Preciso de um chatbot para responder perguntas frequentes no WhatsApp. Principais funcionalidades necessárias: - Responder perguntas sobre horário de funcionamento - Informar formas de pagamento - Encaminhar para atendente humano quando necessário - Coletar informações básicas do cliente - Integração com nosso sistema de CRM existente`,
//         }}
//         footer={{
//           priority: 'high',
//           deadline: '25/10/2023',
//           responsible: 'Equipe 1',
//         }}
//       />

//       {/* Seção de Controle Administrativo */}
//       <div className="bg-card rounded-lg border border-muted-foreground/10 p-6 mb-8">
//         <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-settings"
//           >
//             <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//             <circle cx="12" cy="12" r="3" />
//           </svg>
//           Controle Administrativo
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-muted rounded-lg p-6">
//             <h3 className="text-lg font-semibold mb-4">
//               Atribuição de Recursos
//             </h3>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-muted-foreground mb-1">
//                   Equipe Responsável
//                 </label>
//                 <select className="w-full bg-background border border-muted-foreground/20 rounded-md px-3 py-2">
//                   <option>Equipe 1</option>
//                   <option>Equipe 2</option>
//                   <option>Equipe 3</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-muted-foreground mb-1">
//                   Gestor do Projeto
//                 </label>
//                 <select className="w-full bg-background border border-muted-foreground/20 rounded-md px-3 py-2">
//                   <option>João Silva</option>
//                   <option>Maria Souza</option>
//                   <option>Carlos Oliveira</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-muted-foreground mb-1">
//                   Prioridade
//                 </label>
//                 <select className="w-full bg-background border border-muted-foreground/20 rounded-md px-3 py-2">
//                   <option>Baixa</option>
//                   <option>Média</option>
//                   <option selected>Alta</option>
//                   <option>Urgente</option>
//                 </select>
//               </div>

//               <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
//                 Atualizar Atribuição
//               </button>
//             </div>
//           </div>

//           <div className="bg-muted rounded-lg p-6">
//             <h3 className="text-lg font-semibold mb-4">Controle de Prazos</h3>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-muted-foreground mb-1">
//                   Data de Início
//                 </label>
//                 <input
//                   type="date"
//                   className="w-full bg-background border border-muted-foreground/20 rounded-md px-3 py-2"
//                   value="2023-10-18"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-muted-foreground mb-1">
//                   Prazo Final
//                 </label>
//                 <input
//                   type="date"
//                   className="w-full bg-background border border-muted-foreground/20 rounded-md px-3 py-2"
//                   value="2023-10-25"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-muted-foreground mb-1">
//                   Status
//                 </label>
//                 <select className="w-full bg-background border border-muted-foreground/20 rounded-md px-3 py-2">
//                   <option>Não Iniciado</option>
//                   <option selected>Em Andamento</option>
//                   <option>Pausado</option>
//                   <option>Concluído</option>
//                   <option>Cancelado</option>
//                 </select>
//               </div>

//               <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
//                 Atualizar Prazos
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="bg-muted rounded-lg p-6">
//           <h3 className="text-lg font-semibold mb-4">Aprovações Financeiras</h3>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//             <div className="bg-background p-4 rounded-lg">
//               <h4 className="text-sm font-medium text-muted-foreground mb-1">
//                 Orçamento Aprovado
//               </h4>
//               <p className="text-2xl font-bold">R$ 4.750,00</p>
//             </div>

//             <div className="bg-background p-4 rounded-lg">
//               <h4 className="text-sm font-medium text-muted-foreground mb-1">
//                 Custo Real
//               </h4>
//               <p className="text-2xl font-bold">R$ 3.850,00</p>
//             </div>

//             <div className="bg-background p-4 rounded-lg">
//               <h4 className="text-sm font-medium text-muted-foreground mb-1">
//                 Diferença
//               </h4>
//               <p className="text-2xl font-bold text-green-600">R$ 900,00</p>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
//               Aprovar Pagamento
//             </button>
//             <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
//               Rejeitar Pagamento
//             </button>
//             <button className="flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-md hover:bg-secondary/80 transition-colors">
//               Solicitar Revisão
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Seção de Métricas e KPIs */}
//       <div className="bg-card rounded-lg border border-muted-foreground/10 p-6 mb-8">
//         <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bar-chart"
//           >
//             <line x1="12" x2="12" y1="20" y2="10" />
//             <line x1="18" x2="18" y1="20" y2="4" />
//             <line x1="6" x2="6" y1="20" y2="16" />
//           </svg>
//           Métricas e KPIs
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <div className="bg-muted p-4 rounded-lg">
//             <h4 className="text-sm font-medium text-muted-foreground mb-1">
//               Progresso
//             </h4>
//             <div className="flex items-center justify-between">
//               <p className="text-2xl font-bold">65%</p>
//               <div className="w-12 h-12">
//                 <svg viewBox="0 0 36 36" className="circular-chart">
//                   <path
//                     className="circle-bg"
//                     d="M18 2.0845
//                       a 15.9155 15.9155 0 0 1 0 31.831
//                       a 15.9155 15.9155 0 0 1 0 -31.831"
//                     fill="none"
//                     stroke="#eee"
//                     strokeWidth="3"
//                   />
//                   <path
//                     className="circle"
//                     strokeDasharray="65, 100"
//                     d="M18 2.0845
//                       a 15.9155 15.9155 0 0 1 0 31.831
//                       a 15.9155 15.9155 0 0 1 0 -31.831"
//                     fill="none"
//                     stroke="#4CAF50"
//                     strokeWidth="3"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="bg-muted p-4 rounded-lg">
//             <h4 className="text-sm font-medium text-muted-foreground mb-1">
//               Horas Consumidas
//             </h4>
//             <p className="text-2xl font-bold">31h</p>
//             <p className="text-sm text-muted-foreground">de 48h previstas</p>
//           </div>

//           <div className="bg-muted p-4 rounded-lg">
//             <h4 className="text-sm font-medium text-muted-foreground mb-1">
//               Risco
//             </h4>
//             <div className="flex items-center gap-2">
//               <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500">
//                 Moderado
//               </span>
//               <p className="text-sm text-muted-foreground">Atraso potencial</p>
//             </div>
//           </div>

//           <div className="bg-muted p-4 rounded-lg">
//             <h4 className="text-sm font-medium text-muted-foreground mb-1">
//               Satisfação
//             </h4>
//             <div className="flex items-center gap-2">
//               <div className="flex">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <svg
//                     key={star}
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill={star <= 4 ? 'currentColor' : 'none'}
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-star text-yellow-500"
//                   >
//                     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="text-sm text-muted-foreground">4/5</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-muted rounded-lg p-6">
//           <h3 className="text-lg font-semibold mb-4">Relatório de Progresso</h3>

//           <div className="mb-4">
//             <div className="flex justify-between mb-1">
//               <span className="text-sm font-medium">
//                 Desenvolvimento do fluxo
//               </span>
//               <span className="text-sm">80%</span>
//             </div>
//             <div className="w-full bg-background rounded-full h-2.5">
//               <div
//                 className="bg-blue-600 h-2.5 rounded-full"
//                 style={{ width: '80%' }}
//               ></div>
//             </div>
//           </div>

//           <div className="mb-4">
//             <div className="flex justify-between mb-1">
//               <span className="text-sm font-medium">Integração WhatsApp</span>
//               <span className="text-sm">50%</span>
//             </div>
//             <div className="w-full bg-background rounded-full h-2.5">
//               <div
//                 className="bg-blue-600 h-2.5 rounded-full"
//                 style={{ width: '50%' }}
//               ></div>
//             </div>
//           </div>

//           <div className="mb-4">
//             <div className="flex justify-between mb-1">
//               <span className="text-sm font-medium">Integração CRM</span>
//               <span className="text-sm">30%</span>
//             </div>
//             <div className="w-full bg-background rounded-full h-2.5">
//               <div
//                 className="bg-blue-600 h-2.5 rounded-full"
//                 style={{ width: '30%' }}
//               ></div>
//             </div>
//           </div>

//           <div className="mb-4">
//             <div className="flex justify-between mb-1">
//               <span className="text-sm font-medium">Testes</span>
//               <span className="text-sm">10%</span>
//             </div>
//             <div className="w-full bg-background rounded-full h-2.5">
//               <div
//                 className="bg-blue-600 h-2.5 rounded-full"
//                 style={{ width: '10%' }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Seção de Acompanhamento com Ações Administrativas */}
//       <div className="bg-card rounded-lg border border-muted-foreground/10 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-history"
//             >
//               <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
//               <path d="M3 3v5h5" />
//               <path d="M12 7v5l4 2" />
//             </svg>
//             Histórico e Acompanhamento
//           </h2>
//           <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-plus w-4 h-4 mr-2"
//             >
//               <path d="M5 12h14" />
//               <path d="M12 5v14" />
//             </svg>
//             Adicionar Registro
//           </button>
//         </div>

//         <div className="space-y-6">
//           <div className="flex gap-4">
//             <div className="flex flex-col items-center">
//               <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
//               <div className="w-px h-full bg-muted-foreground/20 timeline-connector"></div>
//             </div>
//             <div className="flex-1 pb-6">
//               <div className="flex items-center justify-between mb-1">
//                 <h4 className="font-medium">Aprovação de Orçamento</h4>
//                 <div className="flex gap-2">
//                   <span className="text-sm text-muted-foreground">
//                     18/10/2023, 10:15
//                   </span>
//                   <button className="text-muted-foreground hover:text-primary">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-more-vertical w-4 h-4"
//                     >
//                       <circle cx="12" cy="12" r="1" />
//                       <circle cx="12" cy="5" r="1" />
//                       <circle cx="12" cy="19" r="1" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               <p className="text-muted-foreground mb-2">
//                 Orçamento aprovado pelo gestor financeiro. Pagamento inicial
//                 confirmado.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
//                   Financeiro
//                 </span>
//                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
//                   Aprovação
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex flex-col items-center">
//               <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
//               <div className="w-px h-full bg-muted-foreground/20 timeline-connector"></div>
//             </div>
//             <div className="flex-1 pb-6">
//               <div className="flex items-center justify-between mb-1">
//                 <h4 className="font-medium">Alocação de Equipe</h4>
//                 <div className="flex gap-2">
//                   <span className="text-sm text-muted-foreground">
//                     18/10/2023, 11:30
//                   </span>
//                   <button className="text-muted-foreground hover:text-primary">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-more-vertical w-4 h-4"
//                     >
//                       <circle cx="12" cy="12" r="1" />
//                       <circle cx="12" cy="5" r="1" />
//                       <circle cx="12" cy="19" r="1" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               <p className="text-muted-foreground mb-2">
//                 Equipe 1 alocada para o projeto. João Silva designado como
//                 gestor.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500">
//                   Recursos
//                 </span>
//                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
//                   Atribuição
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex flex-col items-center">
//               <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
//               <div className="w-px h-full bg-muted-foreground/20"></div>
//             </div>
//             <div className="flex-1 pb-6">
//               <div className="flex items-center justify-between mb-1">
//                 <h4 className="font-medium">Revisão de Progresso</h4>
//                 <div className="flex gap-2">
//                   <span className="text-sm text-muted-foreground">
//                     21/10/2023, 09:00
//                   </span>
//                   <button className="text-muted-foreground hover:text-primary">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-more-vertical w-4 h-4"
//                     >
//                       <circle cx="12" cy="12" r="1" />
//                       <circle cx="12" cy="5" r="1" />
//                       <circle cx="12" cy="19" r="1" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               <p className="text-muted-foreground mb-2">
//                 Reunião de acompanhamento identificou atraso na integração com
//                 CRM. Ação corretiva implementada.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-500">
//                   Reunião
//                 </span>
//                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-500">
//                   Risco
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Área de Ações Rápidas */}
//       <div className="bg-card rounded-lg border border-muted-foreground/10 p-6">
//         <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-zap"
//           >
//             <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
//           </svg>
//           Ações Rápidas
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           <button className="flex flex-col items-center justify-center bg-muted hover:bg-muted/80 transition-colors p-4 rounded-lg">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-mail w-6 h-6 mb-2"
//             >
//               <rect width="20" height="16" x="2" y="4" rx="2" />
//               <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//             </svg>
//             <span>Enviar Lembrete</span>
//           </button>

//           <button className="flex flex-col items-center justify-center bg-muted hover:bg-muted/80 transition-colors p-4 rounded-lg">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-calendar-clock w-6 h-6 mb-2"
//             >
//               <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
//               <path d="M16 2v4" />
//               <path d="M8 2v4" />
//               <path d="M3 10h5" />
//               <path d="M17.5 17.5 16 16.3V14" />
//               <circle cx="16" cy="16" r="6" />
//             </svg>
//             <span>Agendar Reunião</span>
//           </button>

//           <button className="flex flex-col items-center justify-center bg-muted hover:bg-muted/80 transition-colors p-4 rounded-lg">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-file-edit w-6 h-6 mb-2"
//             >
//               <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
//               <polyline points="14 2 14 8 20 8" />
//               <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
//             </svg>
//             <span>Editar Demanda</span>
//           </button>

//           <button className="flex flex-col items-center justify-center bg-muted hover:bg-muted/80 transition-colors p-4 rounded-lg">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-flag w-6 h-6 mb-2"
//             >
//               <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//               <line x1="4" x2="4" y1="22" y2="15" />
//             </svg>
//             <span>Reportar Problema</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
