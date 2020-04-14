import React, { FunctionComponent } from 'react';
import ProjectPageTemplate, { ContentPage, TitlePage, DescriptionPage } from '../../templates/ProjectPageTemplate';
import CardProjectMinimalist from '../../organisms/CardProjectMinimalist';
import img from '../../../assets/img/007.png';
import Separator from '../../atoms/Separator';
import Typography from '../../atoms/Typography';
import TitleTypo from '../../molecules/Typography/TitleTypo';
import Box from '../../atoms/Box';
import { useTranslation } from 'react-i18next';
// images
import swift from '../../../assets/img/swift.png';

const ProjectPage: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <ProjectPageTemplate>
      <TitlePage>
        <Box>
          <Separator direction={'horizontal'} length={'100px'} wide={'5px'} />
        </Box>
        <TitleTypo variant="medium">{t('section3.title')}</TitleTypo>
      </TitlePage>
      <DescriptionPage>
        <Typography type={'secondary'}>{t('section3.subTitle')}</Typography>
      </DescriptionPage>
      <ContentPage>
        <CardProjectMinimalist title={t('projects.swift.title')} repoLink={'https://github.com/sergio222-dev/swift-demo-react'} demoLink={'http://sergio222-react-demo.surge.sh/'} img={swift}>
          {t('projects.swift.description')}
        </CardProjectMinimalist>
        <CardProjectMinimalist title={t('projects.portfolio.title')} repoLink={''} demoLink={''} img={img}>
          {t('projects.portfolio.description')}
        </CardProjectMinimalist>
      </ContentPage>
    </ProjectPageTemplate>
  );
};

export default ProjectPage;
