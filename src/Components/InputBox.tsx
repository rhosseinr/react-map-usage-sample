import React from 'react';
import 'Assets/Sass/inputbox.scss';

export type InputBoxProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'search' | 'email' | 'password' | 'tel' | 'number';
  palceHolder?: string;
  value?: string;
}

function InputBox(props: InputBoxProps) {
  return (
    <input
      type={props.type}
      placeholder={props.palceHolder}
      value={props.value}
      onChange={props.onChange} />
  );
}

export default InputBox;
