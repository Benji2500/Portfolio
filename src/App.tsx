import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureMatrix } from './components/ArchitectureMatrix';
import { ExperienceSection } from './components/ExperienceSection';
import { ArticlesSection } from './components/ArticlesSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { GitHubPushHub } from './components/GitHubPushHub';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [gitHubHubOpen, setGitHubHubOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* 3-Zone Navigation Header */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onOpenGitHubHub={() => setGitHubHubOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Split-Screen Hero & Metric Strip */}
        <Hero
          onOpenContact={() => setContactModalOpen(true)}
          onOpenGitHubHub={() => setGitHubHubOpen(true)}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* 01. Production Works - Bento Grid */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 02. Technical Architecture & Live Interactive Simulator */}
        <ArchitectureMatrix />

        {/* 03. Professional Career & Milestones */}
        <ExperienceSection />

        {/* 04. Technical Publications & Essays */}
        <ArticlesSection />
      </main>

      {/* Editorial Footer */}
      <Footer
        onOpenGitHubHub={() => setGitHubHubOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <GitHubPushHub
        isOpen={gitHubHubOpen}
        onClose={() => setGitHubHubOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
