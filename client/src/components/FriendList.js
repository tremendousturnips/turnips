import React from 'react';
import { Icon, Menu, Sidebar, List, Button, Modal, Input, Label } from 'semantic-ui-react';

import FriendListItemContainer from '../containers/FriendListItemContainer';
import AddFriendItemContainer from '../containers/AddFriendItemContainer';

class FriendList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.handleDone = this.handleDone.bind(this);
    this.toggleShowModal = this.toggleShowModal.bind(this);
  }

  componentWillMount() {
    const { user, fetchFriends } = this.props;
    fetchFriends(user.id);
  }

  toggleShowModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  handleDone() {
    this.props.showFriendListStat();
  }

  render() {
    return (
      <Modal trigger={<Menu.Item name="friends" icon="users" />}>
        <Menu.Item name="home">
          <Icon name="group" />
          Friends
        </Menu.Item>
        <Menu.Item>
          <List relaxed="very" verticalAlign="top">
            {Object.keys(this.props.friends).map(objectKey => {
              return (
                <FriendListItemContainer
                  friend={this.props.friends[objectKey]}
                  index={objectKey}
                  key={objectKey}
                />
              );
            })}
          </List>
        </Menu.Item>
        <Menu.Item name="addFriend">
          <Button.Group labeled>
            <Button
              compact
              icon="add user"
              color="red"
              content="Add"
              onClick={this.toggleShowModal}
              inverted
            />
            <Button
              compact
              icon="checkmark"
              color="green"
              content="Done"
              onClick={this.handleDone}
              inverted
            />
          </Button.Group>
        </Menu.Item>
        <Modal open={this.state.showModal} onClose={this.handleCloseModal} size="small">
          <Modal.Header>
            <Input
              focus
              icon="users"
              iconPosition="left"
              placeholder="Search users..."
              action="Search"
            />
            <Label corner="right" icon="window close" color="red" onClick={this.toggleShowModal} />
          </Modal.Header>
          <Modal.Content scrolling>
            <List animated verticalAlign="middle">
              {Object.keys(this.props.profiles)
                .filter(objectKey => {
                  let r = true;
                  if (parseInt(objectKey) === this.props.user.id) {
                    r = false;
                  } else {
                    for (var key in this.props.friends) {
                      if (objectKey === key) {
                        r = false;
                      }
                    }
                  }
                  return r;
                })
                .map((objectKey, index) => {
                  return <AddFriendItemContainer index={objectKey} key={index} />;
                })}
            </List>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.toggleShowModal} inverted>
              <Icon name="checkmark" /> Done
            </Button>
          </Modal.Actions>
        </Modal>
      </Modal>
    );
  }
}

export default FriendList;