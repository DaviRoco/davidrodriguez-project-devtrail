import { useQuery } from '@tanstack/react-query';
import { SkillService } from '../services/SkillService';
import { Skills } from '../types/types';

export const useSkillsCategorized = () => {
  return useQuery<{ [category: string]: Skills[] }>({
    queryKey: ['skills-categorized'],
    queryFn: () => SkillService.getAllSkillsByCategory(),
    staleTime: 1000 * 60 * 60,
  });
};
