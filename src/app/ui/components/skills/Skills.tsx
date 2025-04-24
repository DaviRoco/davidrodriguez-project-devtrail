'use client';
import { useSkillsCategorized } from '../../hooks/UseSkillsCategorized';
import type { Skills } from '../../types/types';
import './skills.css';

const Skills = () => {
  const {
    data: skillsByCategory = [],
  } = useSkillsCategorized();

  const orderedCategories = [
    'Programming Languages',
    'Frameworks and Libraries',
    'Tools and Services',
    'Databases',
  ];

  const categoryDescriptions: { [key: string]: string } = {
    'Programming Languages':
      'Languages I use to build applications and solve problems.',
    'Frameworks and Libraries':
      'My experience with modern frameworks and libraries.',
    Databases: 'Database systems I have worked with.',
    'Tools and Services': 'Additional tools and platforms I’m proficient with.',
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">
        A categorized overview of the technologies and tools I work with
      </span>

      <div className="skills-container container">
        {orderedCategories.map((category) => {
          const skills = (skillsByCategory as { [category: string]: Skills[] })[category];
          if (!skills) return null;

          return (
            <div className="skills-content" key={category}>
              <h3 className="skills-category-title">{category}</h3>
              <p className="skills-category-description">
                {categoryDescriptions[category]}
              </p>
              <div className="skills-box">
                <div className="skills-group">
                  {skills
                    .sort((a: { _name: string; }, b: { _name: string; }) => a._name.localeCompare(b._name))
                    .map((skill: Skills) => (
                      <div className="skills-data" key={skill._id}>
                        <i
                          className="bx bx-badge-check"
                          aria-label="Check icon"
                        ></i>
                        <div>
                          <h3 className="skills-name">{skill._name}</h3>
                          <span className="skills-level">
                            {skill._level || 'N/A'}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
