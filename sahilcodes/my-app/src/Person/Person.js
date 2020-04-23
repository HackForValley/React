import React, {Component} from 'react';
import "./Person.css";

class Person extends Component {
  render() {
      return ( 
      <div className="content">
          <div className="box box-content">
            <img src="https://avatars0.githubusercontent.com/u/37765935?s=460&u=cf2059db80c37025b49500881b66cb76166e310b&v=4" alt="sahilcodes" />
            <h2>{this.props.name}</h2>
            <p>Bio: {this.props.bio}</p> 
          </div>
      </div>
      );
  }
}

export default Person;