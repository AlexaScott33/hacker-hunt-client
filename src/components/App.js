import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/stories';
import List from './List';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStories());
  }
  render() {
    console.log(this.props);
    return (
      <div>
        Hey
        <List />
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  gifs: state.gifs
});

export default connect(mapStateToProps)(App);
