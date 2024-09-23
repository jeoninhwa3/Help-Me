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
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const styles = {
  primary: "py-3 px-4 rounded-lg bg-primary500 text-white font-semibold",
  primaryGradient:
    "p-4 rounded-lg leading-5 bg-[#FF7A85] font-semibold text-white shadow-primary-btn",
  grey: "py-3 px-4 rounded-lg bg-gray200 text-disabeld",
  borderPrimary:
    "py-2 px-3 bg-white border border-solid border-primary500 rounded-lg text-primary600 font-medium",
  borderGrey:
    "py-2 px-3 bg-white border border-solid border-gray400 rounded-lg text-gray900 font-medium",
};

const Button = ({ buttonName, theme, width, onClick }: ButtonProps) => {
  return (
    <button
      className={`${styles[theme]} ${width ? width : "w-[240px]"}`}
      onClick={onClick}
      type="button"
    >
      {buttonName}
    </button>
  );
};

export default Button;
