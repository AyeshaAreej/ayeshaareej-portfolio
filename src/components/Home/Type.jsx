import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Senior SaaS & AI Automation Engineer",
              "Co-founder @ Enumsol",
              "n8n Certified Workflow Professional",
              "LLM-integrated pipelines & AI systems",
              "Building products that reduce real work"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type