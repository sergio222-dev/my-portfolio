import React, { FunctionComponent } from 'react';
import createSlot, { useScope } from 'slottr';
import Section from '../SectionTemplate';
import Box from '../../atoms/Box';
import styles from './styles';

export const TitleAboutSlot = createSlot(React.Fragment);
export const DeveloperPhotoSlot = createSlot(React.Fragment);
export const SubTitleAboutSlot = createSlot(React.Fragment);

const AboutPageTemplate: FunctionComponent = ({ children }) => {
  const stylesClass = styles();
  const scope = useScope(children);
  return (
    <Section>
      <div className={stylesClass.containerBox}>
        <TitleAboutSlot.Slot scope={scope} />
        <Box direction={'column'} alignItems={'center'}>
          <DeveloperPhotoSlot.Slot scope={scope} />
        </Box>
        <SubTitleAboutSlot.Slot scope={scope} />
      </div>
    </Section>
  );
};

export default AboutPageTemplate;
