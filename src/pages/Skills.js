import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "TypeScript", level: 80, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 88, color: "bg-cyan-500" },
        { name: "Next.js", level: 75, color: "bg-gray-800" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "Express.js", level: 80, color: "bg-gray-500" },
        { name: "Python", level: 75, color: "bg-blue-500" },
        { name: "MongoDB", level: 70, color: "bg-green-600" },
        { name: "PostgreSQL", level: 65, color: "bg-blue-700" },
        { name: "Firebase", level: 75, color: "bg-orange-500" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, color: "bg-orange-600" },
        { name: "Docker", level: 60, color: "bg-blue-500" },
        { name: "AWS", level: 65, color: "bg-yellow-600" },
        { name: "Figma", level: 70, color: "bg-purple-500" },
        { name: "VS Code", level: 95, color: "bg-blue-600" },
        { name: "Postman", level: 80, color: "bg-orange-500" }
      ]
    }
  ];

  const otherSkills = [
    "Responsive Design", "RESTful APIs", "GraphQL", "State Management", 
    "Testing (Jest, React Testing Library)", "CI/CD", "Performance Optimization",
    "SEO", "Accessibility", "Cross-browser Compatibility", "Agile/Scrum",
    "Problem Solving", "Team Collaboration", "Code Review", "Documentation"
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I've developed a diverse set of skills through years of experience and continuous learning. 
            Here's what I bring to the table.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <span 
                key={index}
                className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to work together?</h2>
          <p className="text-gray-600 mb-8">
            I'm always excited to take on new challenges and collaborate on interesting projects.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills; 