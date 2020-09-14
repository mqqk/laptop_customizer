import React, { Component } from 'react';
import EachCust from '../EachCust/EachCust';
import '../App.css';

export default class Custom extends Component{

    
    render(){

        console.log(this.props);
        return(
            
            <form className="main__form">
                <h2>Customize Your Laptop</h2>
                <EachCust 
                    features={this.props.features}
                    newState={this.props.newState}
                    updateFeature={this.props.updateFeature}
                />
            </form>
        )
    }
}