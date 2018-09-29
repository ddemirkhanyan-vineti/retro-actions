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
    const availableMinTime = startDate.format('YYYYMMDD') !== moment().format('YYYYMMDD') ? startDate.hours(0).minutes(0) : moment();
    const availableMaxTime = moment().hours(23).minutes(30);

    return (
      <div className="field is-horizontal">
        <div className="column is-1 field-label is-normal">
          <label className="label">{label}</label>
        </div>
        <div className="field-body">
          <div className="field">
            <ReactPicker
              selected={startDate}
              onChange={onDateChange}
              showTimeSelect
              minDate={moment()}
              minTime={availableMinTime}
              maxTime={availableMaxTime}
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