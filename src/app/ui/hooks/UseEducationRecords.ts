import { useQuery } from '@tanstack/react-query';
import { EducationRecordService } from '../services/EducationRecordService';
import { EducationalRecords } from '../types/types';

export const useEducationRecords = () => {
  return useQuery<EducationalRecords[]>({
    queryKey: ['education-records-qualification'],
    queryFn: () => EducationRecordService.getAllEducationalRecords(),
    staleTime: 1000 * 60 * 60,
  });
};
