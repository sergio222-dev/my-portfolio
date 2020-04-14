import React, { FunctionComponent } from 'react';
import Section from '../../templates/SectionTemplate';
import TitleTypo from '../../molecules/Typography/TitleTypo';
import { useTheme } from '@material-ui/core';
import Separator from '../../atoms/Separator';
import Box from '../../atoms/Box';
import TextTypo from '../../molecules/Typography/TextTypo';
import { useTranslation } from 'react-i18next';

const AboutDescriptionPage: FunctionComponent = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Section color={theme.colors.blueSecondary}>
      <Box direction={'column'} alignItems={'center'}>
        <Separator direction={'horizontal'} length={'100px'} wide={'5px'} />
      </Box>
      <TitleTypo variant="medium">{t('section1.title')}</TitleTypo>
      <TextTypo>{t('section1.subTitle')}</TextTypo>
    </Section>
  );
};

export default AboutDescriptionPage;
