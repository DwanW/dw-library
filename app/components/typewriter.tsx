"use client";
import Typewriter from "typewriter-effect";

export const TypeText = ({ text }: { text: string }) => (
  <Typewriter
    onInit={(typewriter) => {
      typewriter.typeString(text).start();
    }}
  />
);
