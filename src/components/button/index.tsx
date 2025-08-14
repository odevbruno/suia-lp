// components/ui/button.tsx
import { Loader2 } from 'lucide-react';
import { ReactNode, forwardRef } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'destructive';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Estilo visual do botão
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * Tamanho do botão
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Ícone a ser exibido antes do texto
   */
  icon?: ReactNode;
  /**
   * Ícone a ser exibido depois do texto
   */
  iconEnd?: ReactNode;
  /**
   * Se verdadeiro, exibe um indicador de carregamento
   * @default false
   */
  loading?: boolean;
  /**
   * Se verdadeiro, ocupa a largura total do container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Se verdadeiro, arredonda os cantos completamente
   * @default false
   */
  rounded?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline:
    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
  lg: 'h-10 px-6 text-base',
  xl: 'h-12 px-8 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconEnd,
      loading = false,
      disabled = false,
      fullWidth = false,
      rounded = false,
      className = '',
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

    return (
      <button
        ref={ref}
        className={[
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth ? 'w-full' : '',
          rounded ? 'rounded-full' : 'rounded-md',
          className,
        ].join(' ')}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {children}
          </>
        ) : (
          <>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
            {iconEnd && <span className="ml-2">{iconEnd}</span>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

// Componentes especializados (opcional)
export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'variant'>
>((props, ref) => <Button ref={ref} variant="primary" {...props} />);
PrimaryButton.displayName = 'PrimaryButton';

export const SecondaryButton = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'variant'>
>((props, ref) => <Button ref={ref} variant="secondary" {...props} />);
SecondaryButton.displayName = 'SecondaryButton';

export const OutlineButton = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'variant'>
>((props, ref) => <Button ref={ref} variant="outline" {...props} />);
OutlineButton.displayName = 'OutlineButton';

export const DestructiveButton = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'variant'>
>((props, ref) => <Button ref={ref} variant="destructive" {...props} />);
DestructiveButton.displayName = 'DestructiveButton';
