// 'use client';

// import {
//   JSXElementConstructor,
//   Key,
//   ReactElement,
//   ReactNode,
//   ReactPortal,
//   useState,
// } from 'react';
// import { useRouter } from 'next/navigation';
// // import { Demand, BudgetItem, Update } from '@/types';

// export default function DemandDetailPage({
//   isAdmin = false,
// }: {
//   isAdmin?: boolean;
// }) {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState<'details' | 'budget' | 'updates'>(
//     'details',
//   );
//   const [demand, setDemand] = useState<any>({
//     id: '78912',
//     title: 'Chatbot para atendimento ao cliente',
//     description:
//       'Desenvolvimento de chatbot integrado ao WhatsApp para atendimento automático de clientes com respostas inteligentes.',
//     status: 'in_progress',
//     priority: 'high',
//     client: 'TecnoDigital Inc.',
//     createdAt: new Date('2023-10-15'),
//     deadline: new Date('2023-11-20'),
//     budget: 4750,
//     budgetItems: [
//       {
//         id: '1',
//         description: 'Desenvolvimento do fluxo de conversação',
//         hours: 20,
//         rate: 150,
//         total: 3000,
//       },
//       {
//         id: '2',
//         description: 'Integração com WhatsApp Business API',
//         hours: 8,
//         rate: 150,
//         total: 1200,
//       },
//       {
//         id: '3',
//         description: 'Configuração de respostas automáticas',
//         hours: 3,
//         rate: 150,
//         total: 450,
//       },
//       {
//         id: '4',
//         description: 'Taxa de implantação',
//         hours: 0,
//         rate: 0,
//         total: 100,
//       },
//     ],
//     updates: [
//       {
//         id: '1',
//         type: 'status',
//         message: 'Demanda criada e em análise',
//         author: 'Sistema',
//         createdAt: new Date('2023-10-15T10:00:00'),
//       },
//       {
//         id: '2',
//         type: 'budget',
//         message: 'Orçamento enviado para aprovação',
//         author: 'Carlos Silva (Admin)',
//         createdAt: new Date('2023-10-16T14:30:00'),
//       },
//       {
//         id: '3',
//         type: 'comment',
//         message: 'Precisamos adicionar integração com o CRM do cliente',
//         author: 'Ana Oliveira (Cliente)',
//         createdAt: new Date('2023-10-17T09:15:00'),
//       },
//     ],
//   });

//   const [newBudgetItem, setNewBudgetItem] = useState<Omit<any, 'id' | 'total'>>(
//     {
//       description: '',
//       hours: 0,
//       rate: 150,
//     },
//   );

//   const [newUpdate, setNewUpdate] = useState('');

//   const addBudgetItem = () => {
//     if (newBudgetItem.description && newBudgetItem.hours > 0) {
//       const total = newBudgetItem.hours * newBudgetItem.rate;
//       const newItem = {
//         id: Math.random().toString(36).substring(7),
//         ...newBudgetItem,
//         total,
//       };

//       setDemand((prev: { budgetItems: any; budget: number }) => ({
//         ...prev,
//         budgetItems: [...prev.budgetItems, newItem],
//         budget: prev.budget + total,
//       }));

//       setNewBudgetItem({ description: '', hours: 0, rate: 150 });
//     }
//   };

//   const sendUpdate = () => {
//     if (newUpdate.trim()) {
//       const update: any = {
//         id: Math.random().toString(36).substring(7),
//         type: 'comment',
//         message: newUpdate,
//         author: isAdmin ? 'Você (Admin)' : 'Você (Cliente)',
//         createdAt: new Date(),
//       };

//       setDemand((prev: { updates: any }) => ({
//         ...prev,
//         updates: [update, ...prev.updates],
//       }));

//       setNewUpdate('');
//     }
//   };

