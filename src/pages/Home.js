import React from 'react';

const Home = () => {
  return (
    <div className="pt-16 relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-10 blur-3xl animate-pulse delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pritam Singh</span>
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Aspiring Software Developer with a strong foundation in full-stack web development, 
                  backend APIs, and cloud tools. Passionate about building scalable applications 
                  using modern frameworks and technologies.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Currently pursuing Bachelor of Technology in Computer Science at Amity University Jharkhand.
                </p>
              </div>
              
              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://www.linkedin.com/in/pritam-singh-562b37230/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/pritams84" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://mail.google.com/mail/u/0/?hl=en#inbox"
                  className="group flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/projects"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-center"
                >
                  View My Work
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a 
                  href="/contact"
                  className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                >
                  Contact Me
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

            {/* Right Column - Image/Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="text-white text-center relative z-10">
                    <div className="text-6xl mb-4 animate-bounce">💻</div>
                    <div className="text-xl font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Full Stack Developer</div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                  <span className="text-xl">🚀</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100/30 to-purple-100/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">Education</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              My academic journey in Computer Science and Technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200/50">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bachelor of Technology</h3>
                <p className="text-blue-600 font-medium mb-2">Computer Science</p>
                <p className="text-gray-600 mb-2">Amity University Jharkhand</p>
                <p className="text-sm text-gray-500">Aug 2022 – May 2026</p>
                <p className="text-sm text-gray-500">Ranchi, Jharkhand</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-200/50">
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Higher Secondary</h3>
                <p className="text-emerald-600 font-medium mb-2">12th Standard</p>
                <p className="text-gray-600 mb-2">Kendriya Vidyalaya Namkum</p>
                <p className="text-sm text-gray-500">2020 – 2022</p>
                <p className="text-sm text-gray-500">Ranchi, Jharkhand</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200/50">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secondary Education</h3>
                <p className="text-purple-600 font-medium mb-2">10th Standard</p>
                <p className="text-gray-600 mb-2">Kendriya Vidyalaya No. 1 Delhi Cantt</p>
                <p className="text-sm text-gray-500">2020</p>
                <p className="text-sm text-gray-500">Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-100/30 to-purple-100/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-indigo-800 bg-clip-text text-transparent mb-4">Technical Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Technologies and tools I work with to build amazing applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Languages</h3>
              <div className="space-y-3">
                {['Java', 'Python', 'C/C++', 'SQL (Postgres)', 'JavaScript', 'HTML/CSS'].map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 px-4 py-2 rounded-xl text-sm text-center font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-200/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Frameworks</h3>
              <div className="space-y-3">
                {['React', 'Node.js', 'FastAPI', 'Next.js'].map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-800 px-4 py-2 rounded-xl text-sm text-center font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Dev Tools</h3>
              <div className="space-y-3">
                {['Git', 'Docker', 'TravisCI', 'Google Cloud Platform', 'VS Code', 'Visual Studio', 'PyCharm', 'IntelliJ', 'Eclipse'].map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 px-4 py-2 rounded-xl text-sm text-center font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Libraries</h3>
              <div className="space-y-3">
                {['pandas', 'NumPy', 'Matplotlib'].map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 px-4 py-2 rounded-xl text-sm text-center font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-100/30 to-rose-100/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-pink-800 bg-clip-text text-transparent mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Some of my recent work showcasing my skills and passion for development
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Management System</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">React</span>
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">JavaScript</span>
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">Tailwind CSS</span>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      Role-based authentication system (Admin, Doctor, Patient)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      Appointment booking and management
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      Doctor schedule management
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      Responsive design with seamless UI/UX
                    </li>
                  </ul>
                  <a 
                    href="/projects"
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-200/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Flight Shortener Web App</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">React</span>
                    <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">TypeScript</span>
                    <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">MUI/Tailwind CSS</span>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2 mt-1">•</span>
                      Responsive frontend using React and TypeScript
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2 mt-1">•</span>
                      Flight data input and display components
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2 mt-1">•</span>
                      Mocked JSON API for testing
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2 mt-1">•</span>
                      Modern UI with Material-UI and Tailwind
                    </li>
                  </ul>
                  <a 
                    href="/projects"
                    className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/projects"
              className="group inline-block bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              View All Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 