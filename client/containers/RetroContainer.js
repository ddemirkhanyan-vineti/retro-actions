import React from 'react';

import Input from '../components/base/input';
import Select from '../components/base/select';
import RetroItem from '../components/RetroItem';
import RetroDatePicker from '../components/DatePicker';

const OPTIONS = [
  {
    id: 1, value: 'Konstantin Sargsyan'
  },
  {
    id: 2, value: 'Nare Zakaryan'
  },
  {
    id: 3, value: 'Tigran Astvatsatryan'
  }
];
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
    console.log(this.state);
  }

  render() {
    const {filter} = this.props;
    const {master} = this.state;

    const retroList = (
      <div id="message-feed" className="column is-4 messages hero is-fullheight">
        <div id="inbox-messages" className="inbox-messages">
          <RetroItem />
          <RetroItem />
          <RetroItem />
        </div>
      </div>
    );

    const retroAdd = (
      <div id="message-feed" className="column is-4 messages hero is-fullheight">
        <Input label="Title" type="text" placeholder="Please enter retro title" onChange={(value) => {this.onChange(value)}}/>
        <RetroDatePicker label="Date" onChange={(date) => this.onDateChange(date)} />
        <Select label="Master" value={master} options={OPTIONS} onSelect={(value) => this.onSelect(value)} />
      </div>
    )

    return filter === 'add-retro' ? retroAdd : retroList;
  }
}

export default RetroContainer;