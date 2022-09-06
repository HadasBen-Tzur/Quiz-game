import React, { useState } from "react";

export default function Answer(prop) {
  const backgroundColorName = () => {
    if (!prop.clickCheck) {
      if (prop.isClick) return "#D6DBF5";
    }
    if (prop.clickCheck) {
      if (prop.isClick && !prop.isCorrect) return "pink";
      if (prop.isCorrect) return "#94D7A2";
    }

    return "";
  };
  const styles = {
    backgroundColor: backgroundColorName(),
  };

  return (
    <div key={prop}>
      <button key={prop} style={styles} onClick={prop.chengeColer}>
        {prop.value}
      </button>
    </div>
  );
}
