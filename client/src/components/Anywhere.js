import React, { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import Toptab from './Toptab';
import { Link } from 'react-router-dom';

class Anywhere extends Component {
  render() {
    return (
      <div>
        <Toptab />
        <Header as='h1' textAlign='center'>Salt Lake Area</Header>
      </div>
    );
  }
}

export default Anywhere;
