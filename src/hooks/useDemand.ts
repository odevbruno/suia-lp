import { IDemand } from '@/interfaces';
// import { collections } from '@/lib/rules';
// import { sdk } from 'fire-sdk/client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const demands: IDemand[] = [];

type IUseDemand = {
  demands: IDemand[];
  setDemand: (demands: IDemand) => void;
  fetchDemands: (uid: string) => Promise<void>;
  reset: () => void;
};

export const useDemand = create<IUseDemand>()(
  persist(
    (set, get) => ({
      demands,
      setDemand: (demand) => {
        const current = get().demands;
        set({ demands: [...current, demand] });
      },
      fetchDemands: async (uid: string) => {
        // try {
        //   const demands = await sdk.db.readwhere<IDemand[]>(
        //     collections.demands,
        //     [{ field: 'createdBy', operator: '==', value: uid }],
        //   );
        //   set({ demands });
        // } catch (error) {
        //   sdk.utils.logErrorDev(error, 'error-fetch-demands');
        //   set({ demands: get().demands });
        // }
      },
      reset: () => {
        set({ demands });
      },
    }),
    {
      name: 'demands-data',
    },
  ),
);
