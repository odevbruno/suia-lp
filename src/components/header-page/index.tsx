import { JSX } from 'react';
import { Button } from '../button';
import { PlusCircleIcon } from 'lucide-react';
import { HeaderContent } from './header-content';
import { HeaderActions } from './header-actions';
import { H2, Subtitle } from '../typography/Text';
import { HeaderContainer } from './header-container';

export interface HeaderActionProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export interface HeaderPageProps {
  title: string;
  titleAs?: keyof JSX.IntrinsicElements;
  subtitle?: string;
  action?: HeaderActionProps;
  className?: string;
  children?: React.ReactNode;
}

export function HeaderPage({
  title,
  subtitle,
  action,
  className = '',
  children,
}: HeaderPageProps) {
  return (
    <HeaderContainer className={className}>
      <HeaderContent>
        <H2>{title}</H2>
        {subtitle && (
          <Subtitle subtle className="max-w-3xl">
            {subtitle}
          </Subtitle>
        )}
      </HeaderContent>

      {(action || children) && (
        <HeaderActions className="w-full md:w-fit">
          {action && (
            <Button
              onClick={action.onClick}
              variant={action.variant || 'primary'}
              size={action.size || 'lg'}
              icon={action.icon || <PlusCircleIcon className="w-5 h-5" />}
            >
              {action.label}
            </Button>
          )}
          {children}
        </HeaderActions>
      )}
    </HeaderContainer>
  );
}

export default HeaderPage;
