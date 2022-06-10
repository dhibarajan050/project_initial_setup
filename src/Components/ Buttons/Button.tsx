import React from "react";

interface Props {
  children: React.ReactNode;
  handelClick: () => void;
}

const Button = (Props: Props) => {
  return (
    <div>
      <button onClick={Props.handelClick}>{Props.children}</button>
    </div>
  );
};

export default Button;
