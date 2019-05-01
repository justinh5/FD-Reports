import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../styles/recalls/recalls.scss';
import constants from './../constants';
const { recallData } = constants;
import { fetchRecallTimeData, fetchStatusData, fetchClassData } from './../actions';
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
                                              recallData.food.endpointA,
                                              recallData.food.endpointB));
    }
    if(!this.props.statusFetched) {
      this.props.dispatch(fetchStatusData(this.page.toLowerCase(), recallData.food.statusEndpoint));
    }
    if(!this.props.classesFetched) {
      this.props.dispatch(fetchClassData(this.page.toLowerCase(), recallData.food.classEndpoint));
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
                              setA={recallData.food.setA}
                              setB={recallData.food.setB}
                              times={this.props.times}/>
          </div>
          <div className="two report-item">
            <RecallsStatus status={this.props.status}/>
          </div>
          <div className="three report-item">
            <RecallsClassifications title={`${this.page} Recall Classifications`}
                                    classes={this.props.classes}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Recallsfood.propTypes = {
  statusFetched: PropTypes.bool,
  classesFetched: PropTypes.bool,
  timesFetched: PropTypes.bool,
  times: PropTypes.object,
  status: PropTypes.object,
  classes: PropTypes.object
};

const mapStateToProps = state => {

  return {
    timesFetched: state.recalls.food.timeData.retrieved,
    times: state.recalls.food.timeData,
    statusFetched: state.recalls.food.statusData.retrieved,
    status: state.recalls.food.statusData,
    classesFetched: state.recalls.food.classes.retrieved,
    classes: state.recalls.food.classes
  };
}


export default connect(mapStateToProps)(Recallsfood);
