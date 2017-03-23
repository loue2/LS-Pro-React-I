import React, { Component } from 'react';
import pic from './ortiz.jpg';
import './body.css';

export default class Body extends Component {
  constructor(){
    super();
    this.state = {
      nickname: "Lou",
      name: "Chad",
      likes: ["Sports", "Technology", "Learning from Lambda School"]
    };
  }



  render() {
    return(
      <div className="body">
        <h2 style={{color: "blue"}}>About Me</h2>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Nickname: {this.state.nickname}</li>
          <li>Likes:</li>
            <ul>
              {this.state.likes.map(function(like){
                return <li> {like} </li>})}
            </ul>
        </ul>
        <p>Are you ready for baseball to begin? I am!!!</p>
        <img src={pic} className="picture" alt=" David Ortiz" title="Future HOF Great David Ortiz"/>
        <p>Would you like to <a href="https://github.com/loue2">view</a> my Github page?</p>
        <p>If you want to be cool like me, visit <a href="https://www.lambdaschool.com/">https://www.lambdaschool.com/</a></p>
      </div>
    );
  }
}
