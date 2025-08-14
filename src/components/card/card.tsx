import { createContext, useContext } from 'react';

type CardContextType = {
  variant: 'resume' | 'detail';
};

export type CardProps = {
  variant?: 'resume' | 'detail';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const CardContext = createContext<CardContextType>({ variant: 'resume' });

export const Card = ({
  variant = 'resume',
  children,
  className = '',
  onClick,
}: CardProps) => {
  return (
    <CardContext.Provider value={{ variant }}>
      <div
        onClick={onClick}
        className={`
          bg-card rounded-lg border border-muted-foreground/10 p-6
          hover:border-primary/30 transition-colors
          ${onClick ? 'cursor-pointer' : ''}
          ${className}
        `}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
