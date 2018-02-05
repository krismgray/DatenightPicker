import React, { Component } from 'react';
import { Header, Menu, Segment, Icon, Form, Input, Button } from 'semantic-ui-react';
import Toptab from './Toptab';
import '../SaltLake.css'
import { Link } from 'react-router-dom';

class SaltLake extends Component {
  state = { name: '' }


  render() {
    return (
      <div>
        <div className='bodySL'>
            <Toptab />
          <Header as='h1' textAlign='center'>Salt Lake City Area</Header>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='listColumnSL'>
            <ul className='SLdates'>
              <li className='listItemsSL'>Go to a Jazz game</li>
              <li className='listItemsSL'>Go to Tample Square</li>
              <li className='listItemsSL'>Go rent and ride bikes downtown</li>
              <li className='listItemsSL'>Go to Hoggle Zoo</li>
              <li className='listItemsSL'>Go to a concert</li>
              <li className='listItemsSL'>Go on a hike near Salt Lake</li>
              <li className='listItemsSL'>Go Ice skating</li>
              <li className='listItemsSL'>Go walk around City Creek Mall</li>
              <li className='listItemsSL'>Go to a University of Utah sports event</li>
              <li className='listItemsSL'>Do a scavenger hunt downtown</li>
            </ul>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Segment>
            <div className='footer'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <input onChange={ e => this.setState({ name: e.target.value }) }
                        placeholder='Add date idea...'
                   />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
            </div>
          </Segment>
        </div>
      </div>
    );
  }
}

export default SaltLake;
