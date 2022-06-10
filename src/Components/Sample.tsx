import React from "react";
import Button from "./ Buttons/Button";

const Sample = () => {
  const handelClick = () => {
    console.log("Hello TypeScript");
  };
  return (
    <div>
      <Button handelClick={() => handelClick()} children="samplebutton" />
    </div>
  );
};

export default Sample;
