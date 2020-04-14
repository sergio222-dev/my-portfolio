import React from 'react';
import Navbar, { TitleNavbar, MenuSection } from './index';
import Typography from '../../atoms/Typography';
import variables from '../../settings/variables';
import Link from '../../atoms/Link';
import Separator from '../../atoms/Separator';

export default {
  title: 'Navbar - Organism',
  component: Navbar,
};

export const defaultNavbar = () => (
  <Navbar>
    <TitleNavbar>
      <Typography
        variant={'h1'}
        color={variables.colors.blueWhite}
        fontSize={'1.5em'}
        weight={900}
        font={variables.font.menu}
      >
        Sergio Molina
      </Typography>
    </TitleNavbar>
    <MenuSection>
      <div>
        <Link font={variables.font.links} fontSize={'1.25em'}>
          About
        </Link>
      </div>
      <Separator />
      <div>
        <Link font={variables.font.links} fontSize={'1.25em'}>
          Skills
        </Link>
      </div>
      <Separator />
      <div>
        <Link font={variables.font.links} fontSize={'1.25em'}>
          Projects
        </Link>
      </div>
      <Separator />
      <div>
        <Link font={variables.font.links} fontSize={'1.25em'}>
          Contact
        </Link>
      </div>
    </MenuSection>
  </Navbar>
);
