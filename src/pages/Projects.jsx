import { useState } from 'react';

const javaProjects = [
  {
    title: 'Online Banking Web Application',
    description: 'Allows users to register and securely log in, deposit and withdraw money, view real-time account balance. Uses JDBC transactions for data consistency and session management for authenticated access.',
    technologies: ['Java', 'Servlets', 'JSP', 'MySQL', 'JDBC', 'Apache Tomcat', 'Docker', 'Render'],
    liveLink: 'https://online-banking-system-lli1.onrender.com',
    useCase: 'Banking simulation system demonstrating backend concepts, CRUD operations, transaction handling, and cloud deployment.',
  },
  {
    title: 'Employee Management System',
    description: 'Backend application to perform CRUD operations on employee records using Hibernate ORM for database interaction.',
    technologies: ['Java', 'Hibernate', 'MySQL'],
    useCase: 'Helps organizations manage employee information while reducing manual data handling.',
  },
  {
    title: 'Student Management System (Spring Boot)',
    description: 'RESTful application to manage student records, courses, and enrollment using Spring Boot and Hibernate.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Hibernate', 'MySQL'],
    useCase: 'Enables educational institutions to automate and manage academic data efficiently.',
  },
  {
    title: 'User Authentication & Authorization System',
    description: 'Secure user authentication and role-based authorization using Spring Security and JWT.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Hibernate', 'MySQL'],
    useCase: 'Provides secure access control for enterprise web applications.',
  },
];

const pythonProjects = [
  {
    title: 'NewsProject (Django Web Application)',
    description: 'Web application that fetches and displays real-time news articles using a third-party News API.',
    technologies: ['Python', 'Django', 'News API', 'HTML', 'CSS'],
    liveLink: 'https://newsproject-fhcl.onrender.com',
    useCase: 'Enables users to stay updated with the latest news through a centralized platform.',
  },
  {
    title: 'GeoExplorer',
    description: 'Web application that allows users to enter a city name and view its geographical location on an interactive map.',
    technologies: ['Python', 'Django', 'Folium', 'OpenStreetMap API', 'HTML', 'CSS'],
    liveLink: 'https://geoexplorer-y4b2.onrender.com',
    useCase: 'Helps users explore and visualize geographic locations for educational purposes.',
  },
  {
    title: 'Student Management System (Tkinter)',
    description: 'GUI-based student management system with full CRUD functionality and input validation. Features data visualization to display student marks using charts.',
    technologies: ['Python', 'Tkinter', 'SQLite3', 'Matplotlib'],
    useCase: 'Helps educational institutes manage student records and analyze academic performance.',
  },
  {
    title: 'Newsletter Application',
    description: 'Email-based newsletter system that sends demo news and updates to registered clients.',
    technologies: ['Python', 'Django', 'SMTP', 'HTML'],
    useCase: 'Useful for distributing announcements and promotional content to subscribers.',
  },
  {
    title: 'Fully Functional Website',
    description: 'Multi-page web application featuring user login authentication, password change, and feedback form module.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'SQLite'],
    useCase: 'Base template for small business or portfolio websites requiring secure user access.',
  },
];

const mlProjects = [
  {
    title: 'Music Recommendation System',
    description: 'Recommendation model trained on music titles to suggest similar songs based on user input. Exposed through FastAPI endpoints.',
    technologies: ['Python', 'FastAPI', 'Scikit-learn', 'Machine Learning'],
    useCase: 'Enhances user experience in music platforms with personalized recommendations.',
  },
  {
    title: 'House Price Predictor',
    description: 'Regression model using a demo dataset to predict house prices based on key features.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Regression'],
    useCase: 'Assists buyers and real estate platforms in estimating property prices.',
  },
  {
    title: 'Additional ML Models',
    description: 'Multiple supervised learning models including Taxi Fare Prediction, Company Bankruptcy Classification, Drug Persistence Prediction (SVM), and LLM-based Chatbot Demo.',
    technologies: ['Python', 'Scikit-learn', 'SVM', 'Classification', 'Regression'],
    useCase: 'Practical ML applications in finance, healthcare, and transportation domains.',
  },
];

const tabs = [
  { key: 'java', label: 'Java Projects', icon: '☕' },
  { key: 'python', label: 'Python Projects', icon: '🐍' },
  { key: 'ml', label: 'ML Projects', icon: '🤖' },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('java');

  const projects = {
    java: javaProjects,
    python: pythonProjects,
    ml: mlProjects,
  };

  return (
    <section className="min-h-screen py-20 pt-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.key
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects[activeTab].map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full hover:bg-emerald-500 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                )}
              </div>

              <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm text-slate-400">
                  <span className="text-emerald-400 font-medium">Use Case:</span> {project.useCase}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/grvbnkr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium rounded-lg transition-colors border border-slate-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
