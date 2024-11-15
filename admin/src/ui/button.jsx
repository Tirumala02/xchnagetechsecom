
import React from 'react';

export function Button({ children, variant = 'primary', ...props }) {
  const baseClasses = 'px-4 py-2 rounded font-semibold transition';
  const variants = {
    primary: `${baseClasses} bg-blue-500 text-white hover:bg-blue-600`,
    outline: `${baseClasses} border border-gray-300 text-gray-700 hover:bg-gray-100`,
  };
  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  );
}
