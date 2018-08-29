import React, { Component } from 'react';

export class Product extends Component {  
    
  render() { 
     return (
      <div className= "Product"> 
        <h3>{this.props.id}</h3> 
        <h3>Minutes: {this.props.duration}</h3> 
        <h3>Status:<div>{this.props.status === 1 ? 'Up'  : 'Down'}</div></h3> 
        <h3>Amount: {this.props.amount}</h3><br /> 
      </div>
      )
    }
  }

export default Product;