// 'use client';

// // import { Card } from '../../card';

// export default function UIDemandDetail() {
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
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="lucide lucide-chevron-left w-4 h-4 mr-1"
//           >
//             <path d="m15 18-6-6 6-6" />
//           </svg>
//           Voltar para todas as demandas
//         </a>
//       </div>

//       {/* <Card
//         variant="demand-detail"
//         onClick={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//         title={'Chatbot para atendimento ao cliente'}
//         subtitle={
//           'Preciso de um chatbot para responder perguntas frequentes no  WhatsApp.'
//         }
//         status={'pending'}
//         datetime={'15/10/2023, 14:30'}
//         content={{
//           title: 'Descrição da demanda',
//           subtitle: `Preciso de um chatbot para responder perguntas frequentes no WhatsApp. Principais funcionalidades necessárias: - Responder perguntas sobre horário de funcionamento - Informar formas de pagamento - Encaminhar para atendente humano quando necessário - Coletar informações básicas do cliente - Integração com nosso sistema de CRM existente`,
//         }}
//         footer={{
//           priority: 'high',
//           deadline: '25/10/2023',
//           responsible: 'Equipe 1',
//         }}
//       /> */}

//       <div className="bg-card rounded-lg border border-muted-foreground/10 p-6 mb-8">
//         <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="lucide lucide-circle-dollar-sign"
//           >
//             <circle cx="12" cy="12" r="10" />
//             <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
//             <path d="M12 18V6" />
//           </svg>
//           Orçamento e Pagamento
//         </h2>

//         <div className="bg-muted rounded-lg p-6 mb-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//             <div>
//               <h3 className="text-lg font-semibold mb-1">Proposta Comercial</h3>
//               <p className="text-muted-foreground">
//                 Versão 1.0 - Aprovado em 18/10/2023
//               </p>
//             </div>
//             <div className="text-right">
//               <p className="text-muted-foreground text-sm">Valor Total</p>
//               <p className="text-2xl font-bold">R$ 4.750,00</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <h4 className="text-sm font-medium text-muted-foreground mb-1">
//                 Forma de Pagamento
//               </h4>
//               <p>50% à aprovação • 50% na entrega</p>
//             </div>
//             <div>
//               <h4 className="text-sm font-medium text-muted-foreground mb-1">
//                 Prazo de Desenvolvimento
//               </h4>
//               <p>10 dias úteis</p>
//             </div>
//             <div>
//               <h4 className="text-sm font-medium text-muted-foreground mb-1">
//                 Validade da Proposta
//               </h4>
//               <p>30 dias</p>
//             </div>
//           </div>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-lg font-semibold mb-4">
//             Detalhamento dos Serviços
//           </h3>

//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-muted-foreground/10">
//                   <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
//                     Item
//                   </th>
//                   <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
//                     Horas
//                   </th>
//                   <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
//                     Valor Unitário
//                   </th>
//                   <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
//                     Total
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b border-muted-foreground/10">
//                   <td className="py-3 px-4">
//                     <p className="font-medium">
//                       Desenvolvimento do fluxo de conversação
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       Criação dos diálogos e respostas automáticas
//                     </p>
//                   </td>
//                   <td className="py-3 px-4 text-right">20h</td>
//                   <td className="py-3 px-4 text-right">R$ 150,00</td>
//                   <td className="py-3 px-4 text-right font-medium">
//                     R$ 3.000,00
//                   </td>
//                 </tr>
//                 <tr className="border-b border-muted-foreground/10">
//                   <td className="py-3 px-4">
//                     <p className="font-medium">
//                       Integração com WhatsApp Business
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       Configuração da API oficial
//                     </p>
//                   </td>
//                   <td className="py-3 px-4 text-right">8h</td>
//                   <td className="py-3 px-4 text-right">R$ 150,00</td>
//                   <td className="py-3 px-4 text-right font-medium">
//                     R$ 1.200,00
//                   </td>
//                 </tr>
//                 <tr className="border-b border-muted-foreground/10">
//                   <td className="py-3 px-4">
//                     <p className="font-medium">Integração com CRM</p>
//                     <p className="text-sm text-muted-foreground">
//                       Sincronização de dados de clientes
//                     </p>
//                   </td>
//                   <td className="py-3 px-4 text-right">3h</td>
//                   <td className="py-3 px-4 text-right">R$ 150,00</td>
//                   <td className="py-3 px-4 text-right font-medium">
//                     R$ 450,00
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="py-3 px-4 text-right" colSpan={3}>
//                     Subtotal
//                   </td>
//                   <td className="py-3 px-4 text-right font-medium">
//                     R$ 4.650,00
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="py-3 px-4 text-right" colSpan={3}>
//                     Taxa de implantação
//                   </td>
//                   <td className="py-3 px-4 text-right font-medium">
//                     R$ 100,00
//                   </td>
//                 </tr>
//                 <tr className="border-t border-muted-foreground/20">
//                   <td className="py-3 px-4 text-right font-bold" colSpan={3}>
//                     Total
//                   </td>
//                   <td className="py-3 px-4 text-right font-bold text-lg">
//                     R$ 4.750,00
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-lg font-semibold mb-4">Status de Pagamento</h3>

