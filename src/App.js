import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {businesses: []};

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    console.log('calling search');
    console.log(Yelp);
    Yelp.search(term, location, sortBy);
    console.log('back from search');
//    .then(businesses => this.setState({businesses: businesses}));
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App;
