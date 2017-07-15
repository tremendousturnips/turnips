import React, { Component } from 'react';
import {Grid, Menu, Segment, Header, Container, Sidebar} from 'semantic-ui-react';

import LeftMenu from './LeftMenu';
import NavBar from '../containers/NavBar';
import MessageInput from '../containers/MessageInput';
import MessageBoard from '../containers/MessageBoard';

const Main = () => (

    <Sidebar.Pushable>
      <LeftMenu/>
      <Sidebar.Pusher>
        <Grid padded>
          <Grid.Column width={12}>
            <Grid.Row>
              <NavBar /> 
            </Grid.Row>
            <Segment.Group>
              <MessageBoard />
              <MessageInput />
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Sidebar.Pusher>
    </Sidebar.Pushable>

)

export default Main;