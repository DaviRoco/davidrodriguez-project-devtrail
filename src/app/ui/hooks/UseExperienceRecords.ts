import { useQuery } from '@tanstack/react-query';
import { ExperienceService } from '../services/ExperienceRecordService';
import { ExperienceRecords } from '../types/types';

export const useExperienceRecords = () => {
  return useQuery<ExperienceRecords[]>({
    queryKey: ['experience-records'],
    queryFn: () => ExperienceService.getAllExperienceRecords(),
    staleTime: 1000 * 60 * 60,
  });
};
