import React, { Component } from 'react';
import './App.css';
import { blue500, white } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import PersonIcon from 'material-ui/svg-icons/social/person';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    height: '100vh',
    display: 'flex'
  },
  innerContainer: {
    height: '50vh',
    margin: 'auto',
    width: '40vw',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.025) 0px 1px 6px, rgba(0, 0, 0, 0.025) 0px 1px 4px'
  },
  topicGeneral: {
    textAlign: 'center', 
    textTransform: 'uppercase',
    color: 'white', 
    backgroundColor: 'rgba(33, 150, 243, 0.95)', 
    margin: 0
  },
  topic: {
    fontWeight: 'bold',  
    fontSize: 32,
    paddingTop: 12
  },
  subTitle: {
    fontWeight: 300,
    fontSize: 20,
    letterSpacing: 6,
    paddingBottom: 12
  },
  loginText: {
    textTransform: 'uppercase', 
    fontSize: 26, 
    fontWeight: 100, 
    color: '#34495e'
  }
};

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.container}>
        <div style={styles.innerContainer}>
          <h1 style={{...styles.topicGeneral, ...styles.topic}}>
            Material
          </h1>
          <h2 style={{...styles.topicGeneral, ...styles.subTitle}}>
            Dashboard
          </h2>
          <div style={{textAlign: 'center', padding: 24}}>
            <Avatar
              icon={<PersonIcon/>}
              color={white}
              backgroundColor={blue500}
              size={100}/>
            <h1 style={styles.loginText}>
              Login
            </h1>
          </div>
          <div style={{paddingLeft: 48, paddingRight: 48}}>

            <TextField
              fullWidth={true}
              hintText="Username"
              floatingLabelText="Username"/>

            <TextField
              fullWidth={true}
              hintText="Password"
              floatingLabelText="Password"/>

          </div>

          <div style={{textAlign: 'center', marginTop: 24}}>
            <RaisedButton label="Login" backgroundColor={blue500} labelColor={white} style={{width: '25%'}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
