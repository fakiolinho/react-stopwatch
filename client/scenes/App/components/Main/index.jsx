import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card, { CardHeader, CardBody, CardFooter } from 'components/Card';
import { getLaps, saveLaps, deleteLaps } from 'services/laps/actions';
import LapsList from './components/LapsList';
import Counter from './components/Counter';

export class Main extends Component {
  static propTypes = {
    laps: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])).isRequired,
    isLoading: PropTypes.bool.isRequired,
    getLaps: PropTypes.func.isRequired,
    saveLaps: PropTypes.func.isRequired,
    deleteLaps: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLaps();
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { isLoading, laps, saveLaps, deleteLaps } = this.props;

    return (
      <main>
        <Card>
          <CardHeader title="StopWatch" />
          <CardBody>
            <Counter
              saveLaps={saveLaps} />
          </CardBody>
          <CardFooter>
            <LapsList
              isLoading={isLoading}
              laps={laps}
              deleteLaps={deleteLaps} />
          </CardFooter>
        </Card>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.laps.isLoading,
  laps: state.laps.data,
});

const mapDispatchToProps = dispatch => ({
  getLaps: bindActionCreators(getLaps, dispatch),
  saveLaps: bindActionCreators(saveLaps, dispatch),
  deleteLaps: bindActionCreators(deleteLaps, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
