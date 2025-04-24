import { useQuery } from '@tanstack/react-query';
import { ExperienceService } from '../../services/ExperienceRecordService';
import { ProjectService } from '../../services/ProjectService';
import { ExperienceRecords } from '../../types/types';
import { calculateTotalExperience } from '../../utils/ExperienceCalculatorUtil';

const Info = () => {
  // Fetch experience records
  const {
    data: experienceRecords = [],
    isLoading: isLoadingExperience,
  } = useQuery<ExperienceRecords[]>({
    queryKey: ['experience-records'],
    queryFn: () => ExperienceService.getAllExperienceRecords(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  // Fetch project count
  const {
    data: projectsCount = 0,
    isLoading: isLoadingProjects,
  } = useQuery<number>({
    queryKey: ['projects-count'],
    queryFn: () => ProjectService.getAllProjectsCount(),
    staleTime: 1000 * 60 * 60,
  });

  // Compute total experience (recalculated when data is fetched)
  const totalExperience = calculateTotalExperience(experienceRecords);

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
          <i className="bx bx-support about-icon"></i>
          <h3 className="about-title">Support</h3>
          <span className="about-subtitle">Online 24/7</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
