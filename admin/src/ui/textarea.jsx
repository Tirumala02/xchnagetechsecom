
import React from 'react';

export function Textarea({ value, onChange, placeholder, rows = 4, columns=10, ...props }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      columns={columns}
      className="border border-blue-300 rounded-md p-2 w-full resize-none focus:outline-none focus:border-blue-500"
      {...props}
    />
  );
}
