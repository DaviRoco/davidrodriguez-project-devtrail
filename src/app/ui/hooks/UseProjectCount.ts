import { useQuery } from '@tanstack/react-query';
import { ProjectService } from '../services/ProjectService';

export const useProjectCounts = () => {
  return useQuery<number>({
    queryKey: ['projects-count'],
    queryFn: () => ProjectService.getAllProjectsCount() as Promise<number>,
    staleTime: 1000 * 60 * 60,
  });
};
