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
        let posts = this.state.posts.map((post, index) => {
            return (
                <div className="post-preview" key={index}>
                    <h2 className="post-title"><Link to={`/showpost/${post._id}`}>{post.blogTitle}</Link> </h2>
                    <p className="post-subtitle">{post.blogEntry}</p>
                    <p className="post-meta">Posted by {post.authorName}</p>
                    <hr />
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {posts}
                    </div>
                </div>
            </div>
        )
    }
}
export default PostList
