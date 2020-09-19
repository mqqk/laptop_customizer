import React, { Component } from 'react';
import '../App.css';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });



  export default class FeatureItem extends Component{

    
      render(){
        // console.log(this.props.feature)
        // console.log(this.props);
        // console.log(this.props.itemHash)
        // console.log(this.props.newState)
          return(
            <div key={this.props.itemHash}                  
                className="feature__item"
            >
                <input
                    
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.item.name === this.props.newState}
                    onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
                />
            <label htmlFor={this.props.itemHash} className="feature__label">
              {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
          )
      }
  }     