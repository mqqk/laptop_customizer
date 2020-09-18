import React, { Component } from 'react';
import '../App.css';
import slugify from 'slugify';
import FEATURES from '../Features/Features';
import FeatureItem from '../featureItem/featureItem';


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
              <FeatureItem 
                itemHash={itemHash}
                item={item}
                feature={feature}
                updateFeature={this.props.updateFeature}

              />
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