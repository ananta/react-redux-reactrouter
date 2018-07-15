import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddPosts from '../components/AddPosts';
import * as postActions from '../actions/postActions';

class Homepage extends Component {

  render() {
    this.props.fetchPosts
    return (
      <div>
            <h1>Home Page</h1>
            
            <h3>Add Posts</h3>
            <AddPosts />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      posts: state.posts
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addPosts: post => dispatch(postActions.createPost(post)),
      fetchPosts: dispatch(postActions.retrivePost())
    }
  }
  
  // Connect to the Store
  export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
  