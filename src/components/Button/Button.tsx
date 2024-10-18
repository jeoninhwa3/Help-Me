import { MouseEvent } from "react";

type buttonTheme =
  | "primary"
  | "primaryGradient"
  | "grey"
  | "borderPrimary"
  | "borderGrey";

interface ButtonProps {
  buttonName: string;
  theme: buttonTheme;
  width?: string;
  padding?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const styles = {
  primary: "py-3 px-4 rounded-lg bg-primary500 text-white font-semibold",
  primaryGradient:
    "p-4 rounded-lg leading-5 bg-[#FF7A85] font-semibold text-white shadow-primary-btn",
  grey: "py-3 px-4 rounded-lg bg-gray200 text-disabeld",
  borderPrimary:
    "bg-white border border-solid border-primary500 rounded-lg text-primary600 font-medium",
  borderGrey:
    "bg-white border border-solid border-gray400 rounded-lg text-gray900 font-medium",
};

const Button = ({
  buttonName,
  theme,
  width,
  padding,
  disabled,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <button
      className={`${styles[theme]} ${width ? width : "w-[240px]"} ${
        padding ? padding : "py-3 px-4"
      }`}
      disabled={disabled ? disabled : false}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {buttonName}
    </button>
  );
};

export default Button;
