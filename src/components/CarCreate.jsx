import React, { Component } from "react";

class CarCreate extends Component {
  state = {
    brand: "",
    modelName: "",
    year: new Date().getFullYear(),
  };

  changeValue = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { brand, modelName, year } = this.state;

    return (
      <form onSubmit={this.props.handelCreate}>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            id="brand"
            name="brand"
            className="form-control"
            type="text"
            value={brand}
            onChange={this.changeValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="modelName">Model:</label>
          <input
            id="modelName"
            name="modelName"
            className="form-control"
            type="text"
            value={modelName}
            onChange={this.changeValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            id="year"
            name="year"
            className="form-control"
            type="number"
            min="1886"
            max="2021"
            step="1"
            value={year}
            onChange={this.changeValue}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default CarCreate;
