import React, { useState } from "react";

type ButtonProps = {
  buttons: string[];
};

export default function Button(props: ButtonProps) {
  const { buttons } = props;
  const [clickedText, setClickedText] = useState("");

  const handleClick = (buttonText: string) => {
    setClickedText(`You clicked on ${buttonText}`);
  };

  return (
    <div>
      {buttons.map((buttonText, index) => (
        <button key={index} onClick={() => handleClick(buttonText)}>
          {buttonText}
        </button>
      ))}
      <p>{clickedText}</p>
    </div>
  );
}
