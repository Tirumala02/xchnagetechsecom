// src/components/ui/Select.js
import React, { useState } from 'react';

export function Select({ value, onValueChange, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (val) => {
    onValueChange(val);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <SelectTrigger onClick={() => setIsOpen((prev) => !prev)}>
        <SelectValue value={value} />
      </SelectTrigger>
      {isOpen && <SelectContent>{React.Children.map(children, (child) => React.cloneElement(child, { onSelect: handleSelect }))}</SelectContent>}
    </div>
  );
}

export function SelectTrigger({ children, className, onClick }) {
  return (
    <div onClick={onClick} className={`border border-gray-300 px-3 py-2 rounded cursor-pointer ${className}`}>
      {children}
    </div>
  );
}

export function SelectValue({ value, placeholder }) {
  return <span>{value || placeholder}</span>;
}

export function SelectContent({ children }) {
  return (
    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded shadow-lg">
      {children}
    </div>
  );
}

export function SelectItem({ children, onSelect, value }) {
  const handleClick = () => onSelect(value);
  return (
    <div onClick={handleClick} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
      {children}
    </div>
  );
}
