'use client';

import { redirect } from 'next/navigation';

// import UIDemandDetail from '@/components/ui/demand-detail';
// import { sdk } from 'fire-sdk/client';

// function DemandDetail() {
//   return <UIDemandDetail />;
// }

export default function DemandDetail() {
  redirect('/');
}

// export default sdk.withAuth(DemandDetail, {
// requiredRoles: ['admin'],
// });
