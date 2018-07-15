import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../actions/postActions';
export  class AddPosts extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.setState({
      title:'',
      content:''
    })
  }
  handelFormSubmit(event){
    event.preventDefault();
    // console.log(this.state);
    this.props.addPosts(this.state);

  }
  handelTextChange(evt){
    // console.log(evt.target.name+" : "+ evt.target.value);
   this.setState({ [evt.target.name]: evt.target.value }) 
  }

  render() {
    return (
      <form onSubmit={this.handelFormSubmit.bind(this)}>
        

        <p>Title:</p>
        <input type="text" onChange={(title) => this.handelTextChange(title)} name="txtTitle" id="txtTitle"placeholder="Enter Your Post's Title.."/>
        <br/>
        <div style={{height:10}}></div>
        <p>Content</p>
        <input type="text" onChange={(content) => this.handelTextChange(content)} name="txtContent" placeholder="Enter Your Post's Content.."/>
        <br/>
        <div style={{height:10}}></div>
        <input style={{width:170}}type="submit"/>
      </form>
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
    addPosts: post => dispatch(postActions.createPost(post))
  }
}

// Connect to the Store
export default connect(mapStateToProps, mapDispatchToProps)(AddPosts)
