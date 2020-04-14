import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import DefaultTheme from './components/settings/themes';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import BaseTemplate, { BodyTemplate } from './components/templates/BaseTemplate';
import AboutPage from './components/pages/About';
import AboutDescriptionPage from './components/pages/AboutDescription/aboutDescriptionPage';
import Index from './components/pages/SkillPage';
import ProjectPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';
import NavbarSection from './components/pages/NavbarSection';

/** AWESOMEFONT ICONS */
library.add(fab, fas);

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={DefaultTheme}>
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
    </MuiThemeProvider>
  );
};

export default App;
