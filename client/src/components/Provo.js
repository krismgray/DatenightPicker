import React, { Component } from 'react';
import { Header, Menu, Segment, Icon, Form, Input, Button } from 'semantic-ui-react';
import Toptab from './Toptab';
import '../Provo.css'
import { Link } from 'react-router-dom';

class Provo extends Component {
  state = { name: '' }


  render() {
    return (
      <div>
        <div className='bodyP'>
            <Toptab />
          <Header as='h1' textAlign='center'>Provo Area</Header>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='listColumnP'>
            <ul className='Pdates'>
              <li className='listItemsP'>Go to a Jazz game</li>
              <li className='listItemsP'>Go to Tample Square</li>
              <li className='listItemsP'>Go rent and ride bikes downtown</li>
              <li className='listItemsP'>Go to Hoggle Zoo</li>
              <li className='listItemsP'>Go to a concert</li>
              <li className='listItemsP'>Go on a hike near Salt Lake</li>
              <li className='listItemsP'>Go Ice skating</li>
              <li className='listItemsP'>Go walk around City Creek Mall</li>
              <li className='listItemsP'>Go to a University of Utah sports event</li>
              <li className='listItemsP'>Do a scavenger hunt downtown</li>
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

export default Provo;
