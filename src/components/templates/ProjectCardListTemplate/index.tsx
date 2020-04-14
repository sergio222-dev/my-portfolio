import React, { FunctionComponent } from 'react';
import { StyledDiv } from './styles';

const ProjectCardListTemplate: FunctionComponent = ({ children }) => {
  return <>{children && React.Children.map(children, child => <StyledDiv> {child} </StyledDiv>)}</>;
};

export default ProjectCardListTemplate;
