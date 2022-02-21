import { Component } from 'react';

export default class Beer extends Component {

  constructor(props){
    super(props)
    console.log(props);
  }

  

  render(){
    return (
     <li>
       <img src={this.props.brew.image_url}/>
       <div>Name: {this.props.brew.name}</div><br/>
       <div>ABV: {this.props.brew.abv}</div><br/>
       <div>Description: {this.props.brew.tagline}</div><br/>
     </li> 


    );
  }



}