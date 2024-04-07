import React from "react";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  fullWidth,
  large,
  disabled,
  secondary,
  outline,
}) => {
  return <div>Button</div>;
};
