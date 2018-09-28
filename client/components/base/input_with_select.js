import React from 'react';

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

  render() {
    const {label, placeholder, options, value} = this.props;
    const {active} = this.state;

    return (
      <div className="field is-horizontal">
        <div className="column is-1 field-label is-normal">
          <label className="label">{label}</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input" type="text" placeholder={placeholder}/>
            </p>
          </div>
        </div>
        <div className={active ? 'dropdown is-active is-2 field-body' : 'dropdown is-2 field-body'}>
          <div className="dropdown-trigger">
            <button className="button" onClick={() => this.toggleDropdown()}>
              <span>{value}</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
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