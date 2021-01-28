// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
    <Card>
      <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.222
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
          22 Friends
      </Card.Content>
    </Card>
  )

class About extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <CardExampleCard />
        version 0.0.1
      </div>
    )
  }
}

export default About;

