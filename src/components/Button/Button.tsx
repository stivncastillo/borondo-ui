import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className="bg-red-500 text-white py-2 px-4">{children}</button>
  );
};

export default Button;
