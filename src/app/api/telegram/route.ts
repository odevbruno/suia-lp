import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Pega os dados do body (por exemplo, a demanda)
    const { name, phone, description } = await req.json();

    // Monta a mensagem
    const message = `
Nova demanda recebida:
- Empresa: ${name}
- Whatsapp: ${phone}
- Descrição: ${description}
`;

    // Envia para o Telegram
    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error('Erro ao enviar para Telegram:', error);
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    );
  }
}
