import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    };
    componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ posts: data });
        })
    }
    render() {
      let formStyle={
    'height': '150px',
    'padding':' 20px',
    'color': '#93b5ea',
    'text-align': 'left',
    'margin': '0 auto',
  }
        let posts = this.state.posts.map((post, index) => {
            return (
                <div className="post-preview" key={index}>
                    <h2 className="post-title"><Link to={`/showpost/${post._id}`} style={{textDecoration:'none', color: '#93b5ea'}}>Blog Title: {post.blogTitle}</Link> </h2>
                  </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto" style={formStyle}>
                        {posts}
                    </div>
                </div>
            </div>
        )
    }
}
export default PostList
