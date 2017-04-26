import React from 'react';
import PropTypes from 'prop-types';

import Table from 'components/Table';
import Button from 'components/Button';

import './style.scss';

const LapsList = ({ laps, isLoading, deleteLaps }) => {
  const handleDeleteLaps = () => deleteLaps();

  const renderLaps = () => {
    if (laps.length) {
      return (
        <div className="laps-list">
          <Table
            headings={['#', 'Duration']}
            items={laps} />
          <Button onClick={handleDeleteLaps}>Clear Laps</Button>
        </div>
      );
    }

    return (
      <div className="laps-list">
        {isLoading ? <p>...loading</p> : <p>No laps saved yet</p>}
      </div>
    );
  };

  return renderLaps();
};

LapsList.propTypes = {
  laps: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  isLoading: PropTypes.bool.isRequired,
  deleteLaps: PropTypes.func.isRequired,
};

export default LapsList;
