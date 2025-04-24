import { useQuery } from '@tanstack/react-query';
import { CertificationService } from '../services/CertificationService';
import { Certifications } from '../types/types';

export const useCertifications = () => {
  return useQuery<Certifications[]>({
    queryKey: ['certifications'],
    queryFn: () => CertificationService.getAllCertifications(),
    staleTime: 1000 * 60 * 60,
  });
};
