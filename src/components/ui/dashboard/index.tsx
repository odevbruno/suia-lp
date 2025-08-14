// 'use client';

// import { PropsDashboard } from '@/interfaces';
// import Navbar from '../../appbar';
// import moment from 'moment';
// import HeaderPage from '../../header-page';
// import Page from '@/components/page';
// import Box from '@/components/box';
// import { CardDemand } from '@/components/card';

// export default function UIDashboard(props: PropsDashboard) {
//   return (
//     <>
//       <Navbar {...props.navbar} />
//       <Page>
//         <HeaderPage {...props.header} />
//         <Box variant="grid">
//           {props?.demands
//             ?.map((d) => ({
//               id: d?.id,
//               status: d?.status,
//               subtitle: d?.demand,
//               creator: d?.createdEmail,
//               title: d?.demand?.split(',')[0],
//               date: moment(d?.createdAt).format('DD/MM/YYYY'),
//             }))
//             ?.map((d, idx) => (
//               <CardDemand
//                 key={idx}
//                 onClick={() => {
//                   props?.goToDetail(d?.id);
//                 }}
//                 header={{ ...d }}
//               />
//             ))}
//         </Box>
//       </Page>
//     </>
//   );
// }
