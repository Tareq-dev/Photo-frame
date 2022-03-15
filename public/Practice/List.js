import React, { Component } from 'react'

export default class componentName extends Component {
     render() {
          return (
               <div>
                    <ol>
                    {this.props.tasks.map((task, index) =><li key={index}>{task}</li>)}
                    </ol>
               </div>
          )
     }
}


// 