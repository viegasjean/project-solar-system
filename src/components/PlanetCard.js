import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div data-testid="planet-card">
        <h4 data-testid="planet-name">{ planetName }</h4>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
