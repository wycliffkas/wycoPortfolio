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
      <div className="bg-gradient-to-br from-[#7f5af0]/20 via-[#1a0b2e]/40 to-[#ff6b9d]/20 rounded-2xl border border-[#7f5af0]/40 shadow-2xl shadow-[#7f5af0]/30 backdrop-blur-md overflow-hidden">
        {/* Browser Header */}
        <div className="bg-gradient-to-r from-[#1a0b2e] to-[#16052e] px-4 py-3 flex items-center gap-2 border-b border-[#7f5af0]/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff6b9d] shadow-lg shadow-[#ff6b9d]/50"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffa94d] shadow-lg shadow-[#ffa94d]/50"></div>
            <div className="w-3 h-3 rounded-full bg-[#2cb67d] shadow-lg shadow-[#2cb67d]/50"></div>
          </div>
          <div className="flex-1 text-center text-sm bg-gradient-to-r from-[#ff6b9d] via-[#7f5af0] to-[#4ecdc4] bg-clip-text text-transparent">
            developer.js
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-gray-300">
            <code>
              <span className="text-[#7f5af0]">const</span>{' '}
              <span className="text-[#4ecdc4]">profile</span>{' '}
              <span className="text-[#ff6b9d]">=</span>{' '}
              <span className="text-[#ffa94d]">{'{'}</span>
              {'\n'}
              {'  '}
              <span className="text-[#4ecdc4]">name</span>
              <span className="text-[#ff6b9d]">:</span>{' '}
              <span className="text-[#2cb67d]">'Abid Akram'</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-[#4ecdc4]">title</span>
              <span className="text-[#ff6b9d]">:</span>{' '}
              <span className="text-[#2cb67d]">
                'Frontend Engineer | UI/UX Enthusiast | Problem Solver'
              </span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-[#4ecdc4]">skills</span>
              <span className="text-[#ff6b9d]">:</span>{' '}
              <span className="text-[#ffa94d]">{'['}</span>
              {'\n'}
              {'    '}
              <span className="text-[#2cb67d]">'Angular 18'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'React'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'JavaScript'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'TypeScript'</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'    '}
              <span className="text-[#2cb67d]">'HTML'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'CSS'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'SCSS'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'Tailwind CSS'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'Bootstrap'</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'    '}
              <span className="text-[#2cb67d]">'REST API'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'Git'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'MySQL'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'MongoDB'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'CI/CD'</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'    '}
              <span className="text-[#2cb67d]">'Linux'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'Docker (Basic)'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'Figma'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'Adobe Photoshop'</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'    '}
              <span className="text-[#2cb67d]">'Webflow'</span>
              <span className="text-gray-500">,</span>{' '}
              <span className="text-[#2cb67d]">'WordPress'</span>
              {'\n'}
              {'  '}
              <span className="text-[#ffa94d]">{']'}</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-[#4ecdc4]">hardWorker</span>
              <span className="text-[#ff6b9d]">:</span>{' '}
              <span className="text-[#ffa94d]">true</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-[#4ecdc4]">quickLearner</span>
              <span className="text-[#ff6b9d]">:</span>{' '}
              <span className="text-[#ffa94d]">true</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-[#4ecdc4]">problemSolver</span>
              <span className="text-[#ff6b9d]">:</span>{' '}
              <span className="text-[#ffa94d]">true</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-[#4ecdc4]">yearsOfExperience</span>
              <span className="text-[#ff6b9d]">:</span>{' '}
              <span className="text-[#ffa94d]">5+</span>
              <span className="text-gray-500">,</span>
              {'\n'}
              {'  '}
              <span className="text-[#4ecdc4]">hireable</span>
              <span className="text-[#ff6b9d]">:</span>{' '}
              <span className="text-[#7f5af0]">function</span>
              <span className="text-[#ffa94d]">{'()'}</span>{' '}
              <span className="text-[#ffa94d]">{'{'}</span>
              {'\n'}
              {'    '}
              <span className="text-[#7f5af0]">return</span>{' '}
              <span className="text-[#ffa94d]">{'('}</span>
              {'\n'}
              {'      '}
              <span className="text-[#ff6b9d]">this</span>
              <span className="text-gray-500">.</span>
              <span className="text-[#4ecdc4]">hardWorker</span>{' '}
              <span className="text-[#ff6b9d]">&&</span>
              {'\n'}
              {'      '}
              <span className="text-[#ff6b9d]">this</span>
              <span className="text-gray-500">.</span>
              <span className="text-[#4ecdc4]">problemSolver</span>{' '}
              <span className="text-[#ff6b9d]">&&</span>
              {'\n'}
              {'      '}
              <span className="text-[#ff6b9d]">this</span>
              <span className="text-gray-500">.</span>
              <span className="text-[#4ecdc4]">skills</span>
              <span className="text-gray-500">.</span>
              <span className="text-[#4ecdc4]">length</span>{' '}
              <span className="text-[#ff6b9d]">{'>='}</span>{' '}
              <span className="text-[#ffa94d]">5</span>{' '}
              <span className="text-[#ff6b9d]">&&</span>
              {'\n'}
              {'      '}
              <span className="text-[#ff6b9d]">this</span>
              <span className="text-gray-500">.</span>
              <span className="text-[#4ecdc4]">yearsOfExperience</span>{' '}
              <span className="text-[#ff6b9d]">{'>='}</span>{' '}
              <span className="text-[#ffa94d]">5+</span>
              {'\n'}
              {'    '}
              <span className="text-[#ffa94d]">{')'}</span>
              <span className="text-gray-500">;</span>
              {'\n'}
              {'  '}
              <span className="text-[#ffa94d]">{'}'}</span>
              {'\n'}
              <span className="text-[#ffa94d]">{'}'}</span>
              <span className="text-gray-500">;</span>
            </code>
          </pre>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b9d]/20 via-[#7f5af0]/15 to-[#4ecdc4]/20 rounded-2xl blur-2xl -z-10"></div>
    </motion.div>
  );
}
