import React, { FunctionComponent } from 'react';
import Container from '../../atoms/Containter';
import NavbarStyles from '../../templates/NavbarSectionTemplate/styles';
import Navbar, { TitleNavbar, MenuSection } from '../../organisms/Navbar';
import logo from '../../../logo.png';
import Box from '../../atoms/Box';
import NavbarTypo from '../../atoms/Typography/NavbarTypo';
import ToggleGroup from '../../molecules/ToggleGroup';
import ToggleButton from '../../molecules/ToggleButton';
import useImageButton from '../../molecules/ButtonTypes/image';
import enFlag from '../../../assets/img/en_flag.png';
import esFlag from '../../../assets/img/es_flag.png';
import { useTranslation } from 'react-i18next';

const NavbarSection: FunctionComponent = () => {
  const NavbarClasses = NavbarStyles();
  const buttonImage = useImageButton();
  const { i18n } = useTranslation();
  return (
    <Container className={NavbarClasses.NavbarTemplateRoot}>
      <Navbar>
        <TitleNavbar>
          <Box alignItems={'center'} justify={'flex-start'} htmlDivProps={{ style: { height: '100%' } }}>
            <img src={logo} width={'50px'} alt={'Logo'} />
            <NavbarTypo>Sergio Molina</NavbarTypo>
          </Box>
        </TitleNavbar>
        <MenuSection>
          <Box alignItems={'center'} justify={'flex-end'} htmlDivProps={{ style: { height: '100%' } }}>
            <ToggleGroup defaultValue={i18n.language} handleChange={v => i18n.changeLanguage(v)}>
              <ToggleButton value={'es'} classes={buttonImage}>
                <img src={esFlag} alt={'es'} />
              </ToggleButton>
              <ToggleButton value={'en'} classes={buttonImage}>
                <img src={enFlag} alt={'en'}/>
              </ToggleButton>
            </ToggleGroup>
          </Box>
        </MenuSection>
      </Navbar>
    </Container>
  );
};

export default NavbarSection;
