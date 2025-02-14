import { useState } from "react";
import { motion } from "framer-motion";

export default function DiceGame() {
  const [dice, setDice] = useState("🎲");
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return; // Prevent spamming

    setIsRolling(true);
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    
    // Simulate rolling effect
    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 6);
      setDice(diceFaces[randomIndex]);
      count++;
      if (count > 10) {
        clearInterval(interval);
        setIsRolling(false);
      }
    }, 100); // Change every 100ms for rolling effect
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Roll the Dice</h1>
      
      {/* Dice with animation */}
      <motion.div
        className="text-9xl"
        animate={{ rotate: isRolling ? [0, 10, -10, 0] : 0, scale: isRolling ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {dice}
      </motion.div>

      {/* Roll Button */}
      <button
        onClick={rollDice}
        disabled={isRolling}
        className="mt-4 px-6 py-2 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-400"
      >
        {isRolling ? "Rolling..." : "Roll"}
      </button>
    </div>
  );
}
