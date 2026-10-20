import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023-08-15',
      credentialId: 'AWS-SA-2023-001',
      description: 'Demonstrated ability to design distributed systems on AWS platform with high availability and scalability.',
      skills: ['AWS', 'Cloud Architecture', 'System Design', 'Security'],
      verifyUrl: '#',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023-06-20',
      credentialId: 'GCP-DEV-2023-002',
      description: 'Expertise in developing scalable applications on Google Cloud Platform using modern development practices.',
      skills: ['Google Cloud', 'Kubernetes', 'Docker', 'CI/CD'],
      verifyUrl: '#',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2023-03-10',
      credentialId: 'AZ-900-2023-003',
      description: 'Foundational knowledge of cloud services and how they are provided with Microsoft Azure.',
      skills: ['Azure', 'Cloud Services', 'Virtual Machines', 'Storage'],
      verifyUrl: '#',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022-12-05',
      credentialId: 'META-REACT-2022-004',
      description: 'Advanced React development skills including hooks, context, and modern React patterns.',
      skills: ['React', 'JavaScript', 'JSX', 'Component Design'],
      verifyUrl: '#',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      title: 'Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023-04-18',
      credentialId: 'CKA-2023-005',
      description: 'Certified to perform the responsibilities of Kubernetes administrators.',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Linux'],
      verifyUrl: '#',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2023-01-12',
      credentialId: 'DCA-2023-006',
      description: 'Expertise in containerization and Docker platform technologies.',
      skills: ['Docker', 'Containerization', 'Microservices', 'CI/CD'],
      verifyUrl: '#',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg'
    }
  ];

  // Duplicate certificates for seamless scrolling
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section id="certifications" className="py-20 bg-slate-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll hover:animate-none space-x-8 w-max">
            {duplicatedCertifications.map((cert, index) => (
              <Card key={index} className="bg-slate-900/80 border-slate-700 hover:border-purple-500 transition-all duration-300 flex-shrink-0 w-80">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-2 rounded-lg">
                      <Badge className="text-purple-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg mb-1">{cert.title}</CardTitle>
                      <CardDescription className="text-purple-400 font-semibold">
                        {cert.issuer}
                      </CardDescription>
                      <div className="flex items-center text-gray-300 mt-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{new Date(cert.date).toLocaleDateString()}</span>
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        ID: {cert.credentialId}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm">{cert.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full"
                  >
                    Verify Certificate
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;