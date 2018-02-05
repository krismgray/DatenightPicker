import React, { Component } from 'react';
import { Header, Menu, Container, Icon, Segment, Button, Divider, Form, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import '../Home.css';
import axios from 'axios';
import Toptab from './Toptab';




class Admin extends Component {
  state = { name: '', ideas: [] }

  componentDidMount() {
    axios.get('/api/ideas')
      .then( ({ data: ideas }) => this.setState({ ideas }) )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, ideas } = this.state;
    axios.post('/api/ideas', { name })
      .then( ({ data }) => {
        this.setState({ ideas: [name, ...ideas], name: '' })
      })
  }

  deleteIdea = id => {
    const { name, ideas } = this.state;
    axios.delete(`/api/ideas/${id}`)
      .then( ({ data }) => {
        this.setState({ ideas: [name, ideas], name: '' })
      })
  }

  choose = () => {

  }


  render() {
    const { name, ideas } = this.state;
    const { dispatch, id } = this.props;
    return (
      <div>
        <div className='bodyHome'>
          <div className='tabMenu'>
            <Toptab />
          </div>
          <br />
          <br />
          <br />
          <br />
          <Container textAlign='center' text>
            <div className='title'>
              <Header textAlign='center'>Date Night!</Header>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="statement">
              <p className='paragraph'>Date Night can be so much fun but we all know how stressfull it can be as well.
                That is why DateNight is here to help! We have brainstormed dates for all kind of people,
                groupe dates, single dates, first dates, and more... Our goal is to make date night less
                stressfull for everyone so it can be a magical night.
              </p>
              <br />
              <br />
              <p>We have dates ranging from the Salt Lake City area to the Provo area. If distance doesn't
                matter to you that choose from below to see all ideas including non specific locations! Choose which one you would like and browse the ideas.
                If you cannot decide on a date, then try our random date picker.
                It will choose 3 date ideas out of the list then you pick one to do for those indecisive folk.
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
          </Container>
          </div>
          <div className='buttonAreaBack'>
            <div className='buttonArea'>
              <div className='randomPicker'>
                <Button primary size='huge' onClick={this.choose}>Date Night Picker!</Button>
                <div>

                </div>
              </div>
            </div>
            <div className='threedates'>

            </div>
            </div>
            <div className='body2'>
              <br />
              <div className='listColumn'>
                <ul className='allDates'>
                <List>
                  { ideas.map( idea =>
                    <List.Item
                      key={idea.id}

                      >
                      {idea.name}
                      <Button basic onClick={ () => this.deleteIdea(idea.id)}>Delete</Button>
                    </List.Item>
                  )}
                </List>
                </ul>
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
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              </div>
          <Segment>
            <div className='footerAdmin'>
              <div>
                <p>Add another date!</p>
              </div>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <input
                    value={name}
                    onChange={ e => this.setState({ name: e.target.value }) }
                   />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
            </div>
          </Segment>
        </div>
      </div>
    )
  }
}

export default Admin;
