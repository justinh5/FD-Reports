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

class Recallsdrug extends React.Component {

  constructor(props) {
    super(props);
    this.page = 'Drug';
  }

  componentWillMount() {
    if(!this.props.timesFetched) {
      this.props.dispatch(fetchRecallTimeData(this.page.toLowerCase(),
                                              recallData.drug.endpointA,
                                              recallData.drug.endpointB));
    }
    if(!this.props.statusFetched) {
      this.props.dispatch(fetchStatusData(this.page.toLowerCase(), recallData.drug.statusEndpoint));
    }
    if(!this.props.classesFetched) {
      this.props.dispatch(fetchClassData(this.page.toLowerCase(), recallData.drug.classEndpoint));
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
                setA={recallData.drug.setA}
                setB={recallData.drug.setB}
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

Recallsdrug.propTypes = {
  statusFetched: PropTypes.bool,
  classesFetched: PropTypes.bool,
  timesFetched: PropTypes.bool,
  times: PropTypes.object,
  status: PropTypes.object,
  classes: PropTypes.object
};

const mapStateToProps = state => {

  return {
    timesFetched: state.recalls.drug.timeData.retrieved,
    times: state.recalls.drug.timeData,
    statusFetched: state.recalls.drug.statusData.retrieved,
    status: state.recalls.drug.statusData,
    classesFetched: state.recalls.drug.classes.retrieved,
    classes: state.recalls.drug.classes
  };
};


export default connect(mapStateToProps)(Recallsdrug);
