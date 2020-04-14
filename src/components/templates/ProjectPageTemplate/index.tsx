import React, { FunctionComponent } from 'react';
import SectionTemplate from '../SectionTemplate';
import createSlot, { useScope } from 'slottr';
import Box from '../../atoms/Box';
import ProjectCardListTemplate from '../ProjectCardListTemplate';
import styles from './styles';
import { useTheme } from '@material-ui/core';

export const TitlePage = createSlot(React.Fragment);
export const DescriptionPage = createSlot(React.Fragment);
export const ContentPage = createSlot(React.Fragment);

const ProjectPageTemplate: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const scope = useScope(children);
  const stylesClass = styles();
  return (
    <SectionTemplate color={theme.colors.blue}>
      <Box direction={'column'} alignItems={'center'}>
        <TitlePage.Slot scope={scope} />
        <DescriptionPage.Slot scope={scope} />
      </Box>
      <Box
        alignItems={'center'}
        wrap={'wrap'}
        justify={'space-evenly'}
        className={stylesClass.ProjectPageTemplateBoxRoot}
      >
        <ContentPage.Slot scope={scope} />
      </Box>
    </SectionTemplate>
  );
};

export default ProjectPageTemplate;
