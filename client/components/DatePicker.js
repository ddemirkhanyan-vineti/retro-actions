import React from 'react';

import ReactPicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class RetroDatePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: moment()
    }
  }

  render() {
    const {label} = this.props;
    const {startDate} = this.state;

    const onDateChange = (dateTime) => {
      this.setState({startDate: dateTime});
    }

    return (
      <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <ReactPicker
            selected={startDate}
            onChange={onDateChange}
            showTimeSelect
            minDate={moment()}
            minTime={moment()}
            maxTime={moment().hours(23).minutes(30)}
            dateFormat="LLL"
            placeholderText="Start Date" 
          />
        </div>
      </div>
    </div>
    );
  }
}

export default RetroDatePicker;