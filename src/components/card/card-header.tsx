import { useCard } from './card';
import { StatusBadge } from '../status-badge';
import { IStatus } from '@/interfaces';

export type BaseHeaderProps = {
  date: string;
  title: string;
  subtitle: string;
  status: IStatus;
  creator: string;
};

type ResumeHeaderProps = BaseHeaderProps;
type DetailHeaderProps = BaseHeaderProps;

export type CardHeaderProps = ResumeHeaderProps | DetailHeaderProps;

function ResumeHeader({
  creator,
  date,
  status,
  subtitle,
  title,
}: ResumeHeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        {status && <StatusBadge status={status} />}
        {date && <span className="text-xs text-muted-foreground">{date}</span>}
      </div>
      <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
      {subtitle && (
        <p className="text-muted-foreground text-sm line-clamp-2">{subtitle}</p>
      )}
      {creator && (
        <p className="text-xs text-muted-foreground/80">
          Criado por: <span className="font-medium">{creator}</span>
        </p>
      )}
    </div>
  );
}

function DetailHeader({
  creator,
  date,
  status,
  subtitle,
  title,
}: DetailHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex items-center gap-2 mt-1">
            {status && <StatusBadge status={status} />}
            {date && (
              <span className="text-sm text-muted-foreground">{date}</span>
            )}
          </div>
          {creator && (
            <p className="text-xs text-muted-foreground/80 mt-1">
              Criado por: <span className="font-medium">{creator}</span>
            </p>
          )}
        </div>
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-sm whitespace-pre-line mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export const CardHeader = (props: CardHeaderProps) => {
  const { variant } = useCard();
  if (variant === 'resume') return <ResumeHeader {...props} />;
  if (variant === 'detail') return <DetailHeader {...props} />;
};
