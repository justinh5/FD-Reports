import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../styles/recalls/recalls.scss';
import constants from './../constants';
const { timeData } = constants;
import { fetchRecallTimeData } from './../actions';
import GlobalNav from '../app/GlobalNav';
import RecallsHeader from './RecallsHeader';
import RecallsLinechart from './RecallsLinechart';
import RecallsStatus from './RecallsStatus';
import RecallsClassifications from './RecallsClassifications';
import Footer from '../app/Footer';

class Recallsfood extends React.Component {

  constructor(props) {
    super(props);
    this.page = 'Food';
  }

  componentWillMount() {
    if(!this.props.timesFetched) {
      this.props.dispatch(fetchRecallTimeData(this.page.toLowerCase(),
                                              timeData.recalls.food.endpointA,
                                              timeData.recalls.food.endpointB));
    }
  }

  render() {
    return (
      <div>
        <GlobalNav/>
        <RecallsHeader page={this.page}/>
        <div className="block-grid">
          <div className="one report-item">
            <RecallsLinechart title={`Total ${this.page} Recall Reports Since 2012`}
                         labels={this.props.labels}
                         setA={timeData.recalls.food.setA}
                         setB={timeData.recalls.food.setB}
                         countsA={this.props.countsA}
                         countsB={this.props.countsB}/>
          </div>
          <div className="two report-item">
            <RecallsStatus/>
          </div>
          <div className="three report-item">
            <RecallsClassifications title={`${this.page} Recall Classifications`}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Recallsfood.propTypes = {
  timesFetched: PropTypes.bool,
  labels: PropTypes.array,
  countsA: PropTypes.array,
  countsB: PropTypes.array
};

const mapStateToProps = state => {

  return {
    timesFetched: state.recalls.food.timeData.retrieved,
    labels: state.recalls.food.timeData.data.labels,
    countsA: state.recalls.food.timeData.data.countsA,
    countsB: state.recalls.food.timeData.data.countsB
  };
}


export default connect(mapStateToProps)(Recallsfood);
