import React, { FunctionComponent } from 'react';
import Container from '../../atoms/Containter';
import NavbarStyles from '../../templates/NavbarSectionTemplate/styles';
import Navbar, { TitleNavbar, MenuSection } from '../../organisms/Navbar';
import logo from '../../../logo.png';
import Box from '../../atoms/Box';
import NavbarTypo from '../../molecules/Typography/NavbarTypo';

const NavbarSection: FunctionComponent = () => {
  const NavbarClasses = NavbarStyles();
  return (
    <Container className={NavbarClasses.NavbarTemplateRoot}>
      <Navbar>
        <TitleNavbar>
          <Box alignItems={'center'} justify={'flex-start'} htmlDivProps={{ style: { height: '100%' } }}>
            <img src={logo} width={'50px'} />
          </Box>
        </TitleNavbar>
        <MenuSection>
          <Box alignItems={'center'} justify={'flex-end'} htmlDivProps={{ style: { height: '100%' } }}>
            <NavbarTypo>Sergio Molina</NavbarTypo>
          </Box>
        </MenuSection>
      </Navbar>
    </Container>
  );
};

export default NavbarSection;
