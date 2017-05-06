import React, { Component} from 'react';
import { connect } from 'react-redux';
class PostsIndex extends Component {
  componentWillMount(){
    console.log("will mount");
  }
  render() {
    return (
      <div>List</div>
    );
  }
}
