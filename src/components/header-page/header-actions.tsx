export function HeaderActions({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col sm:flex-row gap-2 ${className}`} {...props}>
      {children}
    </div>
  );
}
