import React, { FunctionComponent } from 'react';
import ContactTemplate from '../../templates/ContactTemplate';
import TitleTypo from '../../molecules/Typography/TitleTypo';
import Separator from '../../atoms/Separator';
import Box from '../../atoms/Box';
import TextTypo from '../../molecules/Typography/TextTypo';
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
          <IconAvatar href={'#'}>
            <GitHub />
          </IconAvatar>
          <IconAvatar href={'#'}>
            <LinkedIn />
          </IconAvatar>
        </Box>
      </Box>
    </ContactTemplate>
  );
};

export default ContactPage;
