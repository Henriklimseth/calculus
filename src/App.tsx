import React from 'react';
import { createUseStyles } from 'react-jss';
import { Differentiate } from './Differentiate/Differentiate';
import { Header } from './Header/Header';
import { Integrate } from './Integrate/Integrate';

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
  app: {
    textAlign: 'center',
  },
});
