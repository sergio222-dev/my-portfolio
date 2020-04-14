import React from 'react';
import List from './index';
import ListItem from '../ListItem';
import ListItemText from '../ListItemText';

export default {
  title: 'List',
  component: List,
};

const text = 'Main text, learn typescript please';

export const defaultList = () => (
  <List>
    <ListItem button>
      <ListItemText>{text}</ListItemText>
    </ListItem>
    <ListItem button>
      <ListItemText>{text}</ListItemText>
    </ListItem>
    <ListItem button>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  </List>
);
