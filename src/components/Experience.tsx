
import { cn } from "@/lib/utils";

interface JobProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
  isLast?: boolean;
}

const Experience = () => {
  const jobs: JobProps[] = [
    {
      title: "Senior Backend Engineer",
      company: "Mochi Health",
      period: "08/2022 – present",
      responsibilities: [
        "Led backend development of telehealth infrastructure powering Mochi's clinical obesity care platform.",
        "Built Node.js, FastAPI microservices for patient onboarding, medication management, and care coordination.",
        "Integrated with Stripe for payments, Auth0 for authentication, and Twilio for notifications.",
        "Developed internal admin tooling and automated patient intake pipelines.",
        "Contributed to compliance workflows to support HIPAA and SOC 2 readiness."
      ]
    },
    {
      title: "Senior Backend Engineer",
      company: "ChannelApe",
      period: "07/2018 – 06/2022",
      responsibilities: [
        "Designed microservices in Node.js for high-volume inventory and order sync across Shopify, Amazon, and BigCommerce.",
        "Implemented RabbitMQ-based task queues for real-time data syncing, handling 10M+ messages/month.",
        "Deployed Dockerized services on Kubernetes clusters using Helm.",
        "Collaborated with cross-functional teams to enhance developer tooling and internal platform APIs.",
        "Mentored junior engineers and led architectural reviews across backend initiatives."
      ]
    },
    {
      title: "Backend Software Engineer",
      company: "Zest AI (formerly ZestFinance)",
      period: "06/2015 – 06/2018",
      location: "Burbank, CA",
      responsibilities: [
        "Built backend services in Java/Spring Boot for ingesting and scoring non-traditional credit data.",
        "Integrated ML scoring models into real-time decision APIs used by financial institutions.",
        "Deployed Kafka pipelines for streaming risk data and scaled underwriting systems for peak load.",
        "Strengthened security, logging, and audit systems to ensure compliance with lending regulations."
      ]
    },
    {
      title: "Junior Backend Engineer",
      company: "ZendyHealth",
      period: "07/2013 – 05/2015",
      location: "Los Angeles, CA",
      responsibilities: [
        "Developed Django-based backend for a healthcare bidding platform allowing patients to negotiate procedure costs.",
        "Built secure RESTful endpoints and automated test suites for core appointment logic.",
        "Worked with product team to ensure HIPAA-compliant architecture and secure data flows.",
        "Assisted in AWS deployment and cost optimization for staging and production environments."
      ],
      isLast: true
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Professional Experience
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-tech-blue"></div>
        </h2>

        <div className="max-w-4xl mx-auto mt-16">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

const JobCard = ({ title, company, period, location, responsibilities, isLast }: JobProps) => {
  return (
    <div className="relative pl-8 pb-12">
      {/* Timeline stem */}
      {!isLast && (
        <div className="absolute left-0 top-1.5 bottom-0 w-px bg-tech-blue/30"></div>
      )}
      
      {/* Timeline node */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-tech-blue transform -translate-x-1/2 border-2 border-white"></div>
      
      <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-xl font-bold text-tech-dark">
          {title}
        </h3>
        <span className="text-lg font-semibold text-tech-blue">
          {company}
        </span>
        {location && (
          <span className="text-gray-500 text-sm ml-auto order-last md:order-none">
            {location}
          </span>
        )}
        <span className={cn(
          "text-sm text-gray-500",
          location ? "md:ml-auto" : "ml-auto"
        )}>
          {period}
        </span>
      </div>
      
      <ul className="mt-3 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-tech-blue mr-2 mt-1.5">•</span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
