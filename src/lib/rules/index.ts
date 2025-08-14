// lib/rules/index.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IDemand } from '@/interfaces';
import { type Rules } from 'fire-sdk/client';
import z from 'zod';

export const collections = {
  demands: 'demands',
};

export const DemandSchema = z
  .object({
    companyName: z.string().min(5, 'Nome da empresa é obrigatório.'),
    whatsapp: z.string().max(15).min(15, 'Whatsapp é obrigatório.'),
    demand: z.string().min(10, 'A demanda é um campo obrigatório.'),
  })
  .strict();

export const consumerRules: Rules = {
  // Escreva as regras de negócios das API's aqui !
  collections: {
    [collections.demands]: {
      schemaCreate: DemandSchema,
      schemaUpdate: DemandSchema,
      create: async (data: IDemand, session) => {
        data.status = 'pending';
        data.createdEmail = session?.email!;
        return data;
      },
    },
  },
};
