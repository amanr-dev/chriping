import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  border?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  disabled,
  placeholder,
  type,
  border,
  value,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className={`
  w-full
  px-2 py-1 text-base bg-slate-800 border-2 border-slate-800  rounded-lg outline-none text-primary disabled:bg-main disabled:opacity-70 disabled:cursor-not-allowed
  ${border ? "focus:border-blue-50 focus:border-1" : "border-none"}
   `}
    />
  );
};
