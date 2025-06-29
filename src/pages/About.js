import React from 'react';
import ProfileImage from '../components/about/ProfileImage';
import AboutSummary from '../components/about/AboutSummary';
import QuickFacts from '../components/about/QuickFacts';
import WhatImWorkingOn from '../components/about/WhatImWorkingOn';

const About = () => {
  return (
    <div className="pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-10 w-24 h-24 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              I'm an aspiring Software Developer with a strong foundation in full-stack web development, 
              backend APIs, and cloud tools. Passionate about building scalable applications using modern frameworks and technologies.
            </p>
          </div>
        </div>

        {/* Hero Section with 3D Profile Image and Summary */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <AboutSummary />
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <ProfileImage />
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Quick Facts and What I'm Working On */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="group bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200/50">
            <QuickFacts />
          </div>
          <div className="group bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-200/50">
            <WhatImWorkingOn />
          </div>
        </div>

        {/* Additional About Content */}
        <div className="bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-200/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-4">
              My Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From learning my first programming language to building full-stack applications, 
              every step has been a learning experience that shapes my approach to development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem Solving</h3>
              <p className="text-gray-600 text-sm">
                I love tackling complex problems and finding elegant solutions through code.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Learning</h3>
              <p className="text-gray-600 text-sm">
                Quick to adapt to new technologies and frameworks as the industry evolves.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Experienced in working with teams and contributing to collaborative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 