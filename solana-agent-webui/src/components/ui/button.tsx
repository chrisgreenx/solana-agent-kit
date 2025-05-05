import React from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50';
  
  const variantStyles = {
    default: 'bg-[#1E9BB9] text-white hover:bg-[#1E9BB9]/90',
    outline: 'border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
    link: 'bg-transparent underline-offset-4 hover:underline text-[#1E9BB9]',
  };
  
  const sizeStyles = {
    default: 'h-10 px-4 py-2',
    sm: 'h-8 px-3 text-sm',
    lg: 'h-12 px-6 text-lg',
  };
  
  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};