import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Select extends React.Component {
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

  render() {
    const {label, options, value} = this.props;
    const {active} = this.state;

    return (
      <div className="field is-horizontal">
        <div className="column is-1 field-label is-normal">
          <label className="label">{label}</label>
        </div>
        <div className="field-body">
          <div className={active ? 'dropdown is-active' : 'dropdown'}>
            <div className="dropdown-trigger">
              <button className="button" onClick={() => this.toggleDropdown()}>
                <span>{value}</span>
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
      </div>
    );
  }
}

export default Select;