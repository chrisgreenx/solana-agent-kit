import React from 'react';

type IconProps = {
  name: string;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  // This is a placeholder component that would normally use an icon library
  // For now, we'll just render the name in a span with the provided class
  return <span className={`icon ${className}`}>{name}</span>;
};