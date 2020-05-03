import React from 'react';
import createSlot, { useScope } from 'slottr';
import TitleTypo from '../../atoms/Typography/TitleTypo';
import List from '../../atoms/List';
import Box from '../../atoms/Box';
import {
  HeaderSection,
  LangSection,
  ToolsSection,
  SkillBoxStylesProps,
  useContainerSkillBoxClasses,
  StyledListItem,
} from './styles';
import { useTheme } from '@material-ui/core';
import TextTypo from '../../atoms/Typography/TextTypo';
import { useTranslation } from 'react-i18next';

export const IconSlot = createSlot(React.Fragment);
export const TitleSlot = createSlot(React.Fragment);
export const DescriptionSlot = createSlot(React.Fragment);
export const ListTools = createSlot(
  ({ children }): React.ReactElement => (
    <>{children && React.Children.map(children, child => <StyledListItem>{child}</StyledListItem>)}</>
  ),
);

const SkillBox: React.FC<SkillBoxStylesProps> = ({ children, variant }) => {
  const containerClasses = useContainerSkillBoxClasses({ variant });
  const theme = useTheme();
  const scope = useScope(children);
  const { t } = useTranslation();
  return (
    <div className={containerClasses.root}>
      <HeaderSection>
        <Box>
          <IconSlot.Slot scope={scope} />
        </Box>
        <TitleTypo color={theme.colors.white}>
          <TitleSlot.Slot scope={scope} />
        </TitleTypo>
      </HeaderSection>
      <LangSection>
        <TitleTypo>{t('section2.languages')}</TitleTypo>
        <TextTypo>
          <DescriptionSlot.Slot scope={scope} />
        </TextTypo>
      </LangSection>
      <ToolsSection>
        <TitleTypo>{t('section2.tools')}</TitleTypo>
        <List>
          <ListTools.Slot scope={scope} />
        </List>
      </ToolsSection>
    </div>
  );
};

export default SkillBox;
