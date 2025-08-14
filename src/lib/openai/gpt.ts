import OpenAI from 'openai';

let openai: OpenAI;

if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  });
}

const promptString = (demand: string) => `
Você é um analista de negócios sênior de uma empresa de tecnologia.

Recebeu a seguinte demanda de um cliente:

Descrição: "${demand}"

Com base nessa descrição, responda em formato JSON com as seguintes chaves:

{
  "summary": "Resumo técnico objetivo que pode ser usado diretamente em uma proposta.",
  "techStack": ["Tecnologia 1", "Tecnologia 2", ...],
  "estimatedEffort": "Ex: 2 semanas",
  "estimatedCost": "Ex: R$ 4.000,00",
  "complexityLevel": "Baixa | Média | Alta",
  "priority": "Baixa | Média | Alta",
  "tags": ["automação", "whatsapp", "chatbot", ...],
  "steps": [
    "Passo 1: ...",
    "Passo 2: ...",
    "Passo 3: ...",
    ...
  ],
  "infrastructureCosts": {
    "deploy": "Ex: R$ 500 (configuração inicial e ambiente)",
    "hosting": "Ex: R$ 120/mês (servidor, domínio, certificados)",
    "database": "Ex: R$ 50/mês (MongoDB Atlas, PlanetScale etc)",
    "maintenance": "Ex: R$ 300/mês (atualizações e suporte)",
    "other": "Ex: R$ 100/mês (logs, backups, monitoramento)"
  }
}

Regras:
- Seja realista nos valores para pequenos/médios negócios.
- Prefira soluções acessíveis e escaláveis como Vercel, Railway, Supabase, PlanetScale, Render ou Firebase.
- Seja detalhado e técnico, mas mantenha o texto acessível para fins comerciais.
`;

export const generateInsight = async (demand: string) => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Você é um analista de negócios.' },
      { role: 'user', content: promptString(demand) },
    ],
    temperature: 0.4,
  });
  return completion.choices[0].message.content;
};
