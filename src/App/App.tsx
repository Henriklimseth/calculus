import React from 'react';
import { createUseStyles } from 'react-jss';
import { Differentiate } from '../Differentiate/Differentiate';
import { Header } from '../Header/Header';
import { Integrate } from '../Integrate/Integrate';
import { black, yellow, blue } from '../colors';

export const App = () => {
  const { app } = useStyles();
  return (
    <div className={app}>
      <Header />
      <Differentiate />
      <Integrate />
    </div>
  );
};

const useStyles = createUseStyles({
  '@global': {
    body: {
      backgroundColor: black,
      color: blue,
    },
  },
  app: {
    textAlign: 'center',
  },
});
