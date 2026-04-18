import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const tools = [
    {
      category: "Containerization & Orchestration",
      items: [
        { name: 'Docker', desc: 'Package software into standardized units called containers.', link: 'https://docs.docker.com/' },
        { name: 'Kubernetes', desc: 'Automate deploying, scaling, and operating application containers.', link: 'https://kubernetes.io/docs/home/' }
      ]
    },
    {
      category: "CI/CD & Automation",
      items: [
        { name: 'GitHub Actions', desc: 'Automate your software workflows, now with world-class CI/CD.', link: 'https://docs.github.com/en/actions' },
        { name: 'Jenkins', desc: 'The leading open source automation server.', link: 'https://www.jenkins.io/doc/' }
      ]
    },
    {
      category: "Infrastructure as Code",
      items: [
        { name: 'Terraform', desc: 'Build, change, and version infrastructure safely and efficiently.', link: 'https://developer.hashicorp.com/terraform/docs' },
        { name: 'Ansible', desc: 'Radically simple IT automation system.', link: 'https://docs.ansible.com/' }
      ]
    }
  ];

  const awsServices = [
    { name: 'EC2', full: 'Elastic Compute Cloud', desc: 'Scalable compute capacity in the AWS cloud.', useCase: 'Hosting web servers, APIs, and databases.' },
    { name: 'S3', full: 'Simple Storage Service', desc: 'Object storage built to retrieve any amount of data from anywhere.', useCase: 'Hosting static websites, storing backups and images.' },
    { name: 'IAM', full: 'Identity and Access Management', desc: 'Securely manage access to services and resources.', useCase: 'Creating users, roles, and defining permissions.' },
    { name: 'VPC', full: 'Virtual Private Cloud', desc: 'Provision a logically isolated section of the AWS Cloud.', useCase: 'Building private networks, public/private subnets.' },
    { name: 'RDS', full: 'Relational Database Service', desc: 'Set up, operate, and scale a relational database in the cloud.', useCase: 'Managed PostgreSQL or MySQL databases.' },
    { name: 'Lambda', full: 'AWS Lambda', desc: 'Run code without thinking about servers or clusters.', useCase: 'Event-driven serverless computing.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Tech Stack & Tools</h1>
        <p className="text-gray-500 dark:text-gray-400">The industry standard tools and AWS services every DevOps engineer should know.</p>
      </div>

      {/* DevOps Tools */}
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
         DevOps Tools
      </h2>
      <div className="space-y-12 mb-20">
        {tools.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-6 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-2">{section.category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {section.items.map((tool, i) => (
                <motion.div whileHover={{ scale: 1.02 }} key={i} className="glassmorphism p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h4 className="text-2xl font-bold mb-2">{tool.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.desc}</p>
                  <a href={tool.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center gap-1">
                    Official Documentation <span>&rarr;</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* AWS Services */}
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
         Core AWS Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awsServices.map((service, idx) => (
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.3, delay: idx * 0.1 }}
             key={idx} 
             className="glassmorphism p-6 rounded-xl border-t-4 border-t-orange-500 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-2xl font-bold text-orange-600 dark:text-orange-400">{service.name}</h4>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{service.full}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{service.desc}</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm border border-gray-200 dark:border-gray-700">
              <span className="font-bold block mb-1">Use Case:</span>
              <span className="text-gray-600 dark:text-gray-400">{service.useCase}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
