import React from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries:[],
      focusCountry: null
    };
  }

  componentDidMount(){
    const url = "https://restcountries.eu/rest/v2/all";
    // create a xml http request object
    const request = new XMLHttpRequest();
    //set the type of request and url
    request.open("GET", url);
    //create
    request.onload = () => { 
     var countries = JSON.parse(request.responseText);

      this.setState({
        countries: countries,
        focusCountry: countries[0]
      });

    };
    //send the request
    request.send();
  }

  setFocusCountry(country){
    this.setState({
      focusCountry: country
    });
  }

  render(){
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector countries={this.state.countries} 
                         selectCountry={this.setFocusCountry.bind(this)}/>
        <CountryDetail country={this.state.focusCountry}/>
      </div>
    );
  }
}

module.exports = CountryContainer;