import React from 'react';

const facts = [
  'Currently pursuing B.Tech in Computer Science',
  'Full-stack development expertise',
  'Passionate about modern web technologies',
  'Always learning new frameworks and tools',
  'Problem solver and team player',
];

const QuickFacts = () => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
    <div className="space-y-4">
      {facts.map((fact, idx) => (
        <div key={idx} className="flex items-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
          <span className="text-gray-700">{fact}</span>
        </div>
      ))}
    </div>
  </div>
);

export default QuickFacts; 