import { Component } from  'react';
import Beer from './Beer';
import axios from 'axios';

export default class BeerList extends Component {
    constructor(){
    super();
    this.state = {
      beers: []
    }
  }
 
  componentDidMount(){
    axios.get('https://api.punkapi.com/v2/beers')
  .then( (response) => {
   this.setState({beers: response.data});
  });
  }



  render(){
    return (
      <>
        <h2>Beer List ({this.state.beers.length}) </h2>
          <ol> {this.state.beers.map((beer)=>
          <Beer brew = {beer} />
           // This is how you use an imported react component ^^
          )}

          </ol>
      </>
    );
  }
}
