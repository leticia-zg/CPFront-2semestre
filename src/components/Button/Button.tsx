import React from 'react';
import { buttonStyle } from './Button.style';

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <button style={buttonStyle} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
