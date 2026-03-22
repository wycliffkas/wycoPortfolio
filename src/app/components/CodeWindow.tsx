import { motion } from 'motion/react';

export function CodeWindow() {
  const code = `const profile = {
  name: 'Abid Akram',
  title: 'Frontend Engineer | UI/UX Enthusiast | Problem Solver',
  skills: [
    'Angular 18', 'React', 'JavaScript', 'TypeScript',
    'HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'Bootstrap',
    'REST API', 'Git', 'MySQL', 'MongoDB', 'CI/CD',
    'Linux', 'Docker (Basic)', 'Figma', 'Adobe Photoshop',
    'Webflow', 'WordPress'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 5+,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
      this.yearsOfExperience >= 5+
    );
  }
};`;

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -15 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative"
    >
      {/* Browser Window */}
      <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm overflow-hidden">
        {/* Browser Header */}
        <div className="bg-[#1a2332] px-4 py-3 flex items-center gap-2 border-b border-cyan-500/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center text-sm text-cyan-400">
            developer.js
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-gray-300">
            <code>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">profile</span>{' '}
              <span className="text-cyan-400">=</span>{' '}
              <span className="text-yellow-400">{'{'}</span>
              {'\n'}
              {'  '}
              <span className="text-blue-300">name</span>
              <span className="text-cyan-400">:</span>{' '}
              <span className="text-green-400">'Abid Akram'</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-blue-300">title</span>
              <span className="text-cyan-400">:</span>{' '}
              <span className="text-green-400">
                'Frontend Engineer | UI/UX Enthusiast | Problem Solver'
              </span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-blue-300">skills</span>
              <span className="text-cyan-400">:</span>{' '}
              <span className="text-yellow-400">{'['}</span>
              {'\n'}
              {'    '}
              <span className="text-green-400">'Angular 18'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'React'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'JavaScript'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'TypeScript'</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'    '}
              <span className="text-green-400">'HTML'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'CSS'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'SCSS'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'Tailwind CSS'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'Bootstrap'</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'    '}
              <span className="text-green-400">'REST API'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'Git'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'MySQL'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'MongoDB'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'CI/CD'</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'    '}
              <span className="text-green-400">'Linux'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'Docker (Basic)'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'Figma'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'Adobe Photoshop'</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'    '}
              <span className="text-green-400">'Webflow'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-green-400">'WordPress'</span>
              {'\n'}
              {'  '}
              <span className="text-yellow-400">{']'}</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-blue-300">hardWorker</span>
              <span className="text-cyan-400">:</span>{' '}
              <span className="text-orange-400">true</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-blue-300">quickLearner</span>
              <span className="text-cyan-400">:</span>{' '}
              <span className="text-orange-400">true</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-blue-300">problemSolver</span>
              <span className="text-cyan-400">:</span>{' '}
              <span className="text-orange-400">true</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-blue-300">yearsOfExperience</span>
              <span className="text-cyan-400">:</span>{' '}
              <span className="text-orange-400">5+</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-blue-300">hireable</span>
              <span className="text-cyan-400">:</span>{' '}
              <span className="text-purple-400">function</span>
              <span className="text-yellow-400">{'()'}</span>{' '}
              <span className="text-yellow-400">{'{'}</span>
              {'\n'}
              {'    '}
              <span className="text-purple-400">return</span>{' '}
              <span className="text-yellow-400">{'('}</span>
              {'\n'}
              {'      '}
              <span className="text-cyan-400">this</span>
              <span className="text-gray-500">.</span>
              <span className="text-blue-300">hardWorker</span>{' '}
              <span className="text-pink-400">&&</span>
              {'\n'}
              {'      '}
              <span className="text-cyan-400">this</span>
              <span className="text-gray-500">.</span>
              <span className="text-blue-300">problemSolver</span>{' '}
              <span className="text-pink-400">&&</span>
              {'\n'}
              {'      '}
              <span className="text-cyan-400">this</span>
              <span className="text-gray-500">.</span>
              <span className="text-blue-300">skills</span>
              <span className="text-gray-500">.</span>
              <span className="text-blue-300">length</span>{' '}
              <span className="text-pink-400">{'>='}</span>{' '}
              <span className="text-orange-400">5</span>{' '}
              <span className="text-pink-400">&&</span>
              {'\n'}
              {'      '}
              <span className="text-cyan-400">this</span>
              <span className="text-gray-500">.</span>
              <span className="text-blue-300">yearsOfExperience</span>{' '}
              <span className="text-pink-400">{'>='}</span>{' '}
              <span className="text-orange-400">5+</span>
              {'\n'}
              {'    '}
              <span className="text-yellow-400">{')'}</span>
              <span className="text-gray-500">;</span>
              {'\n'}
              {'  '}
              <span className="text-yellow-400">{'}'}</span>
              {'\n'}
              <span className="text-yellow-400">{'}'}</span>
              <span className="text-gray-500">;</span>
            </code>
          </pre>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg blur-xl -z-10"></div>
    </motion.div>
  );
}
