// 'use client';

import { redirect } from 'next/navigation';

// // import UIDashboard from '@/components/ui/dashboard';
// import { useActions } from '@/hooks/useActions';
// import { useDemand } from '@/hooks/useDemand';
// import { IUseSession } from '@/interfaces';
// // import { sdk } from 'fire-sdk/client';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// function Dashboard({ session }: { session: IUseSession['session'] }) {
//   const history = useRouter();
//   const { handleLogout, handleLogin } = useActions();
//   // const { fetchDemands, demands } = useDemand();
//   // console.log({ session, demands });

//   // useEffect(() => {
//   //   if (!session) return;
//   //   // session.uid
//   //   if (!demands?.length) fetchDemands('FSNs5yB7bPViGD7KHsg8gTSv4Nf1');
//   //   const intervalId = setInterval(() => {
//   //     fetchDemands('FSNs5yB7bPViGD7KHsg8gTSv4Nf1');
//   //   }, 30000);
//   //   return () => clearInterval(intervalId);
//   // }, [session]);

//   const demands: any[] = [
//     {
//       id: 'LhrkYOQVSNOEsIVnhw3o',
//       companyName: 'Stefanini Group',
//       whatsapp: '(92) 98202-5432',
//       demand:
//         'Preciso automatizar o processo de atendimento ao cliente via WhatsApp, incluindo respostas automáticas para perguntas frequentes e encaminhamento para atendente humano quando necessário.',
//       status: 'pending',
//       createdBy: 'FSNs5yB7bPViGD7KHsg8gTSv4Nf1',
//       createdAt: '2025-07-18T17:54:40.861Z',
//       updatedAt: '2025-07-18T17:54:40.861Z',
//     },
//     {
//       id: 'TDZHg1dmvnAGxB53dvTI',
//       companyName: 'Stefanini Group',
//       whatsapp: '(92) 98202-5432',
//       demand:
//         'Preciso automatizar o processo de atendimento ao cliente via WhatsApp, incluindo respostas automáticas para perguntas frequentes e encaminhamento para atendente humano quando necessário.',
//       status: 'pending',
//       createdBy: 'FSNs5yB7bPViGD7KHsg8gTSv4Nf1',
//       createdAt: '2025-07-18T17:55:52.078Z',
//       updatedAt: '2025-07-18T17:55:52.078Z',
//     },
//     {
//       id: 'bq1WxsShG6f3WQ5ycIst',
//       companyName: 'Stefanini Group',
//       whatsapp: '(92) 98202-5432',
//       demand:
//         'Preciso automatizar o processo de atendimento ao cliente via WhatsApp, incluindo respostas automáticas para perguntas frequentes e encaminhamento para atendente humano quando necessário.',
//       status: 'pending',
//       createdBy: 'FSNs5yB7bPViGD7KHsg8gTSv4Nf1',
//       createdAt: '2025-07-18T17:56:21.493Z',
//       updatedAt: '2025-07-18T17:56:21.493Z',
//     },
//     {
//       id: 'dCjNKW2cAF5Z83dAfXBU',
//       companyName: 'Stefanini Group',
//       whatsapp: '(92) 98202-5432',
//       demand:
//         'Preciso automatizar o processo de atendimento ao cliente via WhatsApp, incluindo respostas automáticas para perguntas frequentes e encaminhamento para atendente humano quando necessário...',
//       status: 'pending',
//       createdBy: 'FSNs5yB7bPViGD7KHsg8gTSv4Nf1',
//       createdAt: '2025-07-18T19:37:57.510Z',
//       updatedAt: '2025-07-18T19:37:57.510Z',
//     },
//   ];

//   return (
//     <UIDashboard
//       navbar={{
//         session,
//         text: 'Sair',
//         onClick: handleLogout,
//       }}
//       header={{
//         title: 'Solicitações',
//         subtitle: ' Acompanhe o status de todas as suas solicitações',
//         action: {
//           label: 'Criar Solicitação',
//           onClick: function (): void {
//             throw new Error('Function not implemented.');
//           },
//         },
//       }}
//       demands={demands}
//       goToDetail={(id) => {
//         history.push(`/demand-detail/${id}`);
//       }}
//     />
//   );
// }

// export default Dashboard;
// // export default sdk.withAuth(Dashboard);

// // <AdminDemandDetail />
// // <DemandDetailPage isAdmin />

export default function Dashboard() {
  redirect('/');
}
