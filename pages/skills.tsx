import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const skills = [
  {
    category: 'Frontend', skills: [
      { name: 'HTML/CSS', logo: '/htmlcss-logo.png' },
      { name: 'JavaScript', logo: '/js-logo.png' },
      { name: 'TypeScript', logo: '/typescript-logo.png' },
      { name: 'React', logo: '/react-logo.png' },
      { name: 'Next.js', logo: '/nextjs-logo.png' },
      { name: 'jQuery', logo: '/jquery-logo.png' },
    ]
  },
  {
    category: 'Backend', skills: [
      { name: 'Node.js', logo: '/node-logo.png' },
      { name: 'Express.js', logo: '/expressjs-logo.png' },
      { name: 'MongoDB', logo: '/mongodb-logo.png' },
      { name: 'MySQL', logo: '/mysql-logo.png' },
    ]
  },
  {
    category: 'Other', skills: [
      { name: 'Python', logo: '/python-logo.png' },
      { name: 'PHP', logo: '/php-logo.png' },
      { name: 'Linux', logo: '/linux-logo.png' },
      { name: 'Sales', logo: '/salesforce-logo.png' },
    ]
  }
];

const workExperience = [
  {
    company: 'Safety Power Inc',
    date: 'Sept, 2021 – May, 2023',
    position: 'Software Developer',
    location: 'Mississauga, ON',
    responsibilities: [
      'Developed internal tools/apps with continuous feedback from internal stakeholders (sales, techs, etc).',
      'Front-end development consisted of jQuery, Bootstrap, and an internal JS framework for generating web-apps/components.',
      'Back-end development consisted of PHP routing, authentication, and developing useful services/functions for the MongoDB database.',
      'Implemented software changes to the HMI controller software using PHP and Linux.',
      'Built a shipping module that resulted in all employees being able to print documents faster, enabled company-wide tracking, and allowed managers to keep track of project-related items.',
    ],
  },
  {
    company: 'UPS Canada',
    date: 'Aug, 2017 – Aug, 2019',
    position: 'Account Manager',
    location: 'Mississauga & Burlington, ON',
    responsibilities: [
      'Sold services within the UPS Portfolio which included air/ocean freight, import brokerage, small package shipping.',
      'Conducted product demos on how to use proprietary software (Flex Global View) and web/mobile shipping platforms.',
      'Demonstrated strong conflict resolution skills, defusing tense situations with clients to find win-win solutions.',
    ],
  },
];

const Skills = () => {
  const SkillLogo = ({ logo }) => (
    <div className="skill-logo">
      {logo ? <Image src={logo} alt="Skill Logo" width={150} height={150} style={{objectFit:"contain"}} /> : null}
    </div>
  );


  return (
    <>
      <Head>
        <title>Krzysztof Garbos - Skills</title>
      </Head>
      <Header />
      <main>
        <h1>Skills</h1>
        <motion.section className="work-experience-section" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="work-experience-container">
            <h2>Work Experience</h2>
            {workExperience.map((experience, index) => (
              <div key={index} className="work-experience-card">
                <div className="work-experience-header">
                  <h3>{experience.company}</h3>
                  <span>{experience.date}</span>
                </div>
                <div className="work-experience-details">
                  <p>{experience.position}</p>
                  <p>{experience.location}</p>
                  <ul>
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
        <motion.section initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="skills-container">
            {skills.map((category, index) => (
              <div key={index} className="skills-category">
                <h2>{category.category} Skills</h2>
                <div className="skill-gallery">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <SkillLogo logo={skill.logo} />
                      <div className="skill-text">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
      <style jsx>{`
        .work-experience-section {
          background-color: #f5f5f5;
        }

        .work-experience-container {
          padding: 20px;
        }

        .work-experience-card {
          background-color: #ffffff;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .work-experience-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .work-experience-header h3 {
          font-size: 20px;
          margin: 0;
        }

        .work-experience-header span {
          font-size: 14px;
          color: #777777;
        }

        .work-experience-details p {
          margin: 0;
        }

        .work-experience-details ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        .work-experience-details li {
          margin-bottom: 5px;
        }

        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skills-category {
          display: flex;
          flex-direction: column;
        }

        .skill-gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px;
          background: #F7F7F7;
          box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          transition: all 0.2s ease-in-out;
        }
        

        .skill-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.2);
        }

        .skill-logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .skill-text {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }
      `}</style>
    </>
  );
};

export default Skills;