// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import carContext from './contextAPI/carContext'

function Cars() {

  return (
    <carContext.Consumer>
      {(value) => (
        <div>
            <div>
              <img
                className={value.cars.red ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button
                onClick={() => value.handleMoveCar('red', !value.cars.red)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={value.cars.blue ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button
                onClick={() => value.handleMoveCar('blue', !value.cars.blue)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={value.cars.yellow ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
              />
              <button
                onClick={() => value.handleMoveCar('yellow', !value.cars.yellow)}
                type="button"
              >
                Move
              </button>
            </div>
          </div>
      )}
    </carContext.Consumer>
    );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

// const mapStateToProps = (state) => ({
//   redCar: state.cars.red,
//   blueCar: state.cars.blue,
//   yellowCar: state.cars.yellow});

// const mapDispatchToProps = { moveCar };

// export default connect(mapStateToProps, mapDispatchToProps)(Cars);

export default Cars;
