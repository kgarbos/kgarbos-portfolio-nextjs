import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/about');
  };

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-content">
        <div className="about-text">
          <h3>Welcome!</h3>
          <p>
            I'm Krzysztof Garbos, a passionate software developer based in Toronto, Canada. With a focus on web development using
            technologies like React, TypeScript, and Next.js, I create innovative and user-friendly applications.
          </p>
          <p>
            I enjoy turning ideas into reality and solving complex problems with elegant solutions. With a strong
            foundation in JavaScript and a continuous drive to learn and grow, I strive to deliver high-quality
            software that makes a positive impact.
          </p>
          <p>
            When I'm not coding, you can find me staying active and playing tennis. I believe that a healthy body and
            mind are essential for productivity and creativity.
          </p>
        </div>
        <div className="about-image">
          <img src="/me.jpg" alt="Your Name" />
        </div>
      </div>
      <style jsx>{`
        #about {
          padding: 60px 0;
          background-color: #f9f9f9;
        }

        .about-content {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }

        .about-image {
          max-width: 100%;
          text-align: center;
        }

        .about-image img {
          display: inline-block;
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .about-text {
          text-align: center;
          max-width: 600px;
          font-size: 16px;
        }

        h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 20px;
          font-size: 18px;
          line-height: 1.5;
        }
      `}</style>
    </motion.div>
  );
};

export default AboutSection;