import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { adverseEventsData } = constants;
import { fetchAETimeData, selectTab, fetchRecords } from './../actions';
import GlobalNav from '../app/GlobalNav';
import AEHeader from './AEHeader';
import AELinechart from './AELinechart';
import AERecords from './AERecords';
import Footer from '../app/Footer';

class AEdevices extends React.Component {

  constructor(props) {
    super(props);
    this.page = 'Device';
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  componentWillMount() {
    // select default tab when loading component
    this.props.dispatch(selectTab(adverseEventsData.device.tabs[0].id, this.page.toLowerCase()));

    if(!this.props.timesFetched) {
      this.props.dispatch(fetchAETimeData(this.page.toLowerCase(), adverseEventsData.device.dateEndpoint));
    }
  }

  handleChangeTab(event) {
    this.props.dispatch(selectTab(event.target.attributes['data-tab'].value, this.page.toLowerCase()));
  }

  render() {

    // fetch data for selected tab, only when it is not present in the redux store
    if(this.props.selectedTab && this.props.recordsFetched === false) {
      let index = adverseEventsData.device.tabs.findIndex(item => item.id === this.props.selectedTab);
      this.props.dispatch(fetchRecords(adverseEventsData.device.tabs[index], this.page.toLowerCase()));
    }

    return (
      <div>
        <GlobalNav/>
        <AEHeader page={this.page}/>
        <div className="ae-block-grid">
          <div className="one report-item">
            <AELinechart title={`Total ${this.page} Adverse Event Reports Since 1991`}
                times={this.props.times}/>
          </div>
          <div className="four report-item">
            <AERecords tabs={adverseEventsData.device.tabs}
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
    timesFetched: state.adverseEvents.device.timeData.retrieved,
    times: state.adverseEvents.device.timeData,
    recordsFetched: false,
    selectedTab: state.adverseEvents.device.selectedTab,
    recordList: []
  };
  if(info.selectedTab) {
    info.recordsFetched = state.adverseEvents.device.recordList[info.selectedTab].retrieved;
    info.recordList = state.adverseEvents.device.recordList[info.selectedTab].data;
  }
  return info;
};


export default connect(mapStateToProps)(AEdevices);
