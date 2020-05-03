import React, { FunctionComponent } from 'react';
import ContactTemplate from '../../templates/ContactTemplate';
import TitleTypo from '../../atoms/Typography/TitleTypo';
import Separator from '../../atoms/Separator';
import Box from '../../atoms/Box';
import { GitHub, LinkedIn } from '@material-ui/icons';
import IconAvatar from '../../molecules/IconAvatar';
import { useTranslation } from 'react-i18next';

const ContactPage: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <ContactTemplate>
      <Box>
        <Separator length={'100px'} direction={'horizontal'} wide={'5px'} />
      </Box>
      <TitleTypo>{t('contact.contact')}</TitleTypo>
      <Box>
        <Box justify={'space-evenly'} width={'200px'}>
          <IconAvatar href={'https://github.com/sergio222-dev'}>
            <GitHub />
          </IconAvatar>
          <IconAvatar href={'https://www.linkedin.com/in/sergio-molina-a1214b126/'}>
            <LinkedIn />
          </IconAvatar>
        </Box>
      </Box>
    </ContactTemplate>
  );
};

export default ContactPage;
