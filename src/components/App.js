import React, { Component } from "react";
import axios from "../../node_modules/axios";
import CarCreate from "./CarCreate";
import CarDetails from "./CarDetails";
import TableList from "./TableList";

class App extends Component {
  state = {
    //carIdCounter: 3,
    carList: [],
    carDetails: null,
    showDetails: false,
    showCreate: false,
    carsLoaded: false,
  };

  componentDidMount() {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

    axios //The url might be a bit different for your (the port number is 44302 for me but you might have 44004)
      .get("https://localhost:44302/api/React")
      .then(response => {
        // handle success
        console.log("api all response:", response);
        this.setState({ carList: response.data, carsLoaded: true });
      })
      .catch(error => {
        // handle error
        console.log("Error", error);
      })
      .then(() => {
        // always executed
      });
  }

  showCar = (car) => {
    if(this.state.carDetails === null || car.id !== this.state.carDetails.id) { //This if is here to prevent user from clicking the same details button many time and we don´t want to send multiple calls to the backend.
      axios //The url might be a bit different for yours (the port number is 44302 for me but you might have 44004)
      .get("https://localhost:44302/api/React/" + car.id)
      .then(response => {
        // handle success
        console.log("api details response:", response);
        this.setState({ carDetails: response.data, showCreate: false, showDetails: true });
      })
      .catch(error => {
        // handle error
        console.log("Error", error);
      })
      .then(() => {
        // always executed
      });
    }
    
    
  };

  showCreate = () => {
    this.setState({ carDetails: null, showCreate: true, showDetails: false });
  };

  handelCreate = (event) => {
    event.preventDefault();
    console.log(event);
    const brand = event.target[0].value;
    const modelName = event.target[1].value;
    const year = event.target[2].value;
    const car = {
      Brand: brand,
      ModelName: modelName,
      Year: parseInt(year),
    };
    
    let carList = this.state.carList;

    axios({
      method: 'post',
      url: 'https://localhost:44302/api/React',
      data: car
    })
    .then(response => {
      // handle success
      console.log("api post response:", response);
      carList.push(response.data);
      this.setState({ carList: carList });
    })
    .catch(error => {
      // handle error
      console.log("Error", error);
    })
    .then(() => {
      // always executed
    });
  };

  render() {
    const { showCreate, showDetails, carDetails, carList, carsLoaded } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-9">
                <h3>Car list</h3>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-success"
                  onClick={this.showCreate}
                >
                  Create car
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <h3>
              {showCreate ? "Create" : showDetails ? "Details" : "Welcome"}
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <TableList cars={carList} selectedCar={this.showCar} carsLoaded={carsLoaded}/>
          </div>
          <div className="col-6">
            {showCreate ? (
              <CarCreate handelCreate={this.handelCreate} />
            ) : showDetails ? (
              <CarDetails car={carDetails} />
            ) : (
              <p>Select a car from the list or create a new car.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
