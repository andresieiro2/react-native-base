
import React from 'react';
import { View } from 'react-native';
import { ListItem, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoListItem = ({ icon, text}) => (
  <ListItem iconLeft>
   <Icon name={icon } style={{ marginLeft: 10 }}/>
   <Text style={{ marginLeft: 10 }}>
     { text }
   </Text>
  </ListItem>
)


export default TodoListItem;
