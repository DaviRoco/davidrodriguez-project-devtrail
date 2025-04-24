'use client';

import styles from './page.module.css';
import About from './ui/components/about/About';
import Contact from './ui/components/contact/Contact';
import Footer from './ui/components/footer/Footer';
import Header from './ui/components/header/Header';
import Home from './ui/components/home/Home';
import Portfolio from './ui/components/portfolio/Portfolio';
import Qualification from './ui/components/qualification/Qualification';
import ScrollUp from './ui/components/scrollup/ScrollUp';
import Skills from './ui/components/skills/Skills';
import Solutions from './ui/components/solutions/Solutions';
import { useCertifications } from './ui/hooks/UseCertifications';
import { useEducationRecords } from './ui/hooks/UseEducationRecords';
import { useExperienceRecords } from './ui/hooks/UseExperienceRecords';
import { useProjectCounts } from './ui/hooks/UseProjectCount';
import { useProjects } from './ui/hooks/UseProjects';
import { useSkillsCategorized } from './ui/hooks/UseSkillsCategorized';

export default function App() {
  const { data: experienceRecords = [], isLoading: isLoadingExperience } =
    useExperienceRecords();

  const { data: projectsCount = 0, isLoading: isLoadingProjects } =
    useProjectCounts();

  const { data: projects = [] } = useProjects();

  const { data: educationalRecords = [] } = useEducationRecords();

  const { data: certifications = [] } = useCertifications();

  const { data: skillsByCategory } = useSkillsCategorized();

  return (
    <div className={styles.page}>
      <Header />
      <main className="main">
        <Home />
        <About
          experience={experienceRecords}
          isLoadingExperience={isLoadingExperience}
          projectsCount={projectsCount}
          isLoadingProjects={isLoadingProjects}
        />
        <Skills skillsByCategory={skillsByCategory} />
        <Solutions />
        <Portfolio projects={projects} />
        <Qualification
          experience={experienceRecords}
          education={educationalRecords}
          certifications={certifications}
        />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}
