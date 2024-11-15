// src/components/ui/Checkbox.js
import React from 'react';

export function Checkbox({ checked, onCheckedChange, id }) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="cursor-pointer"
    />
  );
}
