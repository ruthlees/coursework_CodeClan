import React from 'react';

class PiggyBank extends React.Component {
   
   constructor(props){
    console.log("constructor....");
    super(props);
    this.state = {
      total: 0
    }
    // this.addToSavings = this.addToSavings.bind(this);
   }

  componentWillMount(){
    console.log("Component WILL Mount!");
    const button = document.querySelector("#add-button");
    console.log(button);
  }

  componentDidMount(){
    console.log("Component DID Mount!");
    const button = document.querySelector("#add-button");
    console.log(button);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL Update");
    console.log("next Props:", nextProps);
    console.log("next State:", nextState);
  }

  componentDidUpdate(prevProps,  prevState){
    console.log("Component DID Update");
    console.log("Prev Props:", prevProps);
    console.log("Prev State:", prevState);
  }



   addToSavings(){
    // const input = document.getElementById('amount');
    // const amount = parseInt(input.value);
    this.setState({
      total: this.state.total + parseInt(document.getElementById('amount').value)
    })
    amount.value = '';
   }

   subtractToSavings(){
    // const input = document.getElementById('amount');
    // const amount = parseInt(input.value);
    this.setState({
      total: this.state.total - parseInt(document.getElementById('amount').value)s 
    })
    amount.value = '';
   }

   render(){
    console.log("Render.....");
     return (
        <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.owner}</h3>
        <p>Total: £{this.state.total}</p>
        <input id="amount"></input>
        <button id="add-button" onClick={()=> {this.addToSavings()}}>Add </button>
        <button id="sub-button" onClick={()=>{this.subtractFromSavings()}}>Subtract</button>
        </div>
      )
   }
}

export default PiggyBank;