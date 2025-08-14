import { Card, CardProps } from './card';
import { CardContent, CardContentProps } from './card-content';
import { CardHeader, CardHeaderProps } from './card-header';

export * from './card-footer';
export * from './card-actions';

export type CardDemandProps = Partial<CardProps> &
  CardContentProps & {
    header: CardHeaderProps;
  };

export const CardDemand = (props: CardDemandProps) => {
  return (
    <Card variant="resume" onClick={props?.onClick}>
      <CardHeader {...props.header} />
      {props?.content && <CardContent {...props} />}
    </Card>
  );
};
