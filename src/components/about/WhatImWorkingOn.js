import React from 'react';

const WhatImWorkingOn = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">What I'm Working On</h3>
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
        <div>
          <h4 className="font-semibold text-gray-900">Patient Management System</h4>
          <p className="text-gray-600 text-sm">Role-based authentication and appointment management</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
        <div>
          <h4 className="font-semibold text-gray-900">Flight Shortener Web App</h4>
          <p className="text-gray-600 text-sm">TypeScript-based flight data management system</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
        <div>
          <h4 className="font-semibold text-gray-900">Learning New Technologies</h4>
          <p className="text-gray-600 text-sm">Exploring React Native, Node.js, and Python APIs</p>
        </div>
      </div>
    </div>
  </div>
);

export default WhatImWorkingOn; 