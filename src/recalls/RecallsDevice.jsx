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

class Recallsdevice extends React.Component {

  constructor(props) {
    super(props);
    this.page = 'Device';
  }

  componentWillMount() {
    if(!this.props.timesFetched) {
      this.props.dispatch(fetchRecallTimeData(this.page.toLowerCase(),
                                              recallData.device.endpointA,
                                              recallData.device.endpointB));
    }
    if(!this.props.statusFetched) {
      this.props.dispatch(fetchStatusData(this.page.toLowerCase(), recallData.device.statusEndpoint));
    }
    if(!this.props.classesFetched) {
      this.props.dispatch(fetchClassData(this.page.toLowerCase(), recallData.device.classEndpoint));
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
                setA={recallData.device.setA}
                setB={recallData.device.setB}
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

Recallsdevice.propTypes = {
  statusFetched: PropTypes.bool,
  classesFetched: PropTypes.bool,
  timesFetched: PropTypes.bool,
  times: PropTypes.object,
  status: PropTypes.object,
  classes: PropTypes.object
};

const mapStateToProps = state => {

  return {
    timesFetched: state.recalls.device.timeData.retrieved,
    times: state.recalls.device.timeData,
    statusFetched: state.recalls.device.statusData.retrieved,
    status: state.recalls.device.statusData,
    classesFetched: state.recalls.device.classes.retrieved,
    classes: state.recalls.device.classes
  };
};


export default connect(mapStateToProps)(Recallsdevice);
