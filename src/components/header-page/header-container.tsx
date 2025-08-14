export function HeaderContainer({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
