'use client';
import Hero from '@/components/ui/hero';
import Benefits from '@/components/ui/benefits';
import Examples from '@/components/ui/examples';
import HowWorks from '@/components/ui/howWork';
import FormDemand from '@/components/ui/forms/form-demand';
import Footer from '@/components/ui/footer';
import { useActions } from '@/hooks/useActions';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { IFormDemand } from '@/interfaces';
import { DemandSchema } from '@/lib/rules';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';

const defaultValuesDemand = {
  whatsapp: '',
  companyName: '',
  demand: '',
};

export default function Home() {
  const { handleCreateDemand } = useActions();
  // const { session, loading } = sdk.auth.getSession();

  const formDemand = useForm({
    resolver: zodResolver(DemandSchema),
    defaultValues: defaultValuesDemand,
  });

  const onSubmitDemand: SubmitHandler<IFormDemand> = useCallback(
    async (demand) => {
      handleCreateDemand(demand);
      alert(
        'Sua solicitação foi enviada com sucesso, entraremos em contato com você!',
      );
      formDemand.reset();
      // if (!!session)
      // else
      //   handleLogin({
      //     keyError: 'form-demand',
      //     options: {
      //       demand,
      //     },
      //   });
    },
    [],
  );

  return (
    <div>
      <Hero />
      <HowWorks />
      <Examples />
      <Benefits />
      <FormDemand
        loading={false}
        form={formDemand as unknown as UseFormReturn<IFormDemand>}
        handleSubmit={onSubmitDemand}
      />
      <Footer />
    </div>
  );
}
