import React, { Component } from 'react';
import '../App.css';
import slugify from 'slugify';
import FEATURES from '../Features/Features';
import FeatureItem from '../featureItem/featureItem';




// console.log(FEATURES);

// console.log(FEATURES);

export default class EachCust extends Component {
    render() {
        
        const features = Object.keys(FEATURES).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = FEATURES[feature].map((item,i) => {
            const itemHash = slugify(JSON.stringify(item));
            // console.log(feature);
            return (
              <FeatureItem 
                
                itemHash={itemHash}
                item={item}
                feature={feature}
                updateFeature={this.props.updateFeature}
                newState={this.props.newState.selected[feature].name}

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