import React, { FunctionComponent } from 'react';
import Section from '../SectionTemplate';
import createSlot, { useScope } from 'slottr';
import Box from '../../atoms/Box';
import styles from './styles';
import clsx from 'classnames';

export const PaperSlotOne = createSlot(React.Fragment);
export const PaperSlotTwo = createSlot(React.Fragment);
export const PapersSlot = createSlot(React.Fragment);
export const TitleTemplate = createSlot(React.Fragment);
export const BadThings = createSlot(React.Fragment);

const SkillPageTemplate: FunctionComponent = ({ children }) => {
  const stylesClass = styles();
  const scope = useScope(children);
  const paperOneClass = clsx(stylesClass.boxSkill, stylesClass.slotOne);
  const paperTwoClass = clsx(stylesClass.boxSkill, stylesClass.slotTwo);
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
