import React from "react";

type ButtonProps = {
  setCount: (value: number) => void;
  count: number;
  email?: string;
};

export function Button({ setCount, count, email }: ButtonProps) {
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{email}</p>
      <button onClick={() => handleCount()}>Clique</button>
    </div>
  );
}
