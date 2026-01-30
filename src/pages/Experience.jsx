export default function Experience() {
  return (
    <section className="min-h-screen py-20 pt-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-emerald-500">
            <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-0"></div>
            
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-semibold text-white">Python Developer Intern</h3>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full">
                  Aug - Sep 2023
                </span>
              </div>
              
              <h4 className="text-emerald-400 font-medium mb-4">
                Mera Advance Engineering, Thane
              </h4>

              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-1">▹</span>
                  <span>Designed and developed a Python Tkinter-based GUI application with user-friendly components such as labels, text fields, and radio buttons.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-1">▹</span>
                  <span>Implemented database integration using SQLite3, enabling robust CRUD operations and data persistence.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-1">▹</span>
                  <span>Visualized student performance data using Matplotlib, improving clarity and analytical insights.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-1">▹</span>
                  <span>Applied OOP principles, data validation, and debugging throughout the project lifecycle to ensure reliability and maintainability.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {['Python', 'Tkinter', 'SQLite3', 'Matplotlib', 'OOP'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Looking for opportunities section */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl p-8 border border-emerald-500/20 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Open to New Opportunities</h3>
            <p className="text-slate-300 mb-4">
              I'm actively seeking full-time opportunities as a Java Developer or Python Developer where I can contribute my skills and continue to grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:grvbnkr@gmail.com"
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/gaurav-bankar-"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium rounded-lg transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
