import { useCard } from './card';

export const CardActions = ({ children }: { children: React.ReactNode }) => {
  const { variant } = useCard();

  if (variant !== 'detail') return null;

  return <div className="flex gap-3">{children}</div>;
};
