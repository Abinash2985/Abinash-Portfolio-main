import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "React  Developer",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;
