import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "Linux / OS Concepts", level: "Intermediate", value: 65 },
    { name: "Networking Basics", level: "Beginner", value: 40 },
    { name: "Scripting (Bash/Python)", level: "Beginner", value: 45 },
    { name: "Git & Version Control", level: "Intermediate", value: 70 },
    { name: "Docker & Containers", level: "Intermediate", value: 60 },
    { name: "Cloud Fundamentals (AWS)", level: "Beginner", value: 35 },
    { name: "Automation Mindset", level: "Advanced", value: 90 }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Core Skills Map</h1>
        <p className="text-gray-500 dark:text-gray-400">Assess your progress across essential DevOps and Cloud domains.</p>
      </div>

      <div className="glassmorphism p-8 rounded-2xl">
        {skills.map((skill, idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-gray-800 dark:text-gray-200">{skill.name}</span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-3 rounded-full ${
                  skill.value > 80 ? 'bg-green-500' :
                  skill.value > 50 ? 'bg-blue-500' : 'bg-orange-500'
                }`}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
