import React, { Component } from 'react';
import '../App.css';
import slugify from 'slugify';
import FEATURES from '../Features/Features';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

// console.log(FEATURES);

export default class EachCust extends Component {
    render() {
        
        const features = Object.keys(FEATURES).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = FEATURES[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(feature)}
                  checked={item.name === this.props.newState.selected[feature].name}
                  onChange={e => this.props.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
              </div>
            );
          });
    
          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
        });
       return(
           <>
               {features}
           </>
       ) 
    }
}