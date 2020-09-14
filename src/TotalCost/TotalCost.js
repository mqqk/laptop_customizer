import React, { Component } from 'react';
import '../App.css';

export default class TotalCost extends Component{
    render(){

        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });

          const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
          
        console.log(this.props.selected);
        const summary = Object.keys(this.props.selected).map((feature,idx) => {
              const selectedOption=this.props.selected[feature];
          
        return(
            <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
            </div>
        )});

        return(
            <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
        )

        
    }
}