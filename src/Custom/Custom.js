import React, { Component } from 'react';
import EachCust from '../EachCust/EachCust';
import '../App.css';

export default class Custom extends Component{

    
    render(){

        
        return(
            
            <form className="main__form">
                <h2>Customize Your Laptop</h2>                
                <EachCust 

                    newState={this.props.newState}
                    updateFeature={this.props.updateFeature}
                />
            </form>
        )
    }
}