import React from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export function Link({children, ...rest}: Props) {
  return (
    <a {...rest} className='flex items-center gap-2 font-bold text-xs uppercase text-product-blue font-nunito hover:underline cursor-pointer '>
      {children}
    </a>
  );
}