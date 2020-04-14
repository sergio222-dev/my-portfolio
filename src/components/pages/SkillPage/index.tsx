import React, { FunctionComponent } from 'react';
import SkillPageTemplate, { TitleTemplate, PapersSlot } from '../../templates/SkillPageTemplate/skillPageTemplate';
import iconBack from '../../../assets/img/005.svg';
import iconFront from '../../../assets/img/006.svg';
import TitleTypo from '../../molecules/Typography/TitleTypo';
import { useTheme } from '@material-ui/core';
import Box from '../../atoms/Box';
import SkillBox, { TitleSlot, ListTools, IconSlot, DescriptionSlot } from '../../organisms/SkillBox';
import { TypeBadThings } from './styles';
import Separator from '../../atoms/Separator';
import { useTranslation } from 'react-i18next';

const Index: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <SkillPageTemplate>
      <TitleTemplate>
        <Box>
          <Separator length={'100px'} direction={'horizontal'} wide={'5px'} />
        </Box>
        <TitleTypo variant="medium">{t('section2.title')}</TitleTypo>
      </TitleTemplate>

      <PapersSlot>
        <SkillBox variant="left">
          <IconSlot>
            <img color={'red'} src={iconFront} style={{ height: '4em' }} />
          </IconSlot>
          <TitleSlot>Frontend</TitleSlot>
          <DescriptionSlot>{t('section2.frontEndLang')}</DescriptionSlot>
          <ListTools>
            <>Typescript</>
            <>React</>
            <>Vue</>
            <>Gatsby</>
            <>Atomic Design</>
            <>Material UI</>
            <TypeBadThings>Web Design</TypeBadThings>
          </ListTools>
        </SkillBox>
        <SkillBox variant="right">
          <IconSlot>
            <img color={'red'} src={iconBack} style={{ height: '4em' }} />
          </IconSlot>
          <TitleSlot>Backend</TitleSlot>
          <DescriptionSlot>{t('section2.backEndLang')}</DescriptionSlot>
          <ListTools>
            <>Node.JS</>
            <>Firebase</>
            <>Symphony</>
          </ListTools>
        </SkillBox>
      </PapersSlot>
    </SkillPageTemplate>
  );
};

export default Index;
