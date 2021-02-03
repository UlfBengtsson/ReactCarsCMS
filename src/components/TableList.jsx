import React, { Component } from "react";
import "../css/TableList.css";

class TableList extends Component {
  render() {
    const { cars, carsLoaded } = this.props;
    let rowToShow;
    if (carsLoaded) {//if axios has fetched the data from api
      rowToShow = cars.map((item) => {
        return (
          <tr key={"carRow" + item.id}>
            <td>{item.brand}</td>
            <td>{item.modelName}</td>
            <td>
              <button
                className="btn btn-info"
                onClick={() => this.props.selectedCar(item)}
              >
                Details
              </button>
            </td>
          </tr>
        );
      });
    } else {  //if were are waiting for axios to fetch the data from the api
      rowToShow = <tr>
                    <td id="loadingData" colSpan="3">Loading...</td>
                  </tr>
    }

    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { rowToShow }
        </tbody>
      </table>
    );
  }
}

export default TableList;
