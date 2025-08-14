import { PropsNavbar } from '@/components/appbar';
import { HeaderPageProps } from '@/components/header-page';
import { DemandSchema } from '@/lib/rules';
import { Dispatch, SetStateAction } from 'react';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import z from 'zod';

export type IContext = {
  session: null | DecodedIdToken;
  loading: boolean;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

type IBaseData = {
  id: string;
  createdBy: string;
  createdEmail: string;
  updatedAt: Date;
  createdAt: Date;
};

export type PropsForm<T extends FieldValues> = {
  form: UseFormReturn<T, any, T>;
  handleSubmit: SubmitHandler<T>;
  loading: boolean;
};

export type IUseSession = {
  session: DecodedIdToken | null;
  loading: boolean;
};

export type IStatus =
  | 'pending'
  | 'confirmed'
  | 'inProgress'
  | 'finished'
  | 'canceled'
  | 'awaitPayment'
  | 'standBy';

export type ICollections = 'demands';

// #BASED SCHEMAS

export type IDemand = IBaseData &
  z.infer<typeof DemandSchema> & {
    status: IStatus;
  };

export type IFormDemand = Omit<
  IDemand,
  'createdBy' | 'updatedAt' | 'createdAt' | 'id' | 'status'
>;

// #COMPS

export type PropsHeaderPage = {
  title: string;
  subtitle?: string;
};

export type PropsHero = {
  navbar: PropsNavbar;
};

export type PropsDashboard = {
  navbar: PropsNavbar;
  header: HeaderPageProps;
  demands: IDemand[];
  goToDetail: (id: string) => void;
};

export type DecodedIdToken = {
  aud: string;
  auth_time: number;
  email?: string;
  email_verified?: boolean;
  exp: number;
  firebase: {
    identities: {
      [key: string]: any;
    };
    sign_in_provider: string;
    sign_in_second_factor?: string;
    second_factor_identifier?: string;
    tenant?: string;
    [key: string]: any;
  };
  iat: number;
  iss: string;
  phone_number?: string;
  picture?: string;
  sub: string;
  uid: string;
  [key: string]: any;
};
