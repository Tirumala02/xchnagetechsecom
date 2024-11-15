
import React from 'react';

export function Alert({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-blue-100 text-blue-700',
    destructive: 'bg-red-100 text-red-700',
  };
  return <div className={`p-4 rounded ${variants[variant]}`}>{children}</div>;
}

export function AlertTitle({ children }) {
  return <h4 className="font-semibold">{children}</h4>;
}

export function AlertDescription({ children }) {
  return <p>{children}</p>;
}
