
interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["Python", "Go", "JavaScript (Node.js)", "Java", "SQL"]
    },
    {
      name: "Cloud & Infrastructure",
      skills: ["AWS (Lambda, ECS, S3)", "Docker", "Kubernetes", "Terraform"]
    },
    {
      name: "Messaging & Event Systems",
      skills: ["Kafka", "RabbitMQ"]
    },
    {
      name: "Frameworks",
      skills: ["FastAPI", "Flask", "Django", "Spring Boot", "Express"]
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    },
    {
      name: "DevOps/CI-CD",
      skills: ["GitHub Actions", "Jenkins", "Terraform"]
    },
    {
      name: "Others",
      skills: ["REST APIs", "Microservices", "OpenAPI", "OAuth2", "HIPAA Compliance"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Technical Skills
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-tech-blue"></div>
        </h2>

        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ category }: { category: SkillCategory }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <h3 className="text-xl font-bold text-tech-dark mb-4 pb-2 border-b border-gray-100">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2 mt-3">
        {category.skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
