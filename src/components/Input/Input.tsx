import React from 'react';
import { labelStyle, inputStyle } from './Input.style';

interface InputProps {
  type: string;
  id: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  label,
  onChange,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        style={inputStyle}
        {...rest}
      />
    </>
  );
};
