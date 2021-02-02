import React, { Component } from "react";

class TableList extends Component {
  render() {
    const { cars } = this.props;
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
          {cars.map((item) => {
            return (
              <tr key={item.id}>
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
          })}
        </tbody>
      </table>
    );
  }
}

export default TableList;
