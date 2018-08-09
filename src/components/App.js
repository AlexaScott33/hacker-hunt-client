import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/stories';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStories());
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        Hey
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps)(App);
