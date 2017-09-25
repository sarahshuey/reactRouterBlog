import React, {Component} from 'react';
// IMPORT NavLink <<<<<<<<<<<<<<<
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    let styles = {
      "display": "flex",
      "flexDirection":"row",
      "justifyContent":"center"
      }
      let textStyle={
        "textDecoration":"none",
        "textAlign": "center",
        "color": "black",
        "padding": 10,
      }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav" style={styles}>
                <li style={{listStyle:'none'}}>
                  <NavLink activeStyle={{color:"#93b5ea"}} style={textStyle} activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li style={{listStyle:'none'}}>
                  <NavLink activeClassName="selected" activeStyle={{color:"#93b5ea"}} style={textStyle} className="nav-link" exact to="/CreatePost">Create Post</NavLink>
                </li>
                <li style={{listStyle:'none'}}>
                  <NavLink activeClassName="selected" activeStyle={{color:"#93b5ea"}} style={textStyle} className="nav-link" exact to="/PostList">Show All Posts</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer className="col-lg-12">
        </footer>
      </div>
    );
  }
}
