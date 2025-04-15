
const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Education
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-tech-blue"></div>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-tech-dark">B.S. in Computer Science</h3>
                <p className="text-lg text-gray-600">University of California, Irvine</p>
              </div>
              <div className="text-right">
                <p className="text-tech-blue font-medium">09/2009 – 06/2013</p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tech-blue/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-md font-semibold text-gray-700">Computer Science Fundamentals</h4>
                  <p className="text-gray-600 mt-1">
                    Strong foundation in algorithms, data structures, operating systems, and software engineering principles.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tech-blue/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-md font-semibold text-gray-700">Software Development & Research</h4>
                  <p className="text-gray-600 mt-1">
                    Participated in web development and database systems projects, laying the foundation for backend engineering career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
