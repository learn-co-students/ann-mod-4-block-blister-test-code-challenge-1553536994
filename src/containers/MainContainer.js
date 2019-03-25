import React, { Component } from 'react';
import MovieContainer from './MovieContainer'
import RentalContainer from './RentalContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar/>
        <div className="row">
          <MovieContainer/>
          <RentalContainer/>
        </div>
      </div>
    );
  }

}

export default MainContainer;
