import React from 'react';
import { motion } from 'framer-motion';
import { BookMarked, MonitorPlay, FileText } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Free Courses",
      icon: <BookMarked className="w-6 h-6 text-blue-500" />,
      links: [
        { name: "AWS Cloud Practitioner Essentials", url: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/" },
        { name: "Docker for Beginners - FreeCodeCamp", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
        { name: "DevOps Prerequisites Course", url: "https://kodekloud.com/courses/devops-pre-requisite-course/" }
      ]
    },
    {
      title: "YouTube Channels",
      icon: <MonitorPlay className="w-6 h-6 text-red-500" />,
      links: [
        { name: "TechWorld with Nana", url: "https://www.youtube.com/c/TechWorldwithNana" },
        { name: "NetworkChuck (Networking/Linux)", url: "https://www.youtube.com/c/NetworkChuck" },
        { name: "Stephane Maarek (AWS)", url: "https://www.youtube.com/c/StephaneMaarek" }
      ]
    },
    {
      title: "Official Documentation",
      icon: <FileText className="w-6 h-6 text-green-500" />,
      links: [
        { name: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
        { name: "Kubernetes Docs", url: "https://kubernetes.io/docs/home/" },
        { name: "Terraform Tutorials", url: "https://developer.hashicorp.com/terraform/tutorials" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
        <p className="text-gray-500 dark:text-gray-400">Curated, beginner-friendly content to accelerate your learning.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {resourceCategories.map((cat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className="glassmorphism p-8 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                {cat.icon}
              </div>
              <h2 className="text-2xl font-bold">{cat.title}</h2>
            </div>
            <ul className="space-y-4">
              {cat.links.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex flex-col p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                  >
                    <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors">
                      {link.name}
                    </span>
                    <span className="text-sm text-gray-500 truncate mt-1">{link.url}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
