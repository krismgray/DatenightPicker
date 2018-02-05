import React, { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Toptab extends Component {
  state = { activeItem: 'home' }


  handleChange = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu size='large' secondary>
          <Link to="/">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleChange} />
          </Link>
          <Link to="/SaltLake">
            <Menu.Item name='Salt Lake City' active={activeItem === 'Salt Lake City'} onClick={this.handleChange} />
          </Link>
          <Link to="/Provo">
            <Menu.Item name='Provo' active={activeItem === 'Provo'} onClick={this.handleChange} />
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Toptab;
