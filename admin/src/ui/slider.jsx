// src/components/ui/Slider.js
import React from 'react';

export function Slider({ defaultValue, max, step, value, onValueChange, className }) {
  const handleChange = (event) => {
    const newValue = Array.isArray(value) ? [+event.target.value, value[1]] : +event.target.value;
    onValueChange(newValue);
  };

  return (
    <input
      type="range"
      min={0}
      max={max}
      step={step}
      defaultValue={defaultValue[0]}
      value={value[0]}
      onChange={handleChange}
      className={`w-1/2 ${className}`}
    />
  );
}
