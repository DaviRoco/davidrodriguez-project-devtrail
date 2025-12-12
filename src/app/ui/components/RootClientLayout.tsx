'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { useCertifications } from '../hooks/UseCertifications';
import { useEducationRecords } from '../hooks/UseEducationRecords';
import { useExperienceRecords } from '../hooks/UseExperienceRecords';
import { useProjectCounts } from '../hooks/UseProjectCount';
import { useProjects } from '../hooks/UseProjects';
import Loader from './loader/Loader';

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  const LoaderWrapper = () => {
    const { isLoading: isLoadingExperience } = useExperienceRecords();
    const { isLoading: isLoadingProjects } = useProjectCounts();
    const { isLoading: isLoadingProjectList } = useProjects();
    const { isLoading: isLoadingEducation } = useEducationRecords();
    const { isLoading: isLoadingCerts } = useCertifications();

    const isLoading =
      isLoadingExperience ||
      isLoadingProjects ||
      isLoadingProjectList ||
      isLoadingEducation ||
      isLoadingCerts;

    return isLoading ? <Loader /> : <>{children}</>;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LoaderWrapper />
    </QueryClientProvider>
  );
}
