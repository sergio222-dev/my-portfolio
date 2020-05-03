import CardProject from './index';
import React from 'react';
import img from '../../../assets/img/007.png';

export default {
  title: 'Card Project Minimalist',
  component: CardProject,
};

export const defaultNavbar = () => (
  <CardProject img={img} title={'Static Page'} repoLink={''} demoLink={''}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cumque dolor enim porro praesentium, quae quis
    quisquam recusandae ullam voluptatem. Adipisci aliquam aut consequuntur debitis esse maxime molestiae nisi veniam!
  </CardProject>
);
