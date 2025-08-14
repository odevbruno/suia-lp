import { IFormDemand } from '@/interfaces';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

interface IOptions {
  demand?: IFormDemand;
}

export const useActions = () => {
  const navigate = useRouter();
  // const { setDemand } = useDemand();
  const [_, setLoading] = useState(false);

  const handleLogin = useCallback(
    async (props: { keyError: string; options?: IOptions }) => {
      // let response;
      // setLoading?.(true);
      // try {
      //   response = await sdk.auth.signInWithGoogle('/dashboard');
      //   if (response?.success && props?.options?.demand)
      //     handleCreateDemand(props?.options?.demand);
      //   else navigate.replace(response?.redirectTo!);
      // } catch (error) {
      //   handleError(props?.keyError, error);
      //   navigate.replace(response?.redirectTo!);
      // } finally {
      //   setLoading?.(false);
      // }
    },
    [],
  );

  const handleLogout = useCallback(async (keyError?: string) => {
    setLoading?.(true);
    // try {
    //   await sdk.auth.signOut('/');
    //   navigate.replace('/');
    // } catch (error) {
    //   handleError(keyError || 'handle-logout', error);
    //   navigate.replace('/');
    // } finally {
    //   setLoading?.(false);
    // }
  }, []);

  const handleCreateDemand = useCallback(async (demand: IFormDemand) => {
    setLoading?.(true);
    try {
      // await sdk.db.create<IDemand>(collections.demands, demand);
      // navigate.replace('/dashboard');
      await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: demand.companyName,
          phone: demand.whatsapp,
          description: demand.demand,
        }),
      });
    } catch (error) {
      handleError('handle-create-demand', error);
    } finally {
      setLoading?.(false);
    }
  }, []);

  const handleError = (keyError: string, error: unknown) => {};

  return {
    handleLogin,
    handleLogout,
    handleError,
    handleCreateDemand,
    navigate,
  };
};
