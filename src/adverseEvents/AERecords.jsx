import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styles from "../styles/adverseEvents/AERecords.scss";
import { selectTab, fetchRecords } from "./../actions";
import AERecordList from "./AERecordList";
import { Doughnut } from 'react-chartjs-2';

class AERecords extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  componentWillMount() {
    //select default tab when loading component
    this.props.dispatch(selectTab(this.props.tabs[0].id));
  }

  handleChangeTab(event) {
    this.props.dispatch(selectTab(event.target.attributes['data-tab'].value));
  }

  render() {

    if(this.props.selectedTab && this.props.fetched === false) {
      let index = this.props.tabs.findIndex(item => item.id === this.props.selectedTab);
      this.props.dispatch(fetchRecords(this.props.tabs[index]));
    }

    let tab1Class = this.props.selectedTab === this.props.tabs[0].id ? 'tab selected' : 'tab';
    let tab2Class = this.props.selectedTab === this.props.tabs[1].id ? 'tab selected' : 'tab';
    let tab3Class = this.props.selectedTab === this.props.tabs[2].id ? 'tab selected' : 'tab';

    return (
      <div>
        <div className="tabs">
          <div className={tab1Class}
               data-tab={this.props.tabs[0].id}
               data-index="0"
               onClick={this.handleChangeTab}>
               {this.props.tabs[0].label}
          </div>
          <div className={tab2Class}
               data-tab={this.props.tabs[1].id}
               data-index="1"
               onClick={this.handleChangeTab}>
               {this.props.tabs[1].label}
          </div>
          <div className={tab3Class}
               data-tab={this.props.tabs[2].id}
               data-index="2"
               onClick={this.handleChangeTab}>
               {this.props.tabs[2].label}
          </div>
        </div>
        <AERecordList recordList={this.props.recordList}/>
      </div>
    );
  }
};

AERecords.propTypes = {
  tabs: PropTypes.array,
  fetched: PropTypes.bool,
  recordList: PropTypes.array,
  selectedTab: PropTypes.string
};

const mapStateToProps = state => {

  let info;
  if(state.selectedTab) {
    info = {
      fetched: state.recordList[state.selectedTab].retrieved,
      selectedTab: state.selectedTab,
      recordList: state.recordList[state.selectedTab].data
    };
  }
  else {
    info = {
      fetched: false,
      selectedTab: state.selectedTab,
      recordList: []
    };
  }
  return info;
};

export default connect(mapStateToProps)(AERecords);