//           <div className="flex flex-col sm:flex-row gap-6">
//             <div className="flex-1 bg-muted rounded-lg p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h4 className="font-medium">Pagamento Inicial</h4>
//                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
//                   Pago
//                 </span>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">Valor:</span>
//                   <span className="font-medium">R$ 2.375,00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">
//                     Data de Vencimento:
//                   </span>
//                   <span>18/10/2023</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">
//                     Data de Pagamento:
//                   </span>
//                   <span>18/10/2023</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">Método:</span>
//                   <span>Transferência Bancária</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex-1 bg-muted rounded-lg p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h4 className="font-medium">Pagamento Final</h4>
//                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500">
//                   Pendente
//                 </span>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">Valor:</span>
//                   <span className="font-medium">R$ 2.375,00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">
//                     Data de Vencimento:
//                   </span>
//                   <span>25/10/2023</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">Status:</span>
//                   <span>Aguardando conclusão</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-card rounded-lg border border-muted-foreground/10 p-6">
//         <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="lucide lucide-history"
//           >
//             <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
//             <path d="M3 3v5h5" />
//             <path d="M12 7v5l4 2" />
//           </svg>
//           Acompanhamento
//         </h2>

//         <div className="space-y-6">
//           <div className="flex gap-4">
//             <div className="flex flex-col items-center">
//               <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
//               <div className="w-px h-full bg-muted-foreground/20 timeline-connector"></div>
//             </div>
//             <div className="flex-1 pb-6">
//               <div className="flex items-center justify-between mb-1">
//                 <h4 className="font-medium">Orçamento aprovado</h4>
//                 <span className="text-sm text-muted-foreground">
//                   18/10/2023, 10:15
//                 </span>
//               </div>
//               <p className="text-muted-foreground whitespace-pre-line">
//                 Cliente aprovou o orçamento e efetuou o pagamento inicial.
//               </p>
//               <a
//                 href="#"
//                 className="inline-flex items-center mt-2 text-sm text-primary hover:underline"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   className="lucide lucide-file-text w-4 h-4 mr-2"
//                 >
//                   <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
//                   <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//                   <path d="M10 9H8" />
//                   <path d="M16 13H8" />
//                   <path d="M16 17H8" />
//                 </svg>
//                 comprovante_pagamento.pdf
//               </a>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex flex-col items-center">
//               <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
//               <div className="w-px h-full bg-muted-foreground/20 timeline-connector"></div>
//             </div>
//             <div className="flex-1 pb-6">
//               <div className="flex items-center justify-between mb-1">
//                 <h4 className="font-medium">Desenvolvimento iniciado</h4>
//                 <span className="text-sm text-muted-foreground">
//                   19/10/2023, 09:30
//                 </span>
//               </div>
//               <p className="text-muted-foreground whitespace-pre-line">
//                 Iniciamos o desenvolvimento do fluxo principal de conversação.
//                 Primeira versão para revisão em 2 dias.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex flex-col items-center">
//               <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
//               <div className="w-px h-full bg-muted-foreground/20"></div>
//             </div>
//             <div className="flex-1 pb-6">
//               <div className="flex items-center justify-between mb-1">
//                 <h4 className="font-medium">Revisão do cliente</h4>
//                 <span className="text-sm text-muted-foreground">
//                   21/10/2023, 14:00
//                 </span>
//               </div>
//               <p className="text-muted-foreground whitespace-pre-line">
//                 Enviamos a primeira versão do fluxo para revisão. Aguardando
//                 feedback do cliente para prosseguir com ajustes.
//               </p>
//               <a
//                 href="#"
//                 className="inline-flex items-center mt-2 text-sm text-primary hover:underline"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   className="lucide lucide-file-text w-4 h-4 mr-2"
//                 >
//                   <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
//                   <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//                   <path d="M10 9H8" />
//                   <path d="M16 13H8" />
//                   <path d="M16 17H8" />
//                 </svg>
//                 fluxo_conversacao_v1.pdf
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
