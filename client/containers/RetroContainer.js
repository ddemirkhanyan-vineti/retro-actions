import React from 'react';

import Input from '../components/base/input';
import Select from '../components/base/select';
import RetroItem from '../components/RetroItem';
import RetroDatePicker from '../components/DatePicker';

class RetroContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      master: 'Please select a retro master'
    }
  }

  onSelect(value) {
    this.setState({master: value})
  }

  onChange(value) {
    this.setState({title: value})
  }

  onDateChange(date) {
    this.setState({startDate: date});
  }

  render() {
    const {filter, options} = this.props;
    const {master, title} = this.state;

    const retroList = (
      <div className="column is-4 messages hero is-fullheight">
        <div id="inbox-messages" className="inbox-messages">
          <RetroItem />
          <RetroItem />
          <RetroItem />
        </div>
      </div>
    );

    const retroAdd = (
      <div id="message-feed" className="column is-4 messages hero is-fullheight">
        <Input value={title} label="Title" type="text" placeholder="Please enter retro title" onChange={(value) => {this.onChange(value)}}/>
        <RetroDatePicker label="Date" onChange={(date) => this.onDateChange(date)} />
        <Select label="Master" value={master} options={options} onSelect={(value) => this.onSelect(value)} />
      </div>
    )

    return filter === 'add-retro' ? retroAdd : retroList;
  }
}

export default RetroContainer;