const technicalSkills = [
  { category: 'Languages', skills: ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3'] },
  { category: 'Java Ecosystem', skills: ['Core Java', 'Advanced Java', 'Spring', 'Spring Boot', 'Spring Security', 'Hibernate', 'JDBC', 'Servlet', 'JSP'] },
  { category: 'Python Ecosystem', skills: ['Django', 'Flask', 'FastAPI', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Tkinter'] },
  { category: 'Databases', skills: ['MySQL', 'SQLite3','MongoDB'] },
  { category: 'ML & Data Science', skills: ['Supervised Learning', 'Unsupervised Learning', 'Model Training', 'Feature Engineering', 'Data Cleaning', 'Data Analysis'] },
  { category: 'Web & Frontend', skills: ['ReactJS', 'REST APIs', 'JWT'] },
  { category: 'DevOps & Tools', skills: ['Docker', 'Git/GitHub', 'Apache Tomcat', 'Eclipse IDE','IntelliJ IDE'] },
  { category: 'Core Concepts', skills: ['OOP', 'DSA (Basics)', 'Exception Handling', 'File Handling'] },
];

const softSkills = [
  { name: 'Problem-Solving', icon: '🧩' },
  { name: 'Analytical Thinking', icon: '🔍' },
  { name: 'Quick Learner', icon: '📚' },
  { name: 'Good Listener', icon: '👂' },
  { name: 'Adaptability', icon: '🔄' },
  { name: 'Time Management', icon: '⏰' },
];

export default function Skills() {
  return (
    <section className="min-h-screen py-20 pt-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category) => (
              <div
                key={category.category}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <h4 className="text-emerald-400 font-semibold mb-4">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-800 rounded-xl p-4 text-center border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <span className="text-3xl mb-2 block">{skill.icon}</span>
                <span className="text-slate-300 text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
