import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { adverseEventsData } = constants;
import { fetchAETimeData, selectTab, fetchRecords, fetchSeriousness, fetchSources } from './../actions';
import GlobalNav from '../app/GlobalNav';
import AEHeader from './AEHeader';
import AELinechart from './AELinechart';
import AESeriousness from './AESeriousness';
import AESource from './AESource';
import AERecords from './AERecords';
import Footer from '../app/Footer';

class AEdrugs extends React.Component {

  constructor(props) {
    super(props);
    this.page = 'Drug';
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  componentWillMount() {
    // select default tab when loading component
    this.props.dispatch(selectTab(adverseEventsData.drug.tabs[0].id, this.page.toLowerCase()));

    if(!this.props.timesFetched) {
      this.props.dispatch(fetchAETimeData(this.page.toLowerCase(), adverseEventsData.drug.dateEndpoint));
    }
    if(!this.props.seriousnessFetched) {
      this.props.dispatch(fetchSeriousness(this.page.toLowerCase(), adverseEventsData.drug.seriousEndpoint));
    }
    if(!this.props.sourcesFetched) {
      this.props.dispatch(fetchSources(this.page.toLowerCase(), adverseEventsData.drug.sourcesEndpoint));
    }
  }

  handleChangeTab(event) {
    this.props.dispatch(selectTab(event.target.attributes['data-tab'].value, this.page.toLowerCase()));
  }

  render() {

    // fetch data for selected tab, only when it is not present in the redux store
    if(this.props.selectedTab && this.props.recordsFetched === false) {
      let index = adverseEventsData.drug.tabs.findIndex(item => item.id === this.props.selectedTab);
      this.props.dispatch(fetchRecords(adverseEventsData.drug.tabs[index], this.page.toLowerCase()));
    }

    return (
      <div>
        <GlobalNav/>
        <AEHeader page={this.page}/>
        <div className="ae-block-grid">
          <div className="one report-item">
            <AELinechart title={`Total ${this.page} Adverse Event Reports Since 2004`}
                times={this.props.times}/>
          </div>
          <div className="two report-item">
            <AESeriousness seriousness={this.props.seriousness}/>
          </div>
          <div className="three report-item">
            <AESource sources={this.props.sources}/>
          </div>
          <div className="four report-item">
            <AERecords tabs={adverseEventsData.drug.tabs}
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

AEdrugs.propTypes = {
  timesFetched: PropTypes.bool,
  sourcesFetched: PropTypes.bool,
  recordsFetched: PropTypes.bool,
  times: PropTypes.object,
  seriousness: PropTypes.array,
  sources: PropTypes.array,
  selectedTab: PropTypes.string,
  recordList: PropTypes.array
};

const mapStateToProps = state => {

  let info = {
    timesFetched: state.adverseEvents.drug.timeData.retrieved,
    seriousnessFetched: state.adverseEvents.drug.seriousness.retrieved,
    sourcesFetched: state.adverseEvents.drug.sources.retrieved,
    recordsFetched: false,
    times: state.adverseEvents.drug.timeData,
    seriousness: state.adverseEvents.drug.seriousness.counts,
    sources: state.adverseEvents.drug.sources.counts,
    selectedTab: state.adverseEvents.drug.selectedTab,
    recordList: []
  };
  if(info.selectedTab) {
    info.recordsFetched = state.adverseEvents.drug.recordList[info.selectedTab].retrieved;
    info.recordList = state.adverseEvents.drug.recordList[info.selectedTab].data;
  }
  return info;
};

export default connect(mapStateToProps)(AEdrugs);
