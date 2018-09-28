import React from 'react';

const Input = ({label, type, placeholder, onChange}) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">{label}</label>
    </div>
    <div className="field-body">
      <div className="field">
        <p className="control">
          <input className="input" type={type} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}/>
        </p>
      </div>
    </div>
  </div>
);

export default Input;