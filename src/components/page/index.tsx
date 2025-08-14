import { ReactNode } from 'react';

export default function Page(props: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8 mt-14">{props?.children}</div>
  );
}
