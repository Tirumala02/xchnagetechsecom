
import React from 'react';

export function Card({ children, className = '' }) {
  return <div className={`border border-gray-200 rounded-lg shadow-sm p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="mb-2 font-semibold text-lg">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="mt-4">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}
