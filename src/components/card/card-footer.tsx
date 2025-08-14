import { useCard } from './card';

export const CardFooter = ({
  items,
}: {
  items: {
    label: string;
    value: string;
    icon?: React.ReactNode;
  }[];
}) => {
  const { variant } = useCard();

  if (variant !== 'detail') return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-muted rounded-lg p-4">
          <h4 className="text-sm font-medium text-muted-foreground mb-1">
            {item.icon && <span className="mr-1">{item.icon}</span>}
            {item.label}
          </h4>
          <p className="font-medium">{item.value}</p>
        </div>
      ))}
    </div>
  );
};
