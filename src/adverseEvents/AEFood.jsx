import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../styles/adverseEvents/adverseEvents.scss';
import constants from './../constants';
const { tabs, timeData } = constants;
import { fetchTimeData } from './../actions';
import GlobalNav from '../app/GlobalNav';
import AEHeader from './AEHeader';
import AELinechart from './AELinechart';
import AESeriousness from './AESeriousness';
import AESource from './AESource';
import AERecords from './AERecords';
import Footer from '../app/Footer';

class AEfood extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(!this.props.timesFetched) {
      this.props.dispatch(fetchTimeData(timeData.adverseEvents.food.id, timeData.adverseEvents.food.endpoint));
    }
  }

  render() {

    return (
      <div>
        <GlobalNav/>
        <AEHeader/>
        <div className="block-grid">
          <div className="one report-item">
            <AELinechart title={timeData.adverseEvents.food.title}
                         yaxis={timeData.adverseEvents.food.yaxis}
                         labels={this.props.labels}
                         counts={this.props.counts}/>
          </div>
          <div className="two report-item">
            <AESeriousness/>
          </div>
          <div className="three report-item">
            <AESource/>
          </div>
          <div className="four report-item">
            <AERecords tabs={tabs.food}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

AEfood.propTypes = {
  timesFetched: PropTypes.bool,
  labels: PropTypes.array,
  counts: PropTypes.array
};

const mapStateToProps = state => {

  return {
    timesFetched: state.timeData.aeFood.retrieved,
    labels: state.timeData.aeFood.data.labels,
    counts: state.timeData.aeFood.data.counts
  };

}

export default connect(mapStateToProps)(AEfood);
