import clsx from 'clsx';
import { useCard } from './card';

export type CardContentProps = {
  content?: React.ReactNode;
};

function ResumeContent({ content }: CardContentProps) {
  return (
    <div className={clsx(`mt-4 pt-4 border-t border-muted-foreground/10`)}>
      {content}
    </div>
  );
}

function DetailContent({ content }: CardContentProps) {
  return <div className={clsx(`prose mb-8`)}>{content}</div>;
}

export const CardContent = (props: CardContentProps) => {
  const { variant } = useCard();
  if (variant === 'resume') return <ResumeContent {...props} />;
  if (variant === 'detail') return <DetailContent {...props} />;
};
