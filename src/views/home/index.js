import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content } from 'native-base';
import ListTodo from './../../components/list-todo';

const HomeView = () => (
    <Container>
      <Content>
        <ListTodo />
      </Content>
    </Container>
)


export default HomeView;
