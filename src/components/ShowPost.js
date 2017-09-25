import React, { Component } from 'react';

class ShowPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'post':[]
            }
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        const url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
        fetch(url)
        .then(results => results.json())
        .then(data => {
        this.setState({post: data})
      })
      .catch(error => {
      console.log("Error with Fetching : ", error );
    });
    }

    render() {
      let formStyle={
    'height': '150px',
    'padding':' 20px',
    'color': '#93b5ea',
    'text-align': 'center',
    'margin': '0 auto'
  }
        return (

            <div className="container">
                <div className="col-lg-5  mx-auto">
                    <div className="col-lg-8 " style={formStyle}>
                        <h2 className="title">Title: {this.state.post.blogTitle}</h2>
                        <h3 className="meta">Posted by: {this.state.post.authorName}</h3>
                        <p className="subtitle"> Post: {this.state.post.blogEntry}</p>
                    </div>
                </div>
            </div>
        );

    }
}

 export default ShowPost
