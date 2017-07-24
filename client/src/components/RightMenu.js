import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

import GroupChatContainer from '../containers/GroupChatContainer';

class RightMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      activeItem: 'tab1'
    };
  }

  handleClick(e, { name }) {
    // do things to the state of the app inherited as props
  }

  render() {
    const { visible } = this.state;
    return (
      <Menu
        animation="push"
        visible={visible}
        icon="labeled"
        horizontal
      >
        <Menu.Item name="mail">
          <Icon name="video" />
          Video Chat
        </Menu.Item>
<<<<<<< HEAD
        <Menu.Menu>
          <GroupChatContainer />
        </Menu.Menu>  
=======
        <GroupChatContainer />
>>>>>>> c0307b3152dfcd610ede47e238a00078a522e3c4
      </Menu>
    );
  }
}

export default RightMenu;
