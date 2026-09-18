import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  label: string;
  active?: boolean;
};

export function IconButton({ icon, label, active = false, className = "", ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`glass-button ${active ? "is-active" : ""} ${className}`}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}