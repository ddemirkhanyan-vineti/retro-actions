import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class InputWithSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    }
  }

  toggleDropdown() {
    const {active} = this.state;
    this.setState({active: !active})
  }

  onSelect(value) {
    this.setState({active: false})
    this.props.onSelect(value);
  }

  onChange(value) {
    this.props.onChange(value);
  }

  render() {
    const {label, placeholder, options, inputValue, selectedValue} = this.props;
    const {active} = this.state;

    return (
      <div className="field is-horizontal">
        <div className="column is-1 field-label is-normal">
          <label className="label">{label}</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                value={inputValue}
                placeholder={placeholder}
                onChange={(e) => this.onChange(e.target.value)}
              />
            </p>
          </div>
        </div>
        <div className={active ? 'dropdown is-active is-2 field-body' : 'dropdown is-2 field-body'}>
          <div className="dropdown-trigger">
            <button className="button" onClick={() => this.toggleDropdown()}>
              <span>{selectedValue}</span>
              <span className="icon is-small">
                <FontAwesomeIcon icon="angle-down"/>
              </span>
            </button>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              {
                options.map(({id, value}) => {
                  return <a key={id} onClick={() => this.onSelect(value)} className="dropdown-item">{value}</a>
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputWithSelect;