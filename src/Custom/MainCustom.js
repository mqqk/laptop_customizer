import React, { Component } from 'react';
import '../App.css';
import EachCust from '../EachCust/EachCust';
import FEATURES from '../Features/Features';
import slugify from 'slugify';

export default class MainCustom extends Component{


    render(){
        const features = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            const options = FEATURES[feature].map((item,idx) => {
                const itemHash = slugify(JSON.stringify(item));

        return(
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              <EachCust 
              feature={item}
              newState={this.props.newState}
              updateFeature={this.props.updateFeature}
              />
            </fieldset>
        )
    })
    return

})
    console.log(features)
    return(
        <>
        {features}
        </>
    )
}
}