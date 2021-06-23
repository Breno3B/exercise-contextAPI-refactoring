import PropTypes from 'prop-types';
import React, { Component } from 'react'
import carContext from './carContext'

class CarProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }

    this.handleMoveCar = this.handleMoveCar.bind(this);
  }

  handleMoveCar = (car, side) => {
    this.setState({
      ...this.state,
      cars: {
        ...this.state.cars,
        [car]: side,
      }
    })
  };
  
  render() {
    const carContextValue = {
      ...this.state,
      handleMoveCar: this.handleMoveCar,
    };

    const { children } = this.props;
  
    return (
      <div>
        <carContext.Provider value={carContextValue}>
        { children }
        </carContext.Provider>
      </div>
    )
  }
}

CarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarProvider;