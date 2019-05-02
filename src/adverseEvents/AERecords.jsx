import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AERecordList from './AERecordList';

function AERecords(props) {

  let tab1Class='tab', tab2Class='tab', tab3Class='tab';
  let description='';

  switch(props.selectedTab) {
    case props.tabs[0].id:
      tab1Class = 'tab selected';
      description = props.tabs[0].description;
      break;
    case props.tabs[1].id:
      tab2Class = 'tab selected';
      description = props.tabs[1].description;
      break;
    case props.tabs[2].id:
      tab3Class = 'tab selected';
      description = props.tabs[2].description;
      break;
    default:
      tab1Class = 'tab selected';
      description = props.tabs[0].description;
  }

  return (
    <div>
      <div className="tabs">
        <div className={tab1Class}
            data-tab={props.tabs[0].id}
            data-index="0"
            onClick={props.onTabChange}>
             {props.tabs[0].label}
        </div>
        <div className={tab2Class}
            data-tab={props.tabs[1].id}
            data-index="1"
            onClick={props.onTabChange}>
             {props.tabs[1].label}
        </div>
        <div className={tab3Class}
            data-tab={props.tabs[2].id}
            data-index="2"
            onClick={props.onTabChange}>
             {props.tabs[2].label}
        </div>
      </div>
      <AERecordList recordList={props.recordList}
          description={description}/>
    </div>
  );
}

AERecords.propTypes = {
  tabs: PropTypes.array,
  fetched: PropTypes.bool,
  recordList: PropTypes.array,
  selectedTab: PropTypes.string
};

export default connect()(AERecords);
