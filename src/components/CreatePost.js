import React, { Component } from 'react';

class CreatePost extends Component {
   "use strict";
    constructor(props){
      super(props);

this.state ={
  authorName: '',
  blogTitle: '',
  blogEntry: ''
}
this.addToList = this.addToList.bind(this)
this.handleChange = this.handleChange.bind(this)
}
handleChange = e => {
  e.preventDefault();
  console.log(e.target);
  this.setState({ [e.target.id]: e.target.value });
}
    addToList = (e) => {
        e.preventDefault();
        this.setState({
          authorName: e.target.value,
          blogTitle: e.target.value,
          blogEntry: e.target.value,
        });

        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
      ).then(response => {
        console.log(response, "yay");

      }).catch(err => {
        console.log(err, "boo!");
      });
      this.setState({authorName: '',blogTitle: '', blogEntry:''});
    }
    render(){
    return (
      <div>
      <form className="form" onSubmit={this.addToList}>
      <label className="formlabel"> Author Name: </label>
      <br></br>
       <input className="forminput" type='text' id = "authorName" value={this.state.authorName} onChange={this.handleChange}></input>
       <br></br>
       <label className="formlabel"> Blog Title: </label>
       <br></br>
       <input className="forminput" type='text' id="blogTitle" value={this.state.blogTitle}  onChange={this.handleChange}></input>
       <br></br>
       <label className="formlabel"> Blog Entry: </label>
       <br></br>
       <textarea className="forminput" type='text' id="blogEntry" value={this.state.blogEntry} onChange={this.handleChange}></textarea>
       <br></br>
       <input className="submit" type = 'submit'></input>
         </form>
         </div>
    )
  }
}

export default CreatePost
