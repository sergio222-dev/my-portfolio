import React from 'react';
import AboutPage from './About';
import AboutDescriptionPage from './AboutDescription/aboutDescriptionPage';
import Index from './SkillPage';
import ProjectPage from './ProjectsPage';
import BaseTemplate, { NavbarHeader, BodyTemplate } from '../templates/BaseTemplate';
import ContactPage from './ContactPage';
import NavbarSection from './NavbarSection';

export default {
  title: 'site preview',
};

export const defaultPreview = () => (
  <BaseTemplate>
    <BodyTemplate>
      <NavbarSection />
      <AboutPage />
      <AboutDescriptionPage />
      <Index />
      <ProjectPage />
      <ContactPage />
    </BodyTemplate>
  </BaseTemplate>
);
