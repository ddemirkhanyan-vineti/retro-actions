import React from 'react';

const Input = ({label, type, value, placeholder, onChange}) => (
  <div className="field is-horizontal">
    <div className="column is-1 field-label is-normal">
      <label className="label">{label}</label>
    </div>
    <div className="field-body">
      <div className="field">
        <p className="control">
          <input className="input" value={value} type={type} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}/>
        </p>
      </div>
    </div>
  </div>
);

export default Input;