"use client"

import confetti from "canvas-confetti";
import { Link } from "lucide-react";
import { buttonVariants } from "../ui/button";
 
const ConfettiButton = () => {
  const handleClick = () => {
    confetti();
  };
 
  return (
  <button
    className={`rounded-md px-4 py-2 md:flex ${buttonVariants({ size: 'sm' })}`}
    onClick={() => {
      handleClick();
      window.location.href = '#CTA';
    }}
  >
    FREE DEMO
  </button>
  );
};
 
export default ConfettiButton;