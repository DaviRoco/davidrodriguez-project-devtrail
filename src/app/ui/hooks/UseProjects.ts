import { useQuery } from '@tanstack/react-query';
import { ProjectService } from '../services/ProjectService';
import { Projects } from '../types/types';

export const useProjects = () => {
  return useQuery<Projects[]>({
      queryKey: ['projects'],
      queryFn: () => ProjectService.getAllProjects() as Promise<Projects[]>,
      staleTime: 1000 * 60 * 60,
    });
};
