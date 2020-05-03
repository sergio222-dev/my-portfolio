import React, { FunctionComponent } from 'react';
import Section from '../SectionTemplate';
import createSlot, { useScope } from 'slottr';
import Box from '../../atoms/Box';
import styles from './styles';

export const PapersSlot = createSlot(React.Fragment);
export const TitleTemplate = createSlot(React.Fragment);
export const BadThings = createSlot(React.Fragment);

const SkillPageTemplate: FunctionComponent = ({ children }) => {
  const stylesClass = styles();
  const scope = useScope(children);

  return (
    <Section>
      <Box direction={'column'} alignItems={'center'} spaced>
        <TitleTemplate.Slot scope={scope} />
      </Box>
      <div className={stylesClass.container}>
        <BadThings.Slot scope={scope} />
        <PapersSlot.Slot scope={scope} />
      </div>
    </Section>
  );
};

export default SkillPageTemplate;
