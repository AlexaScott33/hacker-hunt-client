import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/stories';
// import logo from './logo.svg';
// import './App.css';

class List extends Component {
  render() {
    // console.log(this.props);
    // const gifList = this.props.gifs.map((gif) => {
    //     <li key={gif.id}>
    //         {gif}
    //     </li>
    // });
    return (
      <div>
        <ul>
            <li>This is a list</li>
        </ul>
      </div>
    );
  }
}


export default List;
