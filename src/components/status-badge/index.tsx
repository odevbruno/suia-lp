import { IStatus } from '@/interfaces';
import clsx from 'clsx';

const statusMap: Record<IStatus, { label: string; color: string }> = {
  pending: { label: 'Pendente', color: 'text-red-500 bg-red-500/10' },
  confirmed: { label: 'Confirmado', color: 'text-green-600 bg-green-500/10' },
  inProgress: { label: 'Em progresso', color: 'text-blue-600 bg-blue-500/10' },
  finished: {
    label: 'Finalizado',
    color: 'text-emerald-600 bg-emerald-500/10',
  },
  canceled: { label: 'Cancelado', color: 'text-gray-500 bg-gray-300/10' },
  awaitPayment: {
    label: 'Aguardando Pagamento',
    color: 'text-yellow-600 bg-yellow-500/10',
  },
  standBy: { label: 'Em Espera', color: 'text-orange-600 bg-orange-500/10' },
};

export function StatusBadge({ status }: { status: IStatus }) {
  const badge = statusMap[status];
  return (
    <span
      className={clsx(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        badge.color,
      )}
    >
      {badge.label}
    </span>
  );
}
