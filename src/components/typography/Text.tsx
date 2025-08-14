// components/ui/typography/Text.tsx
import { JSX, ReactNode } from 'react';

type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'subtitle'
  | 'body'
  | 'caption';
type TextWeight =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';
type TextColor =
  | 'default'
  | 'muted'
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success';

type TextProps = {
  /**
   * Variante de texto que define o tamanho e estilo básico
   * @default 'body'
   */
  variant?: TextVariant;
  /**
   * Peso da fonte
   * @default 'normal' para body, 'bold' para headings
   */
  weight?: TextWeight;
  /**
   * Cor do texto
   * @default 'default'
   */
  color?: TextColor;
  /**
   * Tag HTML a ser renderizada
   * Se não especificado, será inferida da variante
   */
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  /**
   * Se verdadeiro, adiciona ellipsis quando o texto transborda
   */
  truncate?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const variantClasses: Record<TextVariant, string> = {
  h1: 'text-4xl lg:text-5xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-lg',
  subtitle: 'text-sm',
  body: 'text-base',
  caption: 'text-xs',
};

const weightClasses: Record<TextWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

const colorClasses: Record<TextColor, string> = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  danger: 'text-destructive',
  warning: 'text-warning',
  success: 'text-success',
};

export function Text({
  variant = 'body',
  weight = variant.startsWith('h') ? 'bold' : 'normal',
  color = 'default',
  as,
  children,
  className = '',
  truncate = false,
  ...props
}: TextProps) {
  const Tag = as || ((variant.startsWith('h') ? variant : 'p') as any);

  const baseClasses = [
    variantClasses[variant],
    weightClasses[weight],
    colorClasses[color],
    truncate ? 'truncate' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={baseClasses} {...props}>
      {children}
    </Tag>
  );
}

// Componentes especializados com valores padrão
export function H1(props: Omit<TextProps, 'variant'>) {
  return <Text variant="h1" as="h1" weight="extrabold" {...props} />;
}

export function H2(props: Omit<TextProps, 'variant'>) {
  return <Text variant="h2" as="h2" weight="bold" {...props} />;
}

export function H3(props: Omit<TextProps, 'variant'>) {
  return <Text variant="h3" as="h3" weight="semibold" {...props} />;
}

export function Subtitle(
  props: Omit<TextProps, 'variant'> & { subtle?: boolean },
) {
  return (
    <Text
      variant="subtitle"
      as="p"
      color={props.subtle ? 'muted' : 'default'}
      {...props}
    />
  );
}

export function Caption(props: Omit<TextProps, 'variant'>) {
  return <Text variant="caption" as="span" color="muted" {...props} />;
}
