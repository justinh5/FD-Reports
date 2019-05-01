import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../styles/adverseEvents/adverseEvents.scss';
import constants from './../constants';
const { adverseEventsData } = constants;
import { fetchAETimeData, selectTab, fetchRecords } from './../actions';
import GlobalNav from '../app/GlobalNav';
import AEHeader from './AEHeader';
import AELinechart from './AELinechart';
import AESeriousness from './AESeriousness';
import AESource from './AESource';
import AERecords from './AERecords';
import Footer from '../app/Footer';

class AEdevices extends React.Component {

  constructor(props) {
    super(props);
    this.page = 'Food';
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  componentWillMount() {
    // select default tab when loading component
    this.props.dispatch(selectTab(adverseEventsData.food.tabs[0].id, this.page.toLowerCase()));

    if(!this.props.timesFetched) {
      this.props.dispatch(fetchAETimeData(this.page.toLowerCase(), adverseEventsData.food.dateEndpoint));
    }
  }

  handleChangeTab(event) {
    this.props.dispatch(selectTab(event.target.attributes['data-tab'].value, this.page.toLowerCase()));
  }

  render() {

    // fetch data for selected tab, only when it is not present in the redux store
    if(this.props.selectedTab && this.props.recordsFetched === false) {
      let index = adverseEventsData.food.tabs.findIndex(item => item.id === this.props.selectedTab);
      this.props.dispatch(fetchRecords(adverseEventsData.food.tabs[index], this.page.toLowerCase()));
    }

    return (
      <div>
        <GlobalNav/>
        <AEHeader page={this.page}/>
        <div className="block-grid">
          <div className="one report-item">
            <AELinechart title={`Total ${this.page} Adverse Event Reports Since 2004`}
                         times={this.props.times}/>
          </div>
          <div className="four report-item">
            <AERecords tabs={adverseEventsData.food.tabs}
                       onTabChange={this.handleChangeTab}
                       recordsFetched={this.props.recordsFetched}
                       selectedTab={this.props.selectedTab}
                       recordList={this.props.recordList}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

AEdevices.propTypes = {
  timesFetched: PropTypes.bool,
  times: PropTypes.object,
  recordsFetched: PropTypes.bool,
  selectedTab: PropTypes.string,
  recordList: PropTypes.array
};

const mapStateToProps = state => {

  let info = {
    timesFetched: state.adverseEvents.food.timeData.retrieved,
    times: state.adverseEvents.food.timeData,
    recordsFetched: false,
    selectedTab: state.adverseEvents.food.selectedTab,
    recordList: []
  };
  if(info.selectedTab) {
    info.recordsFetched = state.adverseEvents.food.recordList[info.selectedTab].retrieved;
    info.recordList = state.adverseEvents.food.recordList[info.selectedTab].data;
  }
  return info;
}


export default connect(mapStateToProps)(AEdevices);
