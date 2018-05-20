import React, { Container } from 'react';
import { ReferFriend } from '../present/ReferFriend';

class ReferFriendContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <ReferFriend />
    )
  }
}

module.exports.ReferFriendContainer = ReferFriendContainer