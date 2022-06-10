import { ButtonHTMLAttributes, createElement, FC, ReactNode } from "react";
import Styles from "./Button.module.css";

interface IButtonProps extends ButtonHTMLAttributes<Element> {
  children: ReactNode;
}

const Button: FC<IButtonProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return createElement(
    "button",
    {
      className: `${Styles.buttonRoot} ${className}`,
      ...otherProps,
    },
    children
  );
};

export default Button;
