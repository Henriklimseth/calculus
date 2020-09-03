import React from 'react';
import { createUseStyles } from 'react-jss';
import { blue, black, yellow, green } from '../colors';

interface IProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: IProps) => {
  const { buttonStyle } = useStyles();
  return (
    <button onClick={onClick} className={buttonStyle}>
      {label}
    </button>
  );
};

const useStyles = createUseStyles({
  buttonStyle: {
    backgroundColor: blue,
    color: black,
    fontSize: '15px',
    border: 'none',
    width: '70px',
    height: '30px',
    '&:focus': {
      outline: 'none',
      fontWeight: '500',
      textDecoration: 'underline',
    },
  },
});