//   const updateStatus = (status: any['status']) => {
//     setDemand((prev: { updates: any }) => ({
//       ...prev,
//       status,
//       updates: [
//         {
//           id: Math.random().toString(36).substring(7),
//           type: 'status',
//           message: `Status alterado para ${
//             status === 'in_progress'
//               ? 'Em andamento'
//               : status === 'completed'
//                 ? 'Concluído'
//                 : 'Pendente'
//           }`,
//           author: 'Sistema',
//           createdAt: new Date(),
//         },
//         ...prev.updates,
//       ],
//     }));
//   };

//   return (
//     <div className="bg-background text-foreground min-h-screen">
//       {/* AppBar */}
//       <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-muted-foreground/10">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <button
//             onClick={() => router.back()}
//             className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
//           >
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
//             >
//               <path d="m15 18-6-6 6-6" />
//             </svg>
//             Voltar
//           </button>
//           <h1 className="text-xl font-bold">Detalhe da Demanda</h1>
//           <div className="w-8"></div> {/* Espaçador */}
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-8">
//         {/* Cabeçalho */}
//         <div className="bg-card rounded-xl border border-muted-foreground/10 p-6 mb-6">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
//             <div>
//               <h2 className="text-2xl font-bold">{demand.title}</h2>
//               <div className="flex items-center gap-3 mt-2">
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     demand.status === 'completed'
//                       ? 'bg-green-500/10 text-green-500'
//                       : demand.status === 'in_progress'
//                         ? 'bg-blue-500/10 text-blue-500'
//                         : 'bg-yellow-500/10 text-yellow-500'
//                   }`}
//                 >
//                   {demand.status === 'completed'
//                     ? 'Concluído'
//                     : demand.status === 'in_progress'
//                       ? 'Em andamento'
//                       : 'Pendente'}
//                 </span>
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     demand.priority === 'high'
//                       ? 'bg-red-500/10 text-red-500'
//                       : demand.priority === 'medium'
//                         ? 'bg-yellow-500/10 text-yellow-500'
//                         : 'bg-green-500/10 text-green-500'
//                   }`}
//                 >
//                   Prioridade{' '}
//                   {demand.priority === 'high'
//                     ? 'Alta'
//                     : demand.priority === 'medium'
//                       ? 'Média'
//                       : 'Baixa'}
//                 </span>
//               </div>
//             </div>

//             {isAdmin && (
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => updateStatus('pending')}
//                   className={`px-4 py-2 rounded-lg text-sm ${demand.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-muted hover:bg-muted/60'}`}
//                 >
//                   Pendente
//                 </button>
//                 <button
//                   onClick={() => updateStatus('in_progress')}
//                   className={`px-4 py-2 rounded-lg text-sm ${demand.status === 'in_progress' ? 'bg-blue-500/20 text-blue-500' : 'bg-muted hover:bg-muted/60'}`}
//                 >
//                   Em andamento
//                 </button>
//                 <button
//                   onClick={() => updateStatus('completed')}
//                   className={`px-4 py-2 rounded-lg text-sm ${demand.status === 'completed' ? 'bg-green-500/20 text-green-500' : 'bg-muted hover:bg-muted/60'}`}
//                 >
//                   Concluir
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//             <div className="bg-muted/30 rounded-lg p-4">
//               <p className="text-sm text-muted-foreground">Cliente</p>
//               <p className="font-medium">{demand.client}</p>
//             </div>
//             <div className="bg-muted/30 rounded-lg p-4">
//               <p className="text-sm text-muted-foreground">Data de criação</p>
//               <p className="font-medium">
//                 {demand.createdAt.toLocaleDateString('pt-BR')}
//               </p>
//             </div>
//             <div className="bg-muted/30 rounded-lg p-4">
//               <p className="text-sm text-muted-foreground">Prazo final</p>
//               <p className="font-medium">
//                 {demand.deadline.toLocaleDateString('pt-BR')}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Abas */}
//         <div className="border-b border-muted-foreground/10 mb-6">
//           <nav className="flex space-x-8">
//             <button
//               onClick={() => setActiveTab('details')}
//               className={`py-4 px-1 font-medium text-sm ${activeTab === 'details' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
//             >
//               Detalhes
//             </button>
//             <button
//               onClick={() => setActiveTab('budget')}
//               className={`py-4 px-1 font-medium text-sm ${activeTab === 'budget' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
//             >
//               Orçamento
//             </button>
//             <button
//               onClick={() => setActiveTab('updates')}
//               className={`py-4 px-1 font-medium text-sm ${activeTab === 'updates' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
//             >
//               Atualizações
//             </button>
//           </nav>
//         </div>

