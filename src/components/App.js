import React, { Component } from 'react';
import CarCreate from './CarCreate';
import CarDetails from "./CarDetails";
import TableList from './TableList';

class App extends Component {

  state = {
    carIdCounter: 3,
    carList: [{id: 1, brand: "Saab", modelName: "900 Turbo", year: 1992},{id: 2, brand: "Volvo", modelName: "S60", year: 2005}],
    carDetails: null,
    showDetails: false,
    showCreate: false
  };

  showCar = (car) => {
      this.setState({carDetails: car, showCreate: false, showDetails: true});
  }

  showCreate = () => {
    this.setState({carDetails: null, showCreate: true, showDetails: false});
}

  handelCreate = (event) => {
    event.preventDefault();
    console.log(event);
    const brand = event.target[0].value;
    const modelName = event.target[1].value;
    const year = event.target[2].value;
    const car = {
      id: this.state.carIdCounter,
      brand: brand,
      modelName: modelName,
      year: year
    };
    let carList = this.state.carList;
    carList.push(car);

    this.setState({carList: carList, carIdCounter: car.id + 1});
  }

  render() {
    const { showCreate, showDetails, carDetails, carList } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-9">
                <h3>Car list</h3>
              </div>
              <div className="col-3">
                <button className="btn btn-outline-success" onClick={this.showCreate}>Create car</button>
              </div>
            </div>
            
          </div>
          <div className="col-6">
            <h3>{showCreate ? "Create" : showDetails ? "Details" : "Welcome"}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <TableList cars={carList} selectedCar={this.showCar} />
          </div>
          <div className="col-6">
            { 
              showCreate ? <CarCreate handelCreate={this.handelCreate}/> : 
                  showDetails ? <CarDetails car={carDetails} /> : 
                    <p>Select a car from the list or create a new car.</p> 
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;