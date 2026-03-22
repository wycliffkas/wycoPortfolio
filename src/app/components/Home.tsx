import { motion } from 'motion/react';
import { CodeWindow } from './CodeWindow';
import { AnimatedBackground } from './AnimatedBackground';

export function Home() {
  const handleDownloadResume = () => {
    // Create a simple resume file
    const resumeContent = `
ABID AKRAM
Frontend Engineer | UI/UX Enthusiast | Problem Solver

CONTACT
Email: abid.akram@example.com
LinkedIn: linkedin.com/in/abidakram
GitHub: github.com/abidakram

SKILLS
- Frontend: Angular 18, React, JavaScript, TypeScript
- Styling: HTML, CSS, SCSS, Tailwind CSS, Bootstrap
- Backend: REST API, Git, MySQL, MongoDB, CI/CD
- Tools: Linux, Docker (Basic), Figma, Adobe Photoshop, Webflow, WordPress

PROFILE
hardWorker: true
quickLearner: true
problemSolver: true
yearsOfExperience: 5+
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Abid_Akram_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="home" className="min-h-screen bg-[#0a0e27] text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Welcome to my universe
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-400"
              >
                UI Magic
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
              >
                Clean Code
              </motion.div>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-6xl lg:text-7xl"
              >
                Hello
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-6xl lg:text-7xl"
              >
                I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Abid Akram
                </span>
              </motion.h1>
            </div>

            {/* Subtitle Tags */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-400"
              >
                Learning Backend Development
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-sm text-yellow-400"
              >
                Innovation
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-400 text-lg max-w-xl"
            >
              Frontend Engineer 🚀 | UI/UX Explorer 🎨 | Writing Clean Code &
              Building the Future, One Component at a Time 🚀
            </motion.p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
            >
              Get Resume
            </motion.button>
          </motion.div>

          {/* Right Side - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CodeWindow />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
