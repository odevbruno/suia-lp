export function HeaderContent({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col gap-1 ${className}`} {...props}>
      {children}
    </div>
  );
}
