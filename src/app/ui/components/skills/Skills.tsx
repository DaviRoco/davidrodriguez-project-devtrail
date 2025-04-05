'use client';
import { useCallback, useEffect, useState } from 'react';
import { SkillsService } from '../../services/SkillsService';
import type { Skills } from '../../types/types';
import './skills.css';

const Skills = () => {
  const [skillsByCategory, setSkillsByCategory] = useState<{ [category: string]: Skills[] }>({});

  const fetchSkills = useCallback(async () => {
    try {
      const skillsGrouped = await SkillsService.getAllSkillsByCategory();
      setSkillsByCategory(skillsGrouped);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  }, []);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Full-Stack level</span>

      <div className="skills-container container grid">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div className="skills-content" key={category}>
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-box">
              <div className="skills-group">
                {skills
                  .sort((a, b) => a._name.localeCompare(b._name))
                  .map((skill) => (
                    <div className="skills-data" key={skill._id}>
                      <i className="bx bx-badge-check" aria-label="Check icon"></i>
                      <div>
                        <h3 className="skills-name">{skill._name}</h3>
                        <span className="skills-level">{skill._level || 'N/A'}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
