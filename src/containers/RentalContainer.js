import React, { Component } from 'react';
import CheckOutButton from '../components/CheckOutButton'

class RentalContainer extends Component {

  render() {
    return (
      <div className="col-6">
        <div className="bg-primary shadow p-3 mb-5 rounded">
          <h2>My Rentals</h2>
          <CheckOutButton/>
          <div className="card-group">
            {
              /*Write your code here*/
            }
          </div>
        </div>
      </div>
    );
  }

}

export default RentalContainer;
