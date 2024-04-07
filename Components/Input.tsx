import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  disabled,
  placeholder,
  type,
  value,
}) => {
  return <div></div>;
};
