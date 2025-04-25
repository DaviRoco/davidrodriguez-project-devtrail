import { ExperienceRecords } from '../../types/types';
import { calculateTotalExperience } from '../../utils/ExperienceCalculatorUtil';

type InfoProps = {
  experience: ExperienceRecords[];
  isLoadingExperience: boolean;
  projectsCount: number;
  isLoadingProjects: boolean;
};

const Info = ({
  experience,
  isLoadingExperience,
  projectsCount,
  isLoadingProjects,
}: InfoProps) => {
  // Compute total experience (recalculated when data is fetched)
  const totalExperience = calculateTotalExperience(experience);

  return (
    <div>
      <div className="about-info grid">
        <div className="about-box">
          <i className="bx bx-award about-icon"></i>
          <h3 className="about-title">Experience</h3>
          <span className="about-subtitle">
            {isLoadingExperience ? 'Loading...' : totalExperience}
          </span>
        </div>

        <div className="about-box">
          <i className="bx bx-briefcase-alt about-icon"></i>
          <h3 className="about-title">Completed</h3>
          <span className="about-subtitle">
            {isLoadingProjects ? 'Loading...' : `${projectsCount} + Projects`}
          </span>
        </div>

        <div className="about-box">
          <i className="bx bx-code about-icon"></i>
          <h3 className="about-title">Role</h3>
          <span className="about-subtitle">Full-Stack Development</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
