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
        return (

            <div className="container">
                <div className="col-lg-5  mx-auto">
                    <div className="col-lg-8 ">
                    <h1>Buddy, get babel</h1>
                        <h1 className="post-title">{this.state.post.blogTitle}</h1>
                        <h3 className="post-meta">Posted by {this.state.post.authorName}</h3>
                        <p className="post-subtitle">{this.state.post.blogEntry}</p>
                    </div>
                </div>
            </div>
        );

    }
}

 export default ShowPost