//         {/* Conteúdo das Abas */}
//         {activeTab === 'details' && (
//           <div className="bg-card rounded-xl border border-muted-foreground/10 p-6 mb-6">
//             <h3 className="text-lg font-semibold mb-4">Descrição da Demanda</h3>
//             <p className="whitespace-pre-line text-muted-foreground">
//               {demand.description}
//             </p>

//             <div className="mt-8">
//               <h3 className="text-lg font-semibold mb-4">Anexos</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 <div className="border border-muted-foreground/20 rounded-lg p-4 hover:border-primary/30 transition-colors cursor-pointer">
//                   <div className="flex items-center gap-3">
//                     <div className="bg-primary/10 text-primary p-2 rounded-lg">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
//                         <polyline points="14 2 14 8 20 8" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-medium text-sm">
//                         Documento de requisitos
//                       </p>
//                       <p className="text-xs text-muted-foreground">
//                         PDF • 2.4 MB
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'budget' && (
//           <div className="bg-card rounded-xl border border-muted-foreground/10 p-6 mb-6">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-semibold">Orçamento</h3>
//               <p className="text-xl font-bold">
//                 R${' '}
//                 {demand.budget.toLocaleString('pt-BR', {
//                   minimumFractionDigits: 2,
//                 })}
//               </p>
//             </div>

//             <div className="overflow-x-auto mb-8">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-muted-foreground/10 text-left">
//                     <th className="pb-3 font-medium text-sm">Item</th>
//                     <th className="pb-3 font-medium text-sm">Horas</th>
//                     <th className="pb-3 font-medium text-sm">Valor/Hora</th>
//                     <th className="pb-3 font-medium text-sm text-right">
//                       Total
//                     </th>
//                     {isAdmin && <th className="pb-3 font-medium text-sm"></th>}
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-muted-foreground/10">
//                   {demand.budgetItems.map(
//                     (item: {
//                       id: Key | null | undefined;
//                       description:
//                         | string
//                         | number
//                         | bigint
//                         | boolean
//                         | ReactElement<
//                             unknown,
//                             string | JSXElementConstructor<any>
//                           >
//                         | Iterable<ReactNode>
//                         | ReactPortal
//                         | Promise<
//                             | string
//                             | number
//                             | bigint
//                             | boolean
//                             | ReactPortal
//                             | ReactElement<
//                                 unknown,
//                                 string | JSXElementConstructor<any>
//                               >
//                             | Iterable<ReactNode>
//                             | null
//                             | undefined
//                           >
//                         | null
//                         | undefined;
//                       hours:
//                         | string
//                         | number
//                         | bigint
//                         | boolean
//                         | ReactElement<
//                             unknown,
//                             string | JSXElementConstructor<any>
//                           >
//                         | Iterable<ReactNode>
//                         | ReactPortal
//                         | Promise<
//                             | string
//                             | number
//                             | bigint
//                             | boolean
//                             | ReactPortal
//                             | ReactElement<
//                                 unknown,
//                                 string | JSXElementConstructor<any>
//                               >
//                             | Iterable<ReactNode>
//                             | null
//                             | undefined
//                           >
//                         | null
//                         | undefined;
//                       rate: {
//                         toLocaleString: (
//                           arg0: string,
//                         ) =>
//                           | string
//                           | number
//                           | bigint
//                           | boolean
//                           | ReactElement<
//                               unknown,
//                               string | JSXElementConstructor<any>
//                             >
//                           | Iterable<ReactNode>
//                           | ReactPortal
//                           | Promise<
//                               | string
//                               | number
//                               | bigint
//                               | boolean
//                               | ReactPortal
//                               | ReactElement<
//                                   unknown,
//                                   string | JSXElementConstructor<any>
//                                 >
//                               | Iterable<ReactNode>
//                               | null
//                               | undefined
//                             >
//                           | null
//                           | undefined;
//                       };
//                       total: {
//                         toLocaleString: (
//                           arg0: string,
//                         ) =>
//                           | string
//                           | number
//                           | bigint
//                           | boolean
//                           | ReactElement<
//                               unknown,
//                               string | JSXElementConstructor<any>
//                             >
//                           | Iterable<ReactNode>
//                           | ReactPortal
//                           | Promise<
//                               | string
//                               | number
//                               | bigint
//                               | boolean
//                               | ReactPortal
//                               | ReactElement<
//                                   unknown,
//                                   string | JSXElementConstructor<any>
//                                 >
//                               | Iterable<ReactNode>
//                               | null
//                               | undefined
//                             >
//                           | null
//                           | undefined;
//                       };
//                     }) => (
//                       <tr
//                         key={item.id}
//                         className="hover:bg-muted/20 transition-colors"
//                       >
//                         <td className="py-4">
//                           <p className="font-medium">{item.description}</p>
//                         </td>
//                         <td className="py-4">{item.hours}</td>
//                         <td className="py-4">
//                           R$ {item.rate.toLocaleString('pt-BR')}
//                         </td>
//                         <td className="py-4 text-right font-medium">
//                           R$ {item.total.toLocaleString('pt-BR')}
//                         </td>
//                         {isAdmin && (
//                           <td className="py-4 text-right">
//                             <button className="text-red-500 hover:text-red-400 transition-colors">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               >
//                                 <path d="M3 6h18" />
//                                 <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//                                 <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//                               </svg>
//                             </button>
//                           </td>
//                         )}
//                       </tr>
//                     ),
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {isAdmin && (
//               <div className="bg-muted/30 rounded-xl p-6">
//                 <h4 className="font-medium mb-4">
//                   Adicionar item ao orçamento
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//                   <div className="md:col-span-6">
//                     <input
//                       type="text"
//                       placeholder="Descrição do item"
//                       className="w-full px-4 py-2 rounded-lg bg-background border border-muted-foreground/20"
//                       value={newBudgetItem.description}
//                       onChange={(e) =>
//                         setNewBudgetItem({
//                           ...newBudgetItem,
//                           description: e.target.value,
//                         })
//                       }
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <input
//                       type="number"
//                       placeholder="Horas"
//                       className="w-full px-4 py-2 rounded-lg bg-background border border-muted-foreground/20"
//                       value={newBudgetItem.hours || ''}
//                       onChange={(e) =>
//                         setNewBudgetItem({
//                           ...newBudgetItem,
//                           hours: parseInt(e.target.value) || 0,
//                         })
//                       }
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <input
//                       type="number"
//                       placeholder="Valor/hora"
//                       className="w-full px-4 py-2 rounded-lg bg-background border border-muted-foreground/20"
//                       value={newBudgetItem.rate || ''}
//                       onChange={(e) =>
//                         setNewBudgetItem({
//                           ...newBudgetItem,
//                           rate: parseInt(e.target.value) || 0,
//                         })
//                       }
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <button
//                       onClick={addBudgetItem}
//                       className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
//                     >
//                       Adicionar
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === 'updates' && (
//           <div className="bg-card rounded-xl border border-muted-foreground/10 p-6 mb-6">
//             <h3 className="text-lg font-semibold mb-6">
//               Histórico de Atualizações
//             </h3>

//             <div className="space-y-6">
//               {demand.updates.map(
//                 (update: {
//                   id: Key | null | undefined;
//                   type: string;
//                   author:
//                     | string
//                     | number
//                     | bigint
//                     | boolean
//                     | ReactElement<unknown, string | JSXElementConstructor<any>>
//                     | Iterable<ReactNode>
//                     | ReactPortal
//                     | Promise<
//                         | string
//                         | number
//                         | bigint
//                         | boolean
//                         | ReactPortal
//                         | ReactElement<
//                             unknown,
//                             string | JSXElementConstructor<any>
//                           >
//                         | Iterable<ReactNode>
//                         | null
//                         | undefined
//                       >
//                     | null
//                     | undefined;
//                   createdAt: string | number | Date;
//                   message:
//                     | string
//                     | number
//                     | bigint
//                     | boolean
//                     | ReactElement<unknown, string | JSXElementConstructor<any>>
//                     | Iterable<ReactNode>
//                     | ReactPortal
//                     | Promise<
//                         | string
//                         | number
//                         | bigint
//                         | boolean
//                         | ReactPortal
//                         | ReactElement<
//                             unknown,
//                             string | JSXElementConstructor<any>
//                           >
//                         | Iterable<ReactNode>
//                         | null
//                         | undefined
//                       >
//                     | null
//                     | undefined;
//                 }) => (
//                   <div key={update.id} className="flex gap-4">
//                     <div className="flex flex-col items-center">
//                       <div
//                         className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                           update.type === 'status'
//                             ? 'bg-blue-500/10 text-blue-500'
//                             : update.type === 'budget'
//                               ? 'bg-green-500/10 text-green-500'
//                               : 'bg-purple-500/10 text-purple-500'
//                         }`}
//                       >
//                         {update.type === 'status' ? (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="16"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                             <polyline points="22 4 12 14.01 9 11.01" />
//                           </svg>
//                         ) : update.type === 'budget' ? (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="16"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <line x1="12" x2="12" y1="2" y2="22" />
//                             <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//                           </svg>
//                         ) : (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="16"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//                           </svg>
//                         )}
//                       </div>
//                       {update !== demand.updates[demand.updates.length - 1] && (
//                         <div className="w-px h-full bg-muted-foreground/20"></div>
//                       )}
//                     </div>
//                     <div className="flex-1 pb-6">
//                       <div className="flex justify-between items-start mb-1">
//                         <h4 className="font-medium">{update.author}</h4>
//                         <span className="text-sm text-muted-foreground">
//                           {new Date(update.createdAt).toLocaleDateString(
//                             'pt-BR',
//                             {
//                               day: '2-digit',
//                               month: '2-digit',
//                               year: 'numeric',
//                               hour: '2-digit',
//                               minute: '2-digit',
//                             },
//                           )}
//                         </span>
//                       </div>
//                       <p className="text-muted-foreground whitespace-pre-line">
//                         {update.message}
//                       </p>
//                     </div>
//                   </div>
//                 ),
//               )}
//             </div>

//             <div className="mt-8 border-t border-muted-foreground/10 pt-6">
//               <h4 className="font-medium mb-4">Adicionar atualização</h4>
//               <div className="flex gap-4">
//                 <input
//                   type="text"
//                   placeholder="Digite sua mensagem..."
//                   className="flex-1 px-4 py-2 rounded-lg bg-background border border-muted-foreground/20"
//                   value={newUpdate}
//                   onChange={(e) => setNewUpdate(e.target.value)}
//                 />
//                 <button
//                   onClick={sendUpdate}
//                   className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
//                 >
//                   Enviar
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Ações */}
//         <div className="flex justify-end gap-4">
//           {isAdmin ? (
//             <>
//               <button className="px-6 py-3 rounded-lg border border-muted-foreground/20 hover:bg-muted/40 transition-colors">
//                 Exportar PDF
//               </button>
//               <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
//                 Enviar para cliente
//               </button>
//             </>
//           ) : (
//             <>
//               <button className="px-6 py-3 rounded-lg border border-muted-foreground/20 hover:bg-muted/40 transition-colors">
//                 Solicitar alteração
//               </button>
//               <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
//                 Aprovar orçamento
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
