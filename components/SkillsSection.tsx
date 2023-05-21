import React from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/skills');
  };

  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <h2 style={{ marginTop: '-10px' }}>Skills</h2>
      <div className="skills-content">
        <p>
          With programming experience from Safety Power Inc, I have honed my technical skills and problem-solving abilities. Additionally, my sales experience at UPS Canada has strengthened my communication, negotiation, and relationship-building skills.
        </p>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          See More
        </Button>
      </div>
      <style jsx>{`
        #skills {
          padding: 20px 0;
        }

        h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: -20px;
        }

        .skills-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 20px;
        }

        p {
          margin-bottom: 20px;
          font-size: 18px;
          line-height: 1.5;
        }

        .MuiButton-root {
          display: block;
          margin: 0 auto;
          max-width: 200px;
          margin-top: 20px;
        }
      `}</style>
    </motion.div>
  );
};

export default SkillsSection;