import React, { useState } from "react";

const skillCategories = {
  Programming: [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
  ],
  Web: [
    { name: "React.js", level: 80 },
    { name: "HTML/CSS", level: 85 },
    { name: "Spring Boot", level: 75 },
  ],
  Tools: [
    { name: "MySQL", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Power Automate", level: 70 },
  ],
};

const SkillBar = ({ name, level }) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
        {name}
      </span>
      <span className="text-xs text-orange-500">{level}%</span>
    </div>
    <div className="h-1 bg-orange-100 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-orange-500 to-orange-300 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(skillCategories)[0]);

  return (
    <section className="py-20" id="skills">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-8">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === category
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-slate-600 dark:text-gray-400 hover:bg-orange-100/80 dark:hover:bg-orange-900/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="bg-orange-50/80 dark:bg-gray-800/50 rounded-xl p-6 shadow-sm backdrop-blur-sm">
          <div className="space-y-4">
            {skillCategories[activeTab].map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
