import React from 'react';
import { useTheme } from '@material-ui/core';
import AboutPageTemplate, {
  DeveloperPhotoSlot,
  TitleAboutSlot,
  SubTitleAboutSlot,
} from '../../templates/AboutPageTemplate';
import Typography from '../../atoms/Typography';
import TitleTypo from '../../atoms/Typography/TitleTypo';
import DeveloperPhoto from '../../organisms/DeveloperPhoto';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FunctionComponent = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <AboutPageTemplate>
      <TitleAboutSlot>
        <TitleTypo variant="big">{t('mainSection.title')}</TitleTypo>
      </TitleAboutSlot>
      <DeveloperPhotoSlot>
        <DeveloperPhoto />
      </DeveloperPhotoSlot>
      <SubTitleAboutSlot>
        <Typography color={theme.colors.white} variant={'h3'}>
          {t('mainSection.subTitle')}
        </Typography>
      </SubTitleAboutSlot>
    </AboutPageTemplate>
  );
};

export default AboutPage;
