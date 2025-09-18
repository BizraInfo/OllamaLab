import { motion } from 'framer-motion';
import APP_NAME from '@/constants/AppName';
import { OLLAMA_TOOLS } from '@/constants/config';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss } from 'react-icons/si';
import { DependencyInfo } from '@/types';

export default function Home() {
  const dependencies: DependencyInfo[] = [
    { name: "React", version: "19.0.0", description: "Modern UI library with hooks and concurrent features", category: "core" },
    { name: "TypeScript", version: "5.7.2", description: "Static type checking for robust code", category: "development" },
    { name: "Vite", version: "6.2.0", description: "Lightning-fast development and build tool", category: "development" },
    { name: "React Router", version: "7.4.0", description: "Declarative routing for React applications", category: "core" },
    { name: "TailwindCSS", version: "4.0.15", description: "Utility-first CSS framework", category: "ui" },
    { name: "Framer Motion", version: "12.5.0", description: "Production-ready motion library", category: "ui" },
    { name: "Axios", version: "1.8.4", description: "Promise-based HTTP client", category: "utility" },
    { name: "React Icons", version: "5.5.0", description: "Popular icon library", category: "ui" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const toolCategories = OLLAMA_TOOLS.reduce((acc, tool) => {
    const category = tool.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tool);
    return acc;
  }, {} as Record<string, typeof OLLAMA_TOOLS>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-400 p-4">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white border-opacity-20 p-8"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-3xl md:text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 mb-4"
            variants={itemVariants}
          >
            {APP_NAME}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-indigo-800 mb-6 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Professional web-based interface for interacting with Ollama AI models. 
            Explore powerful tools for enhanced productivity and AI-assisted workflows.
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-6 mt-8"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaReact className="text-5xl text-blue-500" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <SiTypescript className="text-5xl text-blue-700" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <SiVite className="text-5xl text-yellow-500" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <SiTailwindcss className="text-5xl text-teal-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tools Section */}
        <motion.div 
          className="mb-12 bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white border-opacity-20 p-8"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-center text-indigo-800 mb-8"
            variants={itemVariants}
          >
            🛠️ Available Tools
          </motion.h2>
          
          <div className="grid gap-6">
            {Object.entries(toolCategories).map(([category, tools], categoryIndex) => (
              <motion.div
                key={category}
                className="bg-white bg-opacity-30 rounded-2xl p-6"
                variants={itemVariants}
                custom={categoryIndex}
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
                  <span className="bg-indigo-100 px-3 py-1 rounded-full text-sm">
                    {category}
                  </span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.id}
                      className="bg-white bg-opacity-50 rounded-xl p-4 hover:bg-opacity-70 transition-all duration-300 cursor-pointer border border-transparent hover:border-indigo-200"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: toolIndex * 0.05 as number }
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl" role="img" aria-label={tool.name}>
                          {tool.icon}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-indigo-800 mb-1">
                            {tool.name}
                          </h4>
                          <p className="text-sm text-indigo-600 leading-relaxed">
                            {tool.description}
                          </p>
                          <div className="mt-2">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              tool.isActive 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-orange-100 text-orange-700'
                            }`}>
                              {tool.isActive ? 'Active' : 'Coming Soon'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack Section */}
        <motion.div 
          className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white border-opacity-20 p-8"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-center text-indigo-800 mb-8"
            variants={itemVariants}
          >
            🔧 Technology Stack
          </motion.h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white bg-opacity-50 rounded-lg overflow-hidden">
              <thead className="bg-indigo-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Technology</th>
                  <th className="py-4 px-6 text-center font-semibold">Version</th>
                  <th className="py-4 px-6 text-left font-semibold">Description</th>
                  <th className="py-4 px-6 text-center font-semibold">Category</th>
                </tr>
              </thead>
              <tbody>
                {dependencies.map((dep, index) => (
                  <motion.tr 
                    key={index} 
                    className={`${
                      index % 2 === 0 ? "bg-indigo-50 bg-opacity-50" : "bg-white bg-opacity-50"
                    } hover:bg-indigo-100 hover:bg-opacity-60 transition-colors duration-200`}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.05 as number }
                      }
                    }}
                  >
                    <td className="py-3 px-6 border-t border-indigo-100 font-medium text-indigo-800">
                      {dep.name}
                    </td>
                    <td className="py-3 px-6 border-t border-indigo-100 text-center font-mono text-indigo-700">
                      {dep.version}
                    </td>
                    <td className="py-3 px-6 border-t border-indigo-100 text-indigo-600">
                      {dep.description}
                    </td>
                    <td className="py-3 px-6 border-t border-indigo-100 text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        dep.category === 'core' ? 'bg-blue-100 text-blue-700' :
                        dep.category === 'ui' ? 'bg-purple-100 text-purple-700' :
                        dep.category === 'utility' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {dep.category}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="text-center mt-12 text-indigo-800"
          variants={itemVariants}
        >
          <p className="text-lg font-medium">
            Built with ❤️ using modern web technologies
          </p>
          <p className="text-sm mt-2 opacity-80">
            Version 1.0.0 • Professional-grade AI interface
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
}