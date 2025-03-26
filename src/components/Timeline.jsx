import React from 'react';

const timelineData = {
  education: [
    {
      title: 'Master of Science in Information Science',
      institution: 'University of North Texas',
      period: '2024 - 2026',
      description: 'GPA: 4.0',
    },
    {
      title: 'Bachelor in Electrical & Electronics Engineering',
      institution: 'Kakatiya University',
      period: '2018 - 2022',
      description: 'GPA: 3.6 | Major: Electrical and Electronics | Minor: Computer Science',
    },
  ],
  experience: [
    {
      title: 'Instructor',
      company: 'Ed Vedha',
      period: 'April 2023 - May 2024',
      description: 'Taught Front-end Development and AI & ML basics to multiple batches, focusing on practical knowledge through innovative approaches.',
    },
    {
      title: 'Systems Engineer Trainee',
      company: 'Infosys',
      period: 'July 2022 - January 2023',
      description: 'Worked as a Full-Stack web developer on real-world projects and maintained networking devices database.',
    },
    {
      title: 'Teaching Assistant',
      company: 'Kakatiya University',
      period: 'July 2021 - May 2022',
      description: 'Supported faculty for two semesters, graded assignments, proctored exams, and provided study materials.',
    },
    {
      title: 'Intern',
      company: 'Verzeo',
      period: 'May 2021 - July 2021',
      description: 'Completed 12 weeks internship on "Embedded Systems".',
    },
  ],
  projects: [
    {
      title: 'Fault Management System for Networking Devices',
      period: 'December 2023',
      description: 'Developed a web-based performance management system using Spring Boot and React.js, with efficient database design and responsive UI/UX.',
      link: 'https://github.com',
    },
    {
      title: 'Smart Home Automation with Solar Integration',
      period: 'May 2020',
      description: 'Developed a constant current controller for PV solar power generator integrated with grid and smart home automation using Alexa.',
      link: 'https://github.com',
    },
    {
      title: 'ATM Processing System',
      period: 'April 2019',
      description: 'Built an ATM system in Java with OOP principles, featuring secure authentication and real-time database integration.',
      link: 'https://github.com',
    },
  ],
};

const TimelineSection = ({ title, items }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">{title}</h3>
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-orange-500">
          <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-0" />
          <div className="mb-1 text-sm text-orange-500">{item.period}</div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {item.title}
          </h4>
          {item.institution && (
            <div className="text-gray-600 dark:text-gray-400">{item.institution}</div>
          )}
          {item.company && (
            <div className="text-gray-600 dark:text-gray-400">{item.company}</div>
          )}
          <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-orange-500 hover:text-orange-600"
            >
              View Project →
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Timeline = () => {
  return (
    <section className="py-20" id="timeline">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Journey
      </h2>
      <div className="bg-orange-50/80 dark:bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
        <TimelineSection title="Education" items={timelineData.education} />
        <TimelineSection title="Experience" items={timelineData.experience} />
        <TimelineSection title="Projects" items={timelineData.projects} />
      </div>
    </section>
  );
};

export default Timeline;