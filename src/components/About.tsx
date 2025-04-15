
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            About Me
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-tech-blue"></div>
          </h2>
          
          <div className="space-y-6 text-gray-600">
            <p className="text-lg">
              I'm a <span className="text-tech-dark font-semibold">Senior Backend Engineer</span> with 10+ years of experience building 
              scalable systems across various industries including healthtech, fintech, logistics, and AI.
            </p>
            
            <p>
              My expertise spans designing and implementing high-performance microservices, event-driven architectures, 
              and cloud-native solutions. I'm adept in <span className="text-tech-dark font-medium">Python, Go, and JavaScript</span>, with
              a passion for building robust APIs and distributed systems that handle millions of requests.
            </p>
            
            <p>
              I thrive in remote-first environments and particularly enjoy working with mission-driven startups where 
              I can make a meaningful impact. My approach combines technical excellence with practical business solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <InfoItem label="Name" value="Quan Nguyen" />
              <InfoItem label="Email" value="thereds9111@gmail.com" />
              <InfoItem label="Location" value="Corona, CA" />
              <InfoItem label="Phone" value="(951) 444-9957" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-gray-500 font-medium">{label}: </span>
    <span className="text-tech-dark">{value}</span>
  </div>
);

export default About;
