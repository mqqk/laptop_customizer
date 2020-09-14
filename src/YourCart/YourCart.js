import React, { Component } from 'react';
import '../App.css';
import Selection from '../Selection/Selection';
import TotalCost from '../TotalCost/TotalCost'


   
export default class YourCart extends Component{
    
    
    render(){
        console.log(this.props.selected);
        return(
        <section className="main__summary">
            <h2>Your Cart</h2>
            <Selection 
                selected={this.props.selected}
                />
            <TotalCost 
                selected={this.props.selected}
            />
        </section>
        )
        
    }
}