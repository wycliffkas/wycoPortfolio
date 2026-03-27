import { motion } from "motion/react";
import { CodeWindow } from "./CodeWindow";
import { AnimatedBackground } from "./AnimatedBackground";

export function Home() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = `/wycoPortfolio/wycliff_kasirye_resume.pdf`;
    link.download = "wycliff_kasirye_resume.pdf";
    link.click();
  };

  return (
    <div
      id="home"
      className="min-h-screen bg-transparent text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="px-4 py-2 bg-[#ff6b9d]/10 border border-[#ff6b9d]/30 rounded-full text-sm text-[#ff6b9d] flex items-center gap-2 backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#ff6b9d] rounded-full animate-pulse"></span>
                Welcome to my universe
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="px-4 py-2 bg-[#7f5af0]/10 border border-[#7f5af0]/30 rounded-full text-sm text-[#7f5af0] backdrop-blur-sm">
                UI Magic
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="px-4 py-2 bg-[#2cb67d]/10 border border-[#2cb67d]/30 rounded-full text-sm text-[#2cb67d] backdrop-blur-sm">
                Clean Code
              </motion.div>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-6xl lg:text-7xl">
                Hello
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-6xl lg:text-7xl">
                I'm{" "}
                <span className="bg-gradient-to-r from-[#ff6b9d] via-[#7f5af0] to-[#4ecdc4] bg-clip-text text-transparent">
                  Wycliff Kasirye
                </span>
              </motion.h1>
            </div>

            {/* Subtitle Tags */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="px-4 py-2 bg-[#7f5af0]/10 border border-[#7f5af0]/30 rounded-xl text-sm text-[#7f5af0] backdrop-blur-sm shadow-lg shadow-[#7f5af0]/20">
                AI Native
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="px-4 py-2 bg-[#ffa94d]/10 border border-[#ffa94d]/30 rounded-xl text-sm text-[#ffa94d] backdrop-blur-sm shadow-lg shadow-[#ffa94d]/20">
                Innovation
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-400 text-lg max-w-xl">
              Full Stack | Frontend | Mobile Developer 🚀 | UI/UX Explorer 🎨 |
              Writing Clean Code & Building the Future, One Component at a Time
              🚀
            </motion.p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 107, 157, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="px-8 py-3 bg-gradient-to-r from-[#ff6b9d] to-[#7f5af0] text-white rounded-xl hover:from-[#ff5086] hover:to-[#6a3fd9] transition-all duration-300 shadow-lg shadow-[#ff6b9d]/30">
              Get Resume
            </motion.button>
          </motion.div>

          {/* Right Side - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <CodeWindow />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
