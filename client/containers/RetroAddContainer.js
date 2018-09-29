import React from 'react';

import Input from '../components/base/input';
import Select from '../components/base/select';
import InputWithSelect from '../components/base/input_with_select';
import RetroDatePicker from '../components/DatePicker';

class RetroAddContainer extends React.Component {
  constructor() {
    super();
    const items = [0,1,2,3,4].map(index => {
      return {
        id: index,
        owner: 'Please select an action owner',
        description: ''
      }
    });

    this.state = {
      title: '',
      master: 'Please select a retro master',
      items
    }
  }

  onMasterSelect(value) {
    this.setState({master: value})
  }

  onTitleChange(value) {
    this.setState({title: value})
  }

  onDateChange(date) {
    this.setState({startDate: date});
  }

  onItemSelect(index, value) {
    const {items} = this.state;
    items[index].owner = value;
    this.setState({items});
  }

  onItemChange(index, value) {
    const {items} = this.state;
    items[index].description = value;
    this.setState({items});
  }

  render() {
    const {options} = this.props;
    const {master, title, items} = this.state;

    const inputList = [0,1,2,3,4].map(index => {
      return <InputWithSelect
        key={index}
        label={`Item ${index}`}
        placeholder="Please add an action item"
        selectedValue={items[index].owner}
        options={options}
        onChange={(value) => this.onItemChange(index, value)}
        onSelect={(value) => this.onItemSelect(index, value)}
      />
    })

    return (
      <div className="columns">
        <div className="column is-8 messages hero is-fullheight">
          <Input value={title} label="Title" type="text" placeholder="Please enter retro title" onChange={(value) => {this.onTitleChange(value)}}/>
          <RetroDatePicker label="Date" onChange={(date) => this.onDateChange(date)} />
          <Select label="Master" value={master} options={options} onSelect={(value) => this.onMasterSelect(value)} />
          <div className="control create-retro">
            <button className="button is-primary">Create Retro</button>
          </div>
        </div>

        <div className="column is-12 messages hero is-fullheight">
          { inputList }
        </div>
      </div>
    );
  }
}

export default RetroAddContainer;