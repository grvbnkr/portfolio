export default function About() {
  return (
    <section className="min-h-screen py-20 pt-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Detail-oriented <span className="text-emerald-400 font-medium">Java Developer</span> with a strong foundation in Object-Oriented Programming and hands-on experience in building scalable applications using Spring Boot. Skilled in developing RESTful APIs, GUI-based applications, and backend systems while following clean code and best practices.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Also proficient as a <span className="text-emerald-400 font-medium">Python Developer</span> with expertise in building data-driven applications, machine learning models, and web-based solutions using Python frameworks and libraries.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Passionate about problem-solving, continuous learning, and delivering high-quality projects with efficient, maintainable solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-emerald-400 mb-4">Education</h4>
              <div>
                <h5 className="text-white font-medium">B.E. in Computer Science Engineering</h5>
                <p className="text-slate-400 text-sm">(Artificial Intelligence & Machine Learning)</p>
                <p className="text-slate-300 mt-2">University of Mumbai</p>
                <p className="text-slate-400 text-sm">Bharat College of Engineering, Thane</p>
                <p className="text-emerald-400 text-sm mt-1">2021 - 2024</p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-emerald-400 mb-4">Location</h4>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-300">Wagle Estate, Thane (West), Maharashtra</span>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-emerald-400 mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:grvbnkr@gmail.com" className="text-slate-300 hover:text-emerald-400 transition-colors">grvbnkr@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919892385317" className="text-slate-300 hover:text-emerald-400 transition-colors">+91 9892385317</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
