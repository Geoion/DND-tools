import React from 'react';
import { NavBar, Card, WingBlank, WhiteSpace, Icon } from 'antd-mobile';

export default class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        <NavBar mode='dark' iconName="">Dice</NavBar>

      </div>
    )
  }
}
