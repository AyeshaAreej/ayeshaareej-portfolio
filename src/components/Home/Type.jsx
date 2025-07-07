import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full-Stack Web & Mobile Developer",
              "Versatile Software Engineer",
              "Passionate About Learning New Technologies",
              "Experienced with APIs & Databases",
              "Collaborative & Solution-Oriented"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type