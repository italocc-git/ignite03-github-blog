import React from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export function Link({children, ...rest}: Props) {
  return (
    <a {...rest} className='font-bold text-xs uppercase text-product-blue font-nunito hover:underline '>
      {children}
    </a>
  );
}