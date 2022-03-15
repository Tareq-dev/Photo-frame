import React, { Component } from "react";

export default class componentName extends Component {

     constructor(){
          super()
          this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleSubmit(event) {
          event.preventDefault();
     }
  render() {
    return (
      <div>
        <h3>Photo Frame</h3>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" />
            <input type="text" placeholder="Description" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
