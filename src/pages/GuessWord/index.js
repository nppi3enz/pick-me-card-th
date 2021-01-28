// src/components/App/index.js
import React, { Component } from 'react';
// import queryString from 'query-string'
// import { useLocation } from 'react-router-dom'


import './style.css';
import {
    // Button,
    // Container,
    Grid,
    Header,
    // Icon,
    // Image,
    // Item,
    // Label,
    // Menu,
    Segment,
    // Step,
    // Table,
  } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }
class GuessWord extends Component {
  render() {
    return (
        <div id='fonts'>
            <Header as='h1' content='เกมทายคำ' style={style.h1} textAlign='center' />
            <Grid container columns={2} relaxed stackable>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Link to="/guessword/admin">
                    <Segment>
                        <FontAwesomeIcon icon={faPlus} />&nbsp;
                        สร้างห้อง
                    </Segment>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <FontAwesomeIcon icon={faSignInAlt} />&nbsp;
                        เข้าร่วมเกม
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            </Grid>

        </div>
    )
  }
}
const GuessWordAdmin = () => {
    // const { search } = useLocation()
    // const values = queryString.parse(search)
    // console.log(values.filter) // "top"
    return (
        <div>
            <h2>Welcome to Admin Mode</h2>
            <p>
                ROOM: 
            </p>
        </div>
    )
}
class GuessWordPresent extends Component {
    render() {
       return (
          <div>
             <h2>Presentation Mode</h2>
             <p>Room {this.props.match.params.roomId} !!!</p>
             <p>Waiting from hosting...</p>
          </div>
       );
    }
}
export { GuessWord, GuessWordAdmin, GuessWordPresent };