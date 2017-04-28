import React from 'react';

class CountryDetail extends React.Component {
  render(){
     if(!this.props.country){
      return null;
     }


    return (
      <div id="info">
      <h3>
       {this.props.country.name}
      </h3>
      <p><strong>Capital: </strong> {this.props.country.capital}</p>
      <p><strong>Region: </strong> {this.props.country.region}</p>
      <img src={this.props.country.flag}/>
      </div>
    );
  }
}

module.exports = CountryDetail;
