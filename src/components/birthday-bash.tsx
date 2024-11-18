import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Cake, Gift, Sparkles, Code, Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const codeSnippets = [
  "console.log('Happy Birthday, Mridul! 🎉')",
  "while(true) { celebrate(Mridul) }",
  "if(today === Mridul.birthday) { party.start() }",
  "function eatCake() { return '🍰'.repeat(Infinity) }",
];

export function BirthdayBashComponent() {
  const [codeIndex, setCodeIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setCodeIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
      launchConfetti();
    }, 1000);
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <CardContent className="p-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-purple-600 mb-4">
              Mridul's Birthday Bash! 🎉
            </h1>
          </motion.div>

          <motion.div
            className="flex justify-center mb-6"
            animate={{ rotate: isSpinning ? 360 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Cake className="w-32 h-32 text-yellow-500" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center mb-6"
          >
            Hey coding wizard! It's time to debug your age and compile some fun!
            🚀💻
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            {[Gift, Sparkles, Code, Pizza].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.8 }}
              >
                <Icon className="w-10 h-10 text-purple-500" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              onClick={spinWheel}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300"
            >
              Spin the Birthday Wheel!
            </Button>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={codeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-6 bg-gray-100 rounded-lg p-4 text-center"
            >
              <code className="text-purple-600 text-sm font-mono">
                {codeSnippets[codeIndex]}
              </code>
            </motion.div>
          </AnimatePresence>

          <motion.p
            className="text-center mt-6 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            May your code be bug-free and your pizza be endless! 🍕
          </motion.p>
        </CardContent>
      </Card>
    </div>
  );
}
